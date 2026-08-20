// document.getElementById("count").innerText = 5

// let count = 0
// console.log(count)

// let myAge = 23
// console.log(myAge)

// let myAge = 23
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let bonusPoints = 50
// console.log("1 ",bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log("2 ",bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log("3 ",bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log("4 ",bonusPoints)

// function increment(){
//     console.log("Clicked")
// }

// function logs42(){
//     console.log(42)
// }

// logs42()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapTime(){
//     console.log(lap1 + lap2 + lap3)
// }
// lapTime()

// let lapsCompleted = 0

// function plusLaps(){
//     lapsCompleted = lapsCompleted + 1
// }

// plusLaps()
// plusLaps()
// plusLaps()

// console.log(lapsCompleted)

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count += 1;
    countEl.innerText = count;
}

function save(){
    const varName = count + " - "
    saveEl.textContent += varName
    console.log(count)
}

function reset(){
    count = 0
    countEl.innerText = 0
}


// let welcomeEl = document.getElementById("welcome-el")

// let name = "Jordana"
// let greeting = "Welcome back "
// let emoji = "✨"
// welcomeEl.innerText = greeting + name + emoji


// let myPoints = 3

// // Create two functions, add3Points() and remove1Point(), and have them
// // add/remove points to/from the myPoints variable

// function add3Points(){
//     myPoints += myPoints
//     console.log("Adicionando", myPoints)
// }

// function remove1Point(){
//     myPoints = myPoints - 1
//     console.log("Removendo", myPoints)
// }
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()
// // Call the functions to that the line below logs out 10
// console.log(myPoints)


// let errorEl = document.getElementById("error")
// function renderError(){
//     let message = "Something went wrong, please try again"
//     errorEl.textContent = message
//     console.log("message")
// }