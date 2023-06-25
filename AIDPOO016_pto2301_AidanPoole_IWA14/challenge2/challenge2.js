// script.js

const add = () => {
    a + b
}

const multiply = () => {
    a * b 
}

function internal() {
	const added = add(example1.a, example2.b)
	const multiplied = multiply(example1.a, example2.b)
	return added 
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()