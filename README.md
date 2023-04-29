# MP3 Splitter

## This tool will split an MP3 file at a specified point and return a new MP3 file

**---------------------------------------------**
**Step 1: Install Required Packages**
**---------------------------------------------**

We'll be using the Node.js fs module to read and
write files and the ffmpeg-static and fluent-ffmpeg
packages to work with the MP3 file.

To install these packages, open your terminal or command prompt and run the following commands:

npm install --save fs

npm install --save fluent-ffmpeg

npm install --save ffmpeg-static

**---------------------------------------------**
**Step 2: Import Required Modules**
**---------------------------------------------**

Create a new TypeScript file and
import the required modules as follows:

import \* as fs from 'fs';

import \* as ffmpeg from 'fluent-ffmpeg';

import \* as ffmpeg_static from 'ffmpeg-static';

ffmpeg.setFfmpegPath(ffmpeg_static);

The first line imports the fs module that we'll use to read and write files. The second line imports the fluent-ffmpeg package, and the third line imports the ffmpeg-static package that includes the ffmpeg binary. Finally, the setFfmpegPath method sets the path to the ffmpeg binary that we just installed.

**-----------------------------------**
**Step 3: Read the MP3 File**
**-----------------------------------**

The first step is to read the MP3 file using the fs module's readFile method. This method takes the path to the file and a callback function that is called when the file is read. In the callback function, we'll check for any errors and then proceed with splitting the file.

fs.readFile('path/to/mp3/file.mp3', (err, data) => {
if (err) throw err;

// Continue with splitting the file
});

**----------------------------------**
**Step 4: Split the MP3 File**
**----------------------------------**

To split the MP3 file in half, we'll use the fluent-ffmpeg package's ffprobe method to get the duration of the file and then use the ffmpeg method to split the file into two new files.

// Get the duration of the file using ffprobe

ffmpeg.ffprobe('path/to/mp3/file.mp3', (err, metadata) => {
if (err) throw err;

const duration = metadata.format.duration;

// Split the file into two new files
ffmpeg('path/to/mp3/file.mp3')
.setStartTime(0)
.setDuration(duration / 2)
.output('path/to/new/file1.mp3')
.on('end', () => {
console.log('First half of the file has been split!');
})
.run();

ffmpeg('path/to/mp3/file.mp3')
.setStartTime(duration / 2)
.setDuration(duration / 2)
.output('path/to/new/file2.mp3')
.on('end', () => {
console.log('Second half of the file has been split!');
})
.run();
});

The ffprobe method returns metadata about the file, including its duration, which we store in the duration variable.

Then we use the ffmpeg method to split the file into two new files. We first call the output method to specify the path and filename for the new file, then we use the setStartTime and setDuration methods to specify the start time and duration of each file. Finally, we call the run method to start the splitting process.

**----------------------------------**
**Step 5: Run the Program**
**----------------------------------**

1. Update file paths for the desired MP3 snip

2. Change '.setStartTime(0)' and '.setDuration(5 \* 60 + 43)' to your desired specs

3. node splitMP3.js

The snipped file will be in /mp3Files directory
