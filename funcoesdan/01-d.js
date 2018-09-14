// hello("what") -> "Hello, world!"
// hello() -> "Hello, world!"
function hello() {
	return "Hello, world!"
}

// show(4) -> 16
// show(-4) -> 16
function show(x) {
	console.log(`${x} ${x * x}`)
	return x * x
	console.log(`${x} ${x * x * x}`)
	return x * x * x
}
let x = 4
show (x)

function show(x) {
	console.log(`${4} ${16}`)
	return 4 * 4
	console.log(`${4} ${4 * 4 * 4}`)
	return 4 * 4 * 4


// eq3() -> undefined === undefined === undefined return 1
// eq3(1, 2, 3) -> 0
// eq3("1", 1, 3) -> 0
// eq3("!", "a", "b") -> 0
// eq3("!", "!", !) -> errou
function eq3(a, b, c) {
	console.log(a, b, c)
	if (a === b && a === c) {
		return 1
	} else {
		return 0
	}
}


// Resultado: 7
// Resultado 9 11
function sum(x) {
	return x + 2
}
const x = 5
console.log(`${sum(x + 2)},${sum(sum(x + 2))}`)



// Resultado:
function confusion(x, y) {
	x = 2 * x + y
	return x
}
let x = 2
let y = 5
y = confusion(y, x)
x = confusion(y, x)
console.log(`${x}, ${y}`)


x = 2 * 2 + 5

let x = 2
let y = 5
// confision 5, 2 
//x = 2 * 5 + 2
// x = 12
y = confusion(y, x) 
//confusion (12, 2)
//x = 2 * 12 + 2
//x = 26
x = confusion(y, x)// 26, 12/ 

console.log(`${x}, ${y}`)