let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))

})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    // ulEl.innerHTML = ''
    render(myLeads)
})

function render(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++ ){
        listItems += `<li><a target='_blank' href="${leads[i]}">${leads[i]}</a></li>`
    }
    ulEl.innerHTML = listItems
}




// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// // Create a function that takes a single parameter, an array,
// // and logs all the items of the array to the console.
// // Call the function while passing in myCourses as an argument

// function logItems(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// logItems(myCourses)

// const fruits = ["apple", "bananas", "oranges"]
// const question = "best fruits"

// function generateSentence(desc, arr) {
//     let sentence = ""
//     for(let i = 0; i < arr.length; i++){
//         sentence = `The ${desc} are ${arr}`
//     }
//     console.log(sentence)
// }

// generateSentence(question, fruits)


// const containerEl = document.getElementById("container")

// const imgs = [
//     "images/hip1.jpg",
//     "images/hip2.jpg",
//     "images/hip3.jpg"
// ]
// function renderImages(){
//     for(let i = 0; i < imgs.lenght; i++){
//         containerEl.innerHTML += `<img class="team-img" src="${imgs[i]}">`
//     }

// }

// renderImages()
