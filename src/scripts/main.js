// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './kiln.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery("round", 10, 8)
//console.log(mug)

let vase = makePottery("cylinder", 20, 30)
let ashtray = makePottery("square", 7, 2)
let bowl = makePottery("round", 7, 13)
let plate = makePottery("flat", 40, 1)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2100)
console.log(firedMug)

let firedAshtray = firePottery(ashtray, 2200)
console.log(firedAshtray)

let firedVase = firePottery(vase, 2500)
console.log(firedVase)

let firedBowl = firePottery(bowl, 1900)
console.log(firedBowl)

let firedPlate = firePottery(plate, 2400)
console.log(firedPlate)
// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



