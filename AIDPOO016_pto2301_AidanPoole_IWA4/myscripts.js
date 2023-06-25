const date = 2050
const statuses = 'parent' // did not have = but instead : 
let count = 0


if (true) {
	console.log("January", 'New Year’s Day') // added bracket 
	console.log("March", 'Human Rights Day') 
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
    count = count + 4 
}
   
	if (false) {
	  console.log('June', 'Youth Day')
		count = count + 1
  }


	if (true) {
	console.log(date, 'Christmas Day')
	count = count + 1
	}

	console.log(date, 'Day of Goodwill')
	count = count + 1
    console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	console.log(date, 'Day of Reconciliation')
	count = count + 3


console.log('Your status is:', statuses)
console.log('The year is:', date)
console.log('The total holidays is:', count)