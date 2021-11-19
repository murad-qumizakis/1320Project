/*
 * Project: COMP1320 Milestone 1
 * File Name: main.js
 * Description: 
 * 
 * Created Date: 
 * Author: 
 * 
 */

const IOhandler = require("./IOhandler"),
  zipFilePath = `${__dirname}/myfile.zip`,
  pathUnzipped = `${__dirname}/unzipped`,
  pathProcessed = `${__dirname}/grayscaled`;


IOhandler.unzip('myfile.zip')
  .then((content) => IOhandler.readDir('unzipped')) // good?
  .then((files) => {
    files.forEach(png => {
      IOhandler.grayScale("unzipped/" + png, `new${png}.png`)
    })
  })
  .catch(err => console.log(err))


