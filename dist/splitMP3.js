"use strict";
// console.log('Split?')\
exports.__esModule = true;
/*
Need to use the Node.js fs module to read and write
 files
 
 Need the ffmpeg-static and fluent-ffmpeg packages to work
 with the MP3 file

*/
var fs = require("fs");
// this above line imports file system module to 
// read / write files
var ffmpeg = require("fluent-ffmpeg");
// This above second line imports the fluent-ffmpeg package
// is importing the entire fluent-ffmpeg
//  module as an object, which means you 
//  will have to use the ffmpeg object 
//  to access any of the exported properties
//   or methods from that module.
var ffmpeg_static = require("ffmpeg-static");
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
// console.log(ffmpeg_static)
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
fs.readFile('mp3Files\\mp3FileIOwn.mp3', function (err, data) {
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
    // ^^^^ THE ABOVE IS NOT TRUE, SHOULD USE FORWARD 
    // SLASHES, OR TWO \\ IN WINDOWS FOR PATHS
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
    if (err)
        throw err;
    // Continue with splitting the file
});
// Split the MP3 File
/*
To split the MP3 file in half, we'll
use the fluent-ffmpeg package's
ffprobe method to get the duration
 of the file and then use the ffmpeg
 method to split the file into two new files.
*/
// Get the duration of the file using ffprobe
// Use ffmpeg.ffprobe to probe an mp3 file for its metadata
// ffprobe is a method provided by the
//  ffmpeg module in Node.js. 
//  The ffmpeg module is a wrapper around
//   the FFmpeg command-line tool,
//    and it provides an interface to
//     execute FFmpeg commands and parse
//      their output. 
//      The ffprobe method specifically
//       is used to extract metadata 
//       from multimedia files, such as duration, 
//       bit rate, and codec information.
ffmpeg.ffprobe('path/to/mp3/file.mp3', function (err, metadata) {
    // The first argument ^ is the path to the file
    // The second argument (err, metadata) 
    // is a callback function that will be called once
    //  the metadata is obtained
    if (err)
        throw err;
    // Same thing, if error does occur, 
    // the throw statement is used to 
    // throw an error in JavaScript.
    // When an error is thrown, 
    // it creates an error object
    //  that contains information 
    //  about the error such as 
    //  its type, message, and 
    //  stack trace. The error 
    //  object can be caught and 
    //  handled by surrounding 
    //  code using a try...catch block.
    // In the specific case of if (err) throw err;,
    //  it is checking if the err variable is
    //   truthy (i.e., contains an error object)
    //    and throwing it if it does.
    //    This is a common pattern for handling errors
    // Get the duration of the mp3 file from the metadata
    // The duration is in seconds 
    // In this code, if there is an error
    //  while obtaining the metadata,
    //   the error is thrown using the 
    //   throw statement.
    //   Otherwise, the duration 
    //   of the mp3 file is obtained
    //    from the metadata and stored 
    //    in the duration variable below
    var duration = metadata.format.duration;
    // Split the file into two new files
    ffmpeg('path/to/mp3/file.mp3')
        // The above line initiates 
        //the ffmpeg process to operate on the mp3 file 
        //located at the specified path.
        // .setStartTime(0)
        // .setDuration(duration / 2)
        // Above will split the mp3 in half, 
        // the mp3 I'm splitting will use 
        // specific times to cut into two halves:
        .setStartTime(0)
        .setDuration(5 * 60 + 43) // 5 minutes and 43 seconds
        /*
        The above two lines set the start time at 0,
        and duration of the output file.
     
        */
        .output('mp3Files\\SplittedMP3\\firstHalf.mp3')
        // The above line specifies where to place the 
        // first half, and the new name of it, in this 
        // case the first split will have a name of 
        // firstHalf.mp3, and will be placed inside the 
        // SplittedMP3 sub directory
        .on('end', function () {
        // this .on() is a callbakc func takes two args
        // the first is the event to listen for
        // the 'end' event, after the event loop in 
        // node finishes with this 'end' event it will
        // callback (callback funcs) and  
        // log a successful end message below:
        console.log('First half of the file has been split!');
    })
        //     In the code below, the .run() method
        //      is used to start the FFmpeg process
        //       and execute the commands that have 
        //       been set up with the previous methods 
        //       (setStartTime, setDuration, output, etc.).
        //       When you call .run(), FFmpeg will start
        //        the process of reading the input file, 
        //        applying any filters or effects specified 
        //        in the command, and writing the output file.
        // The .run() method does not block 
        // the Node.js event loop, meaning that other code
        //  can continue to run while FFmpeg is
        //   processing the file in the background. 
        //   When FFmpeg finishes processing the file,
        //    it will emit an 'end' event,
        //     which can be captured using the .on()
        //      method with a callback function.
        // The .run() method doe
        // s not have a specific stage in the Node.js event
        //  loop, as it simply spawns a new child process 
        //  to execute FFmpeg commands.
        //  The child_process.spawn() method that
        //   is used under the hood by ffmpeg.js to
        //    run FFmpeg is a low-level API
        //     that does not rely on the Node.js event loop.
        .run();
});
//   ffmpeg('path/to/mp3/file.mp3')
//     .setStartTime(duration / 2)
//     .setDuration(duration / 2)
//     .output('path/to/new/file2.mp3')
//     .on('end', () => {
//       console.log('Second half of the file has been split!');
//     })
//     .run();
