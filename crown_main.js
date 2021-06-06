headX = 0;
headY = 0;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function take_snapshot() {
    save("royal.png");
}

function modelLoaded() {
    console.log("model has loaded");
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(crown,headX,headY,300,200);
}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        headX = results[0].pose.nose.x - 250;
        headY = results[0].pose.nose.y - 320;
    }
}

function preload() {
    crown=loadImage('https://i.postimg.cc/dVsNhDWH/crown.png');
}

function hs()
{
    window.location.href = "index.html";
}