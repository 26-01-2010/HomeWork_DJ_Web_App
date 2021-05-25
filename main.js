song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload()
{
	song1 = loadSound("Believer.mp3");
    song2 = loadSound("Harry Potter Theme Song.mp3");
}

function setup()
{
    canvas = createCanvas(400,400);
    canvas.position(500, 160);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    image(video, 0, 0, 600, 400);
}
function playSong()
{
    song.play();
	song.setVolume(1);
	song.rate(1);
}
function modelLoaded()
{
    console.log('PoseNet is initialised!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}