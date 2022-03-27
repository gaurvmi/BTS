songDefult = "";

song_Mic = "";

song_LGO = "";

 function prload()
 {
    songDefult = "";

 }

 function setup()
 {
     canvas = createCanvas(600, 600 );
     canvas.center();

     video = createCapture(VIDEO);
     video.hide()

 }

 function draw()
 {
     image(video, 0, 0, 600, 600);
 }
