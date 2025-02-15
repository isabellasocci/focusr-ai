# backend/audio_processing/record_audio.py
import sounddevice as sd
import wavio

def record_audio(duration=60, filename="lecture.wav"):
    fs = 44100  # Sample rate
    recording = sd.rec(int(duration * fs), samplerate=fs, channels=2, dtype='int16')
    sd.wait()
    wavio.write(filename, recording, fs, sampwidth=2)
    return filename