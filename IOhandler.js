/*
 * Project: COMP1320 Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 * 
 * Created Date: 
 * Author: Murad Qumizakis
 * 
 */

const unzipper = require('unzipper'),
  fs = require("fs"),
  PNG = require('pngjs').PNG,
  path = require('path');


/**
 * Description: decompress file from given pathIn, write to given pathOut 
 *  
 * @param {string} pathIn 
 * @param {string} pathOut 
 * @return {promise}
 */


const unzip = (pathIn, pathOut) => {
  return fs.createReadStream('myfile.zip')
    .pipe(unzipper.Extract({ path: 'unzipped' }))
    .promise()
  //console.log("Extraction ppertation complete") (Use promise to only show this message when files are unzipped)
};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path 
 * 
 * @param {string} path 
 * @return {promise}
 */

const readDir = dir => {
  return new Promise((resolve, reject) => {
    fs.readdir("unzipped", (err, files) => {
      if (err) {
        reject(err);
      } else {
        files.shift();
        resolve(files);
      }
    })
  })
};

// let png = readDir("unzipped").then(files => console.log(files)) //.catch(err) ??

/**
 * Description: Read in png file by given pathIn, 
 * convert to grayscale and write to given pathOut
 * 
 * @param {string} filePath 
 * @param {string} pathProcessed 
 * @return {promise}
 */


const grayScale = (pathIn, pathOut) => {
  fs.createReadStream(pathIn)
    .pipe(
      new PNG({
        filterType: 4,
      })
    )
    .on("parsed", function () {
      for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
          var idx = (this.width * y + x) << 2;

          let red = this.data[idx];
          let green = this.data[idx + 1];
          let blue = this.data[idx + 2];

          let grayscaledValue = (red + green + blue) / 3;

          // invert color
          this.data[idx] = grayscaledValue;         // R
          this.data[idx + 1] = grayscaledValue          // G
          this.data[idx + 2] = grayscaledValue          // B


          // and reduce opacity
          // this.data[idx + 3] = this.data[idx + 3] >> 1;
        }
      }

      this.pack().pipe(fs.createWriteStream(pathOut));
    });
}

// grayScale("")







module.exports = {
  unzip,
  readDir,
  grayScale
};




 // this.data[idx] = 255 - this.data[idx]; // R
          // this.data[idx + 1] = 255 - this.data[idx + 1]; // G
          // this.data[idx + 2] = 255 - this.data[idx + 2]; // B