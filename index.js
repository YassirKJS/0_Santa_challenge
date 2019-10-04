const fs = require('fs');

let instructions = [];
let floor = 0;

const PartOne = () => {
  fs.readFile('./instructions.txt', (err, data) => {
    console.time('solution-time')
  
    instructions = data.toString().split('');

    for (let i = 0; i < instructions.length; i++) {
      if (instructions[i] === '(') floor += 1;
      else if (instructions[i] === ')') floor -= 1;
    }
    
    console.timeEnd('solution-time');
    console.log('end floor', floor);  
  });
} 

const PartOne_2 = () => {
  fs.readFile('./instructions.txt', (err, data) => {
    console.time('solution-time');
  
    instructions = data.toString().split('');

    floor = instructions.reduce((counter, instruction) => {
      if (instruction = '(') return counter += 1;
      else if (instruction = ')') return counter -= 1;
    }, 0)
    
    console.timeEnd('solution-time');
    console.log('end floor', floor);  
  });
} 

// PartOne(); // .573ms
// PartOne_2(); //.455ms

const PartTwo = () => {
  fs.readFile('./instructions.txt', (err, data) => {
    console.time('solution-time');

    instructions = data.toString().split('');

    for (let i = 0; i < instructions.length; i++) {
      if (floor > -1) {        
        if (instructions[i] === '(') floor += 1;
        else if (instructions[i] === ')') floor -= 1;
      }
      else {
        console.log('basement', i);
        break;
      }
    }

    console.log('end floor', floor);
    console.timeEnd('solution-time');
  });
}

PartTwo(); // 2.053ms