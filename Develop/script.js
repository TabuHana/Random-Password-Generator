/*
  Feature dynamically updated HTML and CSS powered by js
  Clean, polished UI and responsive, to multi screen sizes

  ======= ACCEPTANCE CRITERIA=======
  -when click button, pass generated
  -prompted for pass criteria?
  -select criteria 
  - pass length of min 8 max 128
  -choose character types (upper, lower, numeria, special)
  -after all prompts answered input validated???
  -generate password that matches criteria
  -pass displayed in alert or on page


  1. Prompt user if they want upper/lower/numbers/special characters & pass length
  2. Varify all criteria is met
  3. Store values in given variables
  4. Depending on which values were selected, add those values to generationChunk
  5. Generate a random number that picks values at of the chunk and adds them to the user's password
  6. Display password to the user
*/

//Initializing Variables
let hasLower
let hasUpper
let hasNum
let hasSpecial
let passLength

const userPassword = ""

//Password Possible Characters and Generation Chunk
const charUpper = "abcdefghijklmnopqrstuvwxyz"
const charLower = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const charNumbers = "0123456789"
const charSymbols = "!@#$%^&*_-+="
const passChunk = ""

//Prompt the user wth the criteria
const passCriteria = () => {
  //Prompts for all the information
  passLength = parseInt(prompt('Please enter a password length.'))

  //Do not continue if length does not meet criteria
  while (Object.is(passLength, NaN) || passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt('Please enter valid criteria.\nPassword length must be between 8 and 128 characters.'))
  }
  //Once length correct, prompt remaining variables
  hasUpper = confirm('Would you like to include Uppercase characters?\n OK to confirm, Cancel to decline.')
  hasLower = confirm('Would you like to include Lowercase characters?\n OK to confirm, Cancel to decline.')
  hasNum = confirm('Would you like to include Numbered characters?\n OK to confirm, Cancel to decline.')
  hasSpecial = confirm('Would you like to include Special characters?\n OK to confirm, Cancel to decline.')

  //console log to confirm values are correct
  console.log(passLength, hasUpper, hasLower, hasNum, hasSpecial)
}

//Generates Password
const generatePass = () =>{
  //if upper case, add to chunk
  if(hasUpper){
    passChunk += charUpper
  }
  //if lower case, add to chunk
  if (hasLower) {
    passChunk += charLower
  }
  //if numbers, add to chunk
  if (hasNum) {
    passChunk += charNumbers
  }
  //if special, add to chunk
  if (hasSpecial) {
    passChunk += charSymbols
  }

  //loops through the chunk at random and adds to the password
  for (let i = 0; i < passLength; i++) {
    //random variable that chooses a character in the chunk
    let rngIndex = Math.floor(Math.random() * passChunk.length)
    userPassword +=
    
  }
}


document.getElementById('generate').addEventListener('click', () => {
  passCriteria();
})
