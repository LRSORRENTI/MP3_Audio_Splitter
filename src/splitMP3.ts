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
