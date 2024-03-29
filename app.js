window.onload = function () {
    document.getElementById("camera--sensor").classList.add("hide");
    document.getElementById("camera--view").style.paddingTop="110px";
    document.getElementById("camera--output").style.paddingTop="110px";
};


// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
var track = null;
// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger"),
    UIhide = document.querySelector("#hideUI")

// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
}

// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    cameraSensor.classList.remove("hide");
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");

    //turn off cam and remove the frame, cam button+trigger+cert gen
    cameraView.classList.add("hide");
    track.stop();
    // document.getElementById("berechnen").classList.add("hide");
    // document.getElementById("openCam").classList.add("hide");
    cameraTrigger.style.display="none";
};

//hides all top buttons
UIhide.onclick = function () {
    document.getElementById("hideUI").classList.add("invisible");
    document.getElementById("openCam").classList.add("invisible");
    document.getElementById("berechnen").classList.add("invisible");
/*    document.getElementById("camera--view").style.paddingTop="63px";
    document.getElementById("camera--output").style.paddingTop="63px";*/

};

/*   // Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);*/


// Install ServiceWorker
if ('serviceWorker' in navigator) {
    console.log('CLIENT: service worker registration in progress.');
    navigator.serviceWorker.register( '/camera-app/part-2/sw.js' , { scope : ' ' } ).then(function() {
        console.log('CLIENT: service worker registration complete.');
    }, function() {
        console.log('CLIENT: service worker registration failure.');
    });
} else {
    console.log('CLIENT: service worker is not supported.');
}