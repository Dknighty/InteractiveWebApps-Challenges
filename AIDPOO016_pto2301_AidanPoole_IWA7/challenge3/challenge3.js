const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line
const leonumberBalance = parseInt(leoBalance)
const sarahnumberBalance = parseInt(sarahBalance)
const owed = leonumberBalance + sarahnumberBalance
const leo = leoName+ " " + leoSurname + "(Owed: R" + parseInt(leoBalance) + ")" // incorrect variables used, sarah balance used 
const sarah = sarahName + sarahSurname + "(Owed: R " +parseInt(sarahBalance).toFixed(2)+ ")" // leoname instead of sarahname used, incorrect variables
const total = "Total amount owed: R" + owed.toFixed(2)
const result = leo + "\n" + sarah + "\n" + divider + "\n" + "\t" + total + "\n" + divider

console.log(result) 