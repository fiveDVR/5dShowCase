
// Shows a temporary message banner/ribbon for a few seconds, or
// a permanent error message on top of the canvas if type=='error'.
// If type=='warning', a yellow highlight color is used.
// Modify or remove this function to customize the visually presented
// way that non-critical warnings and error messages are presented to the
// user.

var buildUrl = "Build";
var loaderUrl = buildUrl + "/5dWebARCard.loader.js";
var config = {
    dataUrl: "Build/5dWebARCard.data",
    frameworkUrl: "Build/5dWebARCard.framework.js",
    codeUrl: "Build/5dWebARCard.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "5d ShowCase AR",
    productVersion: "0.1",
};


var loadingBar = document.querySelector("#unity-loading-bar");
var progressBarFull = document.querySelector("#unity-progress-bar-full");

loadingBar.style.display = "block";

var script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {
        progressBarFull.style.width = 100 * progress + "%";
    })
        .then((unityInstance) => {
            unityGame = unityInstance;
            loadingBar.style.display = "none";
        })
        .catch((message) => {
            alert(message);
        });
};
document.body.appendChild(script);
