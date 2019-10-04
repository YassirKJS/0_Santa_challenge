const fs = require('fs');

let instructions = [];
let floor = 0;

fs.readFile('./instructions.txt', (err, data) => {
  instructions = data.toString().split('');

  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] === '(') floor += 1;
    else if (instructions[i] === ')') floor -= 1;
  }
  
  console.log('end floor', floor);  
});


