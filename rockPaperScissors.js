const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } else {
      console.log('Error! Please enter rock, scissors or paper');
    }
  };
  
  // console.log(getUserChoice('paper'));
  // console.log(getUserChoice('rock'));
  // console.log(getUserChoice('stone'));
  
  const getComputerChoice = () => {
    const randomNumber = (Math.floor(Math.random() * 3));
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  // console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
      return 'It is a tie';
    } if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
          return 'The computer won!'
        } else {
          return 'Congratulation,you won';
        }
    };
    
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
          return 'The computer won!'
        } else {
          return 'Congratulation,you won';
        }
    }
    
    if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
          return 'The computer won!'
        } else {
          return 'Congratulation,you won';
        }
    }
  };
  
  // console.log(determineWinner());
  // console.log(determineWinner('rock', 'paper'));
  // console.log(determineWinner('paper' , 'scissors'));
  // console.log(determineWinner('scissors'));
  
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame()
  
  
  
  
  