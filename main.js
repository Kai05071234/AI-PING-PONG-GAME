rightWrist_y = 0;
rightWrist_x = 0;
rightWrist_score = "";

function setup(){
  canvas =  createCanvas(700,600);
  canvas.parent("canvas");
  video = createCapture(VIDEO);
  video.size(700, 600);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function modelLoaded() {
  console.log("Model Loaded!!!");
}
function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    rightWrist_x = results[0].pose.rightWrist.x;
    rightWrist_y = results[0].pose.rightWrist.y;
    rightWrist_score = results[0].pose.keypoints[10].score;
    console.log("right wrist x = " + rightWrist_x + " | right wrist y = " + rightWrist_y + " | right wrist score " + rightWrist_score);
  }
}
function draw(){
  if (game_status == "start") {
 background(0); 
 image(video, 0, 0, 700, 600);
 if(rightWrist_score > 0.2)  {
   fill("cyan");
   stroke("cyan");
   circle(rightWrist_x, rightWrist_y, 20);
}
