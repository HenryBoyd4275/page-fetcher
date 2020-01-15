let args = process.argv.slice(2);

const fs = require('fs');
const request = require('request');

request(args[0], (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    process.exit(0);
  }  
  if (!error){
    fs.writeFile(args[1], body, (err) => {
      if (err) {
        console.log('Invalid file path');
      }
      fs.stat(args[1], function(err, stats) {
        if(!err)
        console.log(`The ${stats.size} byte file has been downloaded and saved!`);
      });
    });
  }
});