
# Video Call Web App

This is a **one-on-one video call** web application developed using **React**, **WebRTC**, **Node.js**, and **Sockets**. It enables real-time video communication between two users, leveraging WebRTC for peer-to-peer connection and Sockets for signaling.

## Features

- **One-on-One Video Calls**: Users can connect with each other for a real-time video conversation.
- **WebRTC Integration**: Utilizes WebRTC to enable peer-to-peer video streaming.
- **Socket.IO for Signaling**: Manages the exchange of signaling data to establish and maintain the WebRTC connection.
- **React Frontend**: The user interface is built using React for a responsive and dynamic experience.
  
## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Real-Time Communication**: WebRTC, Socket.IO
- **Server-Side Dependencies**:
  - `express`
  - `socket.io`

## How It Works

1. **Signaling Process**: 
   - The application uses Socket.IO for the signaling process, which is essential for establishing a WebRTC connection. Signaling allows two clients to communicate information such as SDP (Session Description Protocol) and ICE (Interactive Connectivity Establishment) candidates.

2. **Peer-to-Peer Video Streaming**:
   - Once signaling is completed, WebRTC establishes a direct peer-to-peer connection between the users. Audio and video are streamed directly without needing an intermediary server.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/video-call-web-app.git
   cd video-call-web-app
   ```

2. Install dependencies:

   ```bash
   npm install
   cd client
   npm install
   ```

3. Run the server:

   ```bash
   npm run start
   ```

4. Run the client:

   ```bash
   cd client
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```
/client           # React frontend
/server           # Node.js backend
  - /routes       # API and signaling routes
  - /controllers  # Controllers for managing signaling logic
```

## Usage

1. Open the web app on two devices or browser tabs.
2. Each user will be assigned a unique ID.
3. Share the ID with the person you want to call.
4. Enter the ID of the person you want to call in the input box and initiate the video call.

## License

This project is licensed under the MIT License.
