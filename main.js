function setup(){
  
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
