const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	Lname : leoName,
	Lbalance : leoBalance,
	Laccessid : "47afb389-8014-4d0b-aff3-e40203d2107f",
	Lage : 24,
	Laddress: {
		Lnumber : leoNumber,
		Lstreet : leoStreet,
		Lpostalcode : leoPostal, 
	}
}

const sarah = {
	Sname : sarahName + sarahSurname,
	Sage : 62,
	Saccessid : "6b279ae5-5657-4240-80e9-23f6b635f7a8",
	Sbalance : sarahBalance,
	Saddress: {
		Snumber : sarahNumber,
        Sstreet : sarahStreet,
		Spostalcode : sarahPostal,
	}
}

console.log(leo.Lname + " " +leo.Laddress.Lpostalcode)
console.log(sarah.Sname + " " +sarah.Saddress.Spostalcode)