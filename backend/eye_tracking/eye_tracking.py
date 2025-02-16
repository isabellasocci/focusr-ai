import os
import subprocess
from google.oauth2 import service_account
from google.auth.transport.requests import Request
import vertexai
from vertexai.generative_models import GenerativeModel, Part, Image
from multiprocessing import Pool, cpu_count, Manager
import glob
from tqdm import tqdm

# Authentication setup
credentials = service_account.Credentials.from_service_account_file(
'focusr-ai-key.json',
scopes=['https://www.googleapis.com/auth/cloud-platform']
)

if credentials.expired:
    credentials.refresh(Request())

# Vertex AI initialization
PROJECT_ID = 'focusr-ai'
REGION = 'us-central1'

vertexai.init(project=PROJECT_ID, location=REGION)

def analyze_frame(args):
    frame_path, progress_dict = args
    model = GenerativeModel("gemini-pro-vision")
    image = Image.load_from_file(frame_path)
    image_part = Part.from_image(image)
    prompt = "Is the user's gaze focused on the camera in this image? Provide a one word yes or no answer only."
    response = model.generate_content([image_part, prompt])
    frame_number = int(frame_path.split('_')[1].split('.')[0])
    
    # Update progress
    result = (frame_path, response.text.upper(), frame_number)
    progress_dict['current_frame'] = f"Frame: {frame_path}, Engagement: {response.text.upper()}, Timestamp: {frame_number}s"
    
    return result

def process_video(video_path):
    frames_dir = "frames"
    if not os.path.exists(frames_dir):
        os.makedirs(frames_dir)
    
    # Extract frames
    print("Extracting frames...")
    subprocess.run([
        'ffmpeg', '-i', video_path, 
        '-vf', 'fps=1', 
        f'{frames_dir}/frame_%04d.png'
    ], stderr=subprocess.DEVNULL)
    
    # Get all frame paths
    frame_paths = sorted(glob.glob(os.path.join(frames_dir, "frame_*.png")))
    
    # Create a manager for sharing progress information
    with Manager() as manager:
        progress_dict = manager.dict()
        progress_dict['current_frame'] = ""
        
        # Create arguments for the pool
        args = [(frame_path, progress_dict) for frame_path in frame_paths]
        
        # Create a pool of workers
        num_processes = cpu_count() - 1  # Leave one core free
        with Pool(processes=num_processes) as pool:
            # Use tqdm to create a progress bar
            results = []
            with tqdm(total=len(frame_paths), desc="Processing frames") as pbar:
                for result in pool.imap_unordered(analyze_frame, args):
                    # Store the engagement and timestamp
                    engagement = result[1]  # Get the engagement status
                    timestamp = result[2]   # Get the timestamp
                    results.append((engagement.strip(), timestamp))
                    pbar.update(1)
    
    # Sort results by timestamp
    results.sort(key=lambda x: x[1])
    
    return results


def find_no_strands(data, min_length=5):
    no_strands = []
    current_strand = []
    
    for engagement, timestamp in data:
        if engagement.strip().upper() == 'NO.':
            current_strand.append(timestamp)
        else:
            if len(current_strand) >= min_length:
                no_strands.append((current_strand[0], current_strand[-1]))
            current_strand = []
    
    if len(current_strand) >= min_length:
        no_strands.append((current_strand[0], current_strand[-1]))
    
    return no_strands

if __name__ == "__main__":
    video_path = "short_test.mp4"
    data = process_video(video_path)
    result = find_no_strands(data)
    for res in result:
        print("You were disengaged from " + str(res[0]) + " to " + str(res[1]) + " seconds")
