const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  
  
  reader.question(
      'Welcome to the Password Validation Tool. Please input your password: ', function(input){
      tokens = input.split(' ');
      
      password = tokens[0];
    //   console.log(`${password} ${password.length}`)
    if(password.length >= 10){
        console.log('Perfect! This password is at least 10 characters long.')
    } else {
        console.log('Please input a password with at least 10 characters.')
    }
    reader.close()
})