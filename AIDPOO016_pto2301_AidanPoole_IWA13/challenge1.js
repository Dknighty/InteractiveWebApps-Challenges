let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below
calculated = 1
const logCalc = () => { 
    parseInt(calculated)
    const isString = typeof calculated 
    const calculatedAsNumber = isString ? calculated : Number(calculated)
    calculated = calculatedAsNumber + 1 
}

const calcUser = () => {
  logCalc()
  parseInt(calculated)
  if  (calculated >= 2) user = 'John'
  if  (calculated >= 2) state = 'requesting'
  if  (calculated > 3) state = 'idle'
 }

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)}
    return;
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()