HAMZA AI — Android-first starter

WHAT THIS IS
A lightweight installable web-app prototype with a chat screen, quick actions, microphone input where supported, and spoken replies. It is designed to be built and hosted from an Android phone without a PC.

IMPORTANT LIMITATION
This starter is NOT yet connected to a full AI model. It uses simple local responses so you can try the interface for free. For open-ended intelligent answers, connect a hosted AI service. Never put a secret API key directly in index.html; browser code is visible to anyone using the app. A secure backend/proxy is needed for private keys.

EASIEST PHONE-ONLY SETUP
1. Download and extract hamza_ai_starter.zip on your Android phone.
2. Create a GitHub account if needed, then create a new public repository named hamza-ai (public repositories are needed for the simplest free GitHub Pages route).
3. Upload index.html, manifest.json, and sw.js to the repository root. You can do this in Chrome using GitHub's website and the Add file / Upload files option. If ZIP upload is not accepted, upload each file individually after extracting it.
4. In the repository, open Settings > Pages. Under Build and deployment, choose Deploy from a branch, select main and /(root), then Save.
5. Wait for GitHub Pages to publish the site. Open the Pages URL in Chrome on Android.
6. In Chrome, tap the three-dot menu and choose Install app or Add to Home screen (wording varies). Launch HAMZA AI from the new home-screen icon.

VOICE
Microphone input uses the browser's SpeechRecognition feature, which may require an internet connection and may not work in every browser. Spoken replies use the device speech engine. Chrome on Android is the recommended starting point.

NEXT BUILD STEPS
- Add a secure backend and connect a chosen AI provider.
- Add optional memory, reminders/notifications, image analysis, and safe tool integrations one by one.
- Keep trading actions signal-only until thoroughly tested.

PRIVACY
Do not enter passwords, API keys, account credentials, or other secrets into this prototype. Chat messages are not sent to an AI provider by this starter, but browser speech recognition may be processed by the browser/device provider.
