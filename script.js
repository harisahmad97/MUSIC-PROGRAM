//Note: Im on a school chromebook so all my cites are banned i cant see anything im doing .i did my best to get the script to work :)
/Global Variables
Minim minim;
AudioPlayer[4] song = new AudioPlayer[4]; 
AudioMetaData[] songMetaData = new AudioMetaData[4];
//
int currentSong = numberOfSongs - numberOfSongs;
color black=0, purple=#2C08FF; 
PFont titleFont¨Arial¨;
//
void setup()
PImage photo;

void setup() {
  size(400, 400);
  photo = loadImage("music-logo-design.jpg");
}

void draw() {
  image(photo, 0, 0);
}float xoff = 0.0;

void draw() {
  background(204);
  xoff = xoff + .01;
  float n = noise(xoff) * width;
  line(n, 0, n, height);
}float noiseScale = 0.02;

void draw() {
  background(0);
  for (int x=0; x < width; x++) {
    float noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(noiseVal*255);
    line(x, mouseY+noiseVal*80, x, height);
  }
}
{
  size(500, 600); 
  minim = new Minim(this
  song[currentSong] = minim.loadFile("MusicDownload/Ghost_walk.mp3");
  song[currentSong+=1] = minim.loadFile("MusicDownload/The_Simplest.mp3");
  song[currentSong+=1] = minim.loadFile("MusicDownload/Start_Your_Engines.mp3");
  song[currentSong+=1] = minim.loadFile("MusicDownload/Beat_Your_Competition.mp3");
  currentSong-=currentSong;
  for ( int i=currentSong; i<song.length; i++ ) {
    songMetaData[i] = song[i].getMetaData(); 
  }//End Meta Data
  // /* FOR summarizes ...
   songMetaData[0] = song[0].getMetaData(); //reads song meta 1, like song 1, mimicing array notation
   songMetaData[1] = song[1].getMetaData();
   songMetaData[2] = song[2].getMetaData();
   songMetaData[3] = song[3].getMetaData();
   */
  titleFont = createFont ("arial", 60); 
  //
  println( "Start of Console" );
  println( "Click the Console to Finish Starting this Program" ); //Review of OS-level button
  println( "Title", songMetaData[currentSong].title() ); //Introduction of Key:Value Pairs (similar to websites)
  //
}//End setup
//
void draw()
{
  if ( song[currentSong].isLooping() && song[currentSong].loopCount()!=-1 ) println("There are", song[currentSong].loopCount(), "loops left.");
  if ( song[currentSong].isLooping() && song[currentSong].loopCount()==-1 ) println("Looping Infinitely");
  if ( song[currentSong].isPlaying() && !song[currentSong].isLooping() ) println("Play Once");
  //
  println("Current Song:", currentSong);
  println( "Song Position", song[currentSong].position(), "Song Length", song[currentSong].length() );
  //
  background (black); /Reminder of OS-Level Button
  rect(width*1/4, height*0, width*1/2, height*1/10);
  fill(purple); /Ink, hexidecimal copied from Color Selector
  textAlign (CENTER, CENTER); //Align X&Y, see Processing.org / Reference
  Values: [LEFT | CENTER | RIGHT] & [TOP | CENTER | BOTTOM | BASELINE]
  textFont(titleFont, 8); /Change the number until it fits, largest font size
  text(songMetaData[currentSong].title(), width*1/4, height*0, width*1/2, height*1/10);
  fill(255); //Reset to white for rest of the program
  //
}End draw
//
void keyPressed()
{
  First Play Button: if ( key=='p' || key=='P' ) song1.play();
  Update Play Button for Play-Pause
  Fixes Error: pausing near end of song causes confusion for end-user when "play" does not 
  if ( key=='p' || key=='P' ) {
    if ( song[currentSong].isPlaying() ) { 
      song[currentSong].pause();
    } else if ( song[currentSong].position() >= song[currentSong].length()-song[currentSong].length()*1/5 ) {Special Situation: at the end of the song, rewind (built-in stop button)
      End of Song Calculation: hardcode "ending of song" within 1 second of End-Of-File, song1.length()-1000
      Alternate End of Song Calculation: listen to 80% of the song, last 20% is "The End"
      song[currentSong].rewind();
      song[currentSong].play();
    } else { 
      song[currentSong].play(); 
  
    } End Play-Pause Button
  //
  Another Play Button, as a finite loop() && infinite loop()
  Only press a number for this code below
  println(key);
  if ( key=='1' || key=='9' ) {
   
    if ( key=='1' ) println("Looping Once");
    if ( key=='9' ) println("Looping 9 times."); Simulate Infinity
    String keystr = String.valueOf(key); Must press a number
    println("Number of Repeats is", keystr); 
    int loopNum = int(keystr);
    song[currentSong].loop(loopNum); 
     if ( key=='l' || key=='L' ) song1.loop(loopNum);
  }
  if ( key=='i' || key=='I' ) song[currentSong].loop(); Infinite Loop, no parameter OR -1
  if ( key>='2' && key!='9' ) println("I donot loop that much, press infinite loop.");
  //
  if ( key=='m' || key=='M' ) { /Mute Button
  
    if ( song[currentSong].isMuted() ) {
      song[currentSong].unmute();
    } else {
      song[currentSong].mute();
    }
  }End Mute Button
  //
  /Built-in question: .isPlaying()
  if ( key=='f' || key=='F' ) song[currentSong].skip( 1000 ); /Skip forward 1 second (1000 milliseconds)
  if ( key=='r' || key=='R' ) song[currentSong].skip( -1000 ); /Skip backwards 1 second (1000 milliseconds)
  //
  if ( key=='s' || key=='S' ) { Stop Button
    if ( song[currentSong].isPlaying() ) {
      song[currentSong].pause();
      song[currentSong].rewind();
    } else {
      song[currentSong].rewind();
    }
  }End Stop Button
  //
  if ( key=='n' || key=='N' ) {
    if ( song[currentSong].isPlaying() ) {
      song[currentSong].pause();
      song[currentSong].rewind();
      playListArrayError();
      song[currentSong].play();
    } else {
      song[currentSong].rewind();
      playListArrayError();
      song[currentSong].play();
    }
  }End Next Button
  //
  if ( key=='b' || key=='B' ) {
  }End Back Butto
}End keyPressed
//
void mousePressed() {
}End mousePressed
//
End MAIN