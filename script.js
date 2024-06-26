function preload() {}
function setup(){
   canvas= createCanvas(300,300)
   canvas.center
   video = createCapture(VIDEO) 
   video.hide()
   video.size(100,100)
}

function draw() {
   image(video,150,150)
}

function takescreenshot() {
   save(filterimg.png)}

