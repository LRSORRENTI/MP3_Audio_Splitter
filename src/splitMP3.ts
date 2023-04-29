// console.log('Split?')\

/* 
Need to use the Node.js fs module to read and write
 files
 
 Need the ffmpeg-static and fluent-ffmpeg packages to work 
 with the MP3 file

*/

import * as fs from 'fs'; 
// this above line imports file system module to 
// read / write files

import * as ffmpeg from 'fluent-ffmpeg';

// This above second line imports the fluent-ffmpeg package
// is importing the entire fluent-ffmpeg
//  module as an object, which means you 
//  will have to use the ffmpeg object 
//  to access any of the exported properties
//   or methods from that module.

import * as ffmpeg_static from 'ffmpeg-static';

// the above line imports the ffmpeg-static package that includes
//the ffmpeg binary

/*
The ffmpeg-static package is a
 dependency-free solution to download
 the FFmpeg binaries for different 
 platforms (Windows, macOS, and Linux) 
 and return the path to the executable.
 
 It makes it easier to use FFmpeg in 
 Node.js applications without having 
 to install it separately.

So when you import ffmpeg_static 
like this, you get a string value
 that represents the path to the FFmpeg 
 executable binary that is included 
 in the ffmpeg-static package. 
 
 You can then use this path to set
  the FFmpeg binary path when configuring 
  the fluent-ffmpeg library.
*/



ffmpeg.setFfmpegPath(ffmpeg_static);
//  Finally, this last line: the setFfmpegPath
//    method sets the path to the 
//ffmpeg binary that we just installed.


/*
This line of below: fs.readFile('mp3Files\mp3FileIOwn.mp3', (err, data) => {

code is using the Node.js fs module
 to read the contents of the file mp3FileIOwn.mp3 
 located in the mp3Files directory. 
 
 The readFile method takes two arguments:

 The first argument is the path
  to the file that you want to read.
   In this case, the path is 
   'mp3Files\mp3FileIOwn.mp3'.

The second argument is a callback 
function that will be executed once 
the file has been read. This callback
 function takes two parameters:
 
 err and data. 
 
 If there is an error while
  reading the file, err will
   contain an error object. 
   If there is no error,
    data will contain the 
    contents of the file.

So essentially, this line of 
code is reading the contents 
of the mp3FileIOwn.mp3 file located 
in the mp3Files directory and 
executing a callback function 
once the file has been read:

*/
fs.readFile('mp3Files\mp3FileIOwn.mp3', (err, data) => {
    // the '\P' text color change in VSCODE confused
    // me so I asked ChatGPT: 
// No, the color of the text in 
// VSCode does not affect the functionality 
// of the code. The color is just an 
// indication to help make the code more
//  readable for the programmer. 
//  As long as the path string is 
//  formatted correctly with the right
//   characters and in the right order, it should
//  work fine with the fs.readFile function.


/* 

The throw keyword below is used to throw 
an error object and terminate
 the program's execution when an error occurs.
 
 If an error is thrown in the readFile 
 callback, the program will stop 
 executing and the error message will
  be printed to the console. 
  
  If you don't throw an error in 
  the callback, the program will 
  continue to execute even if there
   were errors during the file reading process:
*/
if (err) throw err;


  
    // Continue with splitting the file
  });

 