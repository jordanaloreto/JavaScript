let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let emoji1 = Math.floor(Math.random() * fighters.length)
    console.log(fighters[emoji1])
    let emoji2 = Math.floor(Math.random() * fighters.length)
    console.log("emoji2", fighters[emoji2])
    stageEl.textContent = fighters[emoji1] + "VS" + fighters[emoji2] 
    return stageEl
})
