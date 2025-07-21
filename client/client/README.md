# D-FEX: DeepFake App Powered by Wav2Lip 🔥

**D-FEX** is a DeepFake application that lets users animate any image using audio or video — simulating and optionally running real AI inference. Built using **React + Vite** for the frontend, **Flask** for the backend, and **Google Colab** to run the heavy ML model (Wav2Lip), this app showcases a production-grade pipeline that separates UI, backend, and AI services cleanly.

---

## 🚀 Features

- 📁 File upload (video/audio/image)
- 🎭 Deepfake generation using real ML model (Wav2Lip)
- 🎬 Frontend simulation to mimic deepfake process for demo mode
- 📦 Backend Flask server connected to Google Colab (ngrok tunneling)
- 🛠️ Fully responsive UI with status tracking, loading animations, and error handling

---

## Try It Yourself

Coming soon...

---

## 🧠 Tech Stack

| Layer         | Tech                                           |
|--------------|------------------------------------------------|
| Frontend     | React + Vite, Tailwind CSS, Framer Motion      |
| Backend      | Python Flask                                   |
| ML Runtime   | Google Colab + ngrok for tunnel API access     |
| Deepfake ML  | [Wav2Lip](https://github.com/Rudrabha/Wav2Lip) |
| Deployment   | GitHub Pages (frontend), ngrok (backend API)   |

---

## ⚙️ How It Works

### Simulation Mode (for demo)
1. User uploads media (image/video/audio).
2. Frontend fakes a "processing" delay.
3. After a few seconds, the pre-processed output is returned to the user.
4. No real ML is triggered — this is a lightweight preview for users that was generated using the real ML Model during developemnt.

### Real ML Mode (for production)
1. Flask backend sends user-uploaded data to Google Colab via HTTP POST.
2. Wav2Lip model in Colab processes the inputs and returns a generated video.
3. Frontend receives the video and allows download.
4. Secure tunneling is handled using `ngrok`.

---

## 🧪 ML Model Tweaks

Originally, I considered using **First Order Motion Model (FOMM)** and **SadTalker** but switched to **Wav2Lip** because:
- FOMM gave poor results with long driving videos.
- SadTalker had compatibility issues since the 6 years old laptop I built this on has no GPU and colab took 30 mins to process a single file.
- Wav2Lip offered much better lip-sync quality using just audio and a static image.

I studied and replaced FOMM and SadTalker with Wav2Lip inside my inference pipeline, ensuring:
- Proper pre/post processing of frames and audio
- File handling via Flask
- Smooth Colab execution using `subprocess` and `app.py` in Colab
- To ensure the Wav2Lip model runs smoothly in the Colab environment, the following dependency versions were carefully adjusted:

```bash
# Fix for audio processing issues
pip install librosa==0.8.0

# Fix for model loading and numpy compatibility
pip install numpy==1.23.5

# Downgraded ffmpeg to prevent audio/video mismatch issues
pip install imageio==2.9.0
pip install imageio-ffmpeg==0.4.2
```

---

## 📈 Making it Production Ready

Here’s what I’ve done or plan to implement:

- ✅ Frontend + Backend split architecture
- ✅ Ngrok tunneling to bridge Google Colab with real app
- 🔒 Secure API access and rate limiting (planned)
- ☁️ Host ML model on Vertex AI or HuggingFace Inference API (planned)
- 🧪 Load testing and metrics logging (planned)
- 🐳 Dockerization for backend (planned)
- 🎯 Add auth + media validation for misuse prevention

---

## 🧠 Real ML vs Simulation Mode

| Feature              | Simulation Mode                             | Real ML Mode (Colab + Flask)                        |
|----------------------|---------------------------------------------|-----------------------------------------------------|
| ML Output            | Placeholder deepfake result (MP4)           | Real Wav2Lip inference via Python Flask API         |
| Backend              | None (frontend-only)                        | Google Colab Flask server via ngrok                 |
| Processing Time      | Instant (fake delay)                        | ~15–20s for real inference                          |
| Use Case             | Fast UI demo, testing                       | Production-grade result using actual ML             |

---

## ✨ Key Features

✅ Upload image + audio/video  
✅ See progress with simulated checkmarks   
✅ Try real deepfake generation via Wav2Lip (Colab)  
✅ Download processed video  
✅ Clean, modern UI using Magic UI + Tailwind + React Bits  
✅ Structured for production deployment (CI/CD, Colab, Flask API)  
✅ Easily extendable to new models (SadTalker, EMO, etc.)

---

## 🧱 Tech Stack

| Layer       | Tech Used                                        |
|-------------|--------------------------------------------------|
| Frontend    | React, Vite, TailwindCSS, MagicUI, Framer Motion |
| Backend     | Flask (Colab-hosted), Ngrok                      |
| ML Model    | Wav2Lip (Custom Flask Wrapper)                   |
| Video Tools | ffmpeg                                           |
| Hosting     | Netlify / Vercel (Frontend), Colab (ML)          |

---

## 🚀 Production-Readiness

| Area                  | Implementation Details                                                             |
|-----------------------|-------------------------------------------------------------------------------------|
| ML Inference          | Offloaded to GPU-powered Google Colab server                                       |
| Frontend Hosting      | Works on Vercel/Netlify (via `npm run build`)                                      |
| Clean UI              | TailwindCSS + Motion animations + responsive design                                |
| Lazy Loading          | Placeholder elements simulate real app flow                                        |
| API Integration       | ML model served via Flask, exposed using ngrok                                     |
| Future Backend Plans  | JWT auth, MongoDB for user uploads, saved history                                  |
| Extendability         | Swappable with SadTalker, EMO, or any other animation model                        |
| Developer Experience  | Modular component structure, CI-ready, fast builds                                 |

---

## 🛠️ Run Locally

### 1. Clone and Setup Frontend

```bash
git clone https://github.com/venmx/DeepFake-App-D-FEX-.git
cd DeepFake-App-D-FEX-/client
npm install
npm run dev
```

---

## 🧠 Start Real ML Server (Wav2Lip Model)
The real deepfake generation is powered by the Wav2Lip model, running remotely via Google Colab.

⚠️ To avoid overloading local machines, ML inference is offloaded to the cloud.

🔌 Steps to Start the ML Server:
Open the hosted Google Colab notebook:
🔗 Wav2Lip Colab Link

Run all cells to:

Mount Google Drive (for model files & input/output)

Start a Flask server with Ngrok tunnel

Copy the public ngrok URL from the output

Paste this URL in the .env file of your React frontend.
Go to the web app and try uploading your audio + video to generate deepfake!

---

## 🚀 Future Improvements
🔧 Add queue management for concurrent user requests

⏱️ Enable processing time estimation for better UX

📈 Integrate GPU monitoring + logging on backend

🎙️ Allow live webcam + microphone input for real-time deepfakes

🔐 Add basic auth or token-based API access for security

☁️ Migrate ML backend to HuggingFace Spaces or AWS Lambda for serverless scale



---

## 🧭 Final Thoughts
This project is a bold mix of frontend interactivity and real machine learning — engineered to feel like magic ✨.

While it began as a simulation, it evolved into a real production-grade ML pipeline, connected across React, Flask, and Colab cloud inferencing.

This isn’t just another deepfake clone — it's a full-stack engineering showcase with real intelligence behind it.

---

### 👩‍💻 Author
- Ananya Raj
- Full-stack  ML Developer


If you're hiring or collaborating on AI projects — let's talk!




