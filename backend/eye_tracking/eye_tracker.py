# backend/eye_tracking/eye_tracker.py
import cv2
import mediapipe as mp

mp_face_mesh = mp.solutions.face_mesh.FaceMesh()
cap = cv2.VideoCapture(0)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = mp_face_mesh.process(rgb_frame)
    if results.multi_face_landmarks:
        for face_landmarks in results.multi_face_landmarks:
            left_eye = face_landmarks.landmark[133]
            right_eye = face_landmarks.landmark[362]
            if left_eye.x < 0.4 or right_eye.x > 0.6:
                print("Looking away")
            else:
                print("Focused")
cap.release()
cv2.destroyAllWindows()