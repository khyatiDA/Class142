song1=""
song2=""
img=""
lwx=""
lwy=""
rwx=""
rwy=""

function preload()
{
    song1 = loadSound("music.mp3");
   song2 = loadSound("music2.mp3");
}

function loadSound(){
    console.log("song loaded")
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video , modelLoaded);
	poseNet.on('pose' , gotPoses)


}

function gotPoses(results){
    if (results.length>0) {

        lwx= results[0].pose.leftWrist.x;
        lwy= results[0].pose.leftWrist.y;
        rwx= results[0].pose.rightWrist.x;
        lwy= results[0].pose.rightWrist.y;
    }
}

function modelLoaded(){
	console.log("model is loaded")
}


function draw(){
    image(video,0,0,600,500)
}