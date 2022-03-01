itemX=0;
itemY=0;

function preload(){
    moustache = loadImage("https://i.postimg.cc/y8RHxgF1/moustache-PNG18.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Has Loaded');
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(moustache,itemX-15,itemY+40, 45, 45);
}

function take_snapshot(){
    save('filtered_image.png');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        itemX = results[0].pose.nose.x;
        itemY = results[0].pose.nose.x;
        console.log("moustache x = " + results[0].pose.nose.x);
        console.log("moustache y = " + results[0].pose.nose.y);
    }
}