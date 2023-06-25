const firstName = 'John';
const age = 35;
const sport = 'Coding';

const logTwice = () => {
const something = `Hello, ${firstName} (${age}). I love ${sport}!`
  console.log(something)
  console.log(something)
}

const hobby = () => {
  logTwice(`Hello, ${firstName} (${age}). I love ${sport}!`)
}

hobby()