const video = document.getElementById('video');
const statusText = document.getElementById('status');

// 1. Load the pre-trained deep learning models
// Ensure the /models directory exists and contains the required weights
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models')
]).then(startVideo).catch(err => {
    console.error("Error loading models:", err);
    statusText.textContent = "Error: Could not load models. Check console.";
});

// 2. Capture images/video from webcam
function startVideo() {
    statusText.textContent = "Requesting webcam access...";
    
    navigator.mediaDevices.getUserMedia({ video: {} })
        .then(stream => {
            video.srcObject = stream;
            statusText.textContent = "Models loaded. Detecting faces...";
            statusText.style.color = "#4caf50"; // Green text for success
        })
        .catch(err => {
            console.error("Error accessing webcam:", err);
            statusText.textContent = "Error: Webcam access denied or unavailable.";
            statusText.style.color = "#f44336"; // Red text for error
        });
}

// 3. Detect faces and draw bounding boxes
video.addEventListener('play', () => {
    // Create a canvas overlay directly from the video element
    const canvas = faceapi.createCanvasFromMedia(video);
    document.querySelector('.video-container').append(canvas);
    
    // Match the canvas size to the video display size
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);

    // Run detection in a loop
    setInterval(async () => {
        // Detect all faces using the TinyFaceDetector (fastest for web)
        const detections = await faceapi.detectAllFaces(
            video, 
            new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks()
        .withFaceDescriptors(); // Required if you want to implement face recognition later

        // Resize the bounding boxes to match the display size
        const resizedDetections = faceapi.resizeResults(detections, displaySize);

        // Clear the previous frame's drawings
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

        // Draw the bounding boxes and landmarks
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        
    }, 100); // Runs every 100 milliseconds
});
