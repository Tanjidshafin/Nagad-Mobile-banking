const inputValue = document.getElementById("input-value")

let sentences = [
    "The dog is very happy.",
    "The cat is sleeping now.",
    "The baby is eating food.",
    "The flowers are very pretty.",
    "The dog is barking loudly.",
    "The cat is very sleepy.",
    "The baby is playing outside.",
    "The flowers are blooming slowly.",
    "The dog is very friendly.",
    "The cat is eating dinner.",
    "The baby is laughing loudly.",
    "The flowers are very colorful.",
    "The dog is running quickly.",
    "The cat is hiding now.",
    "The baby is crying loudly.",
    "The flowers are very sweet.",
    "The dog is very loyal.",
    "The cat is sleeping deeply.",
    "The baby is smiling brightly.",
    "The flowers are blooming rapidly."
];
let i = 1


document.getElementById("task-btn").addEventListener("click", function () {
    let tr = document.createElement("tr")
    let randomIndex = Math.floor(Math.random() * sentences.length)

    tr.innerHTML = `
    <th>${i}</th>
    <td>${inputValue.value}</td>
    <td><button class="btn">+</button><button class="btn">-</button></td>
    `
    inputValue.value = ""
    document.getElementById("content-container").appendChild(tr)
    i++
})

document.getElementById("clear-btn").addEventListener("click", function () {
    document.getElementById("content-container").innerHTML = ""
})


const resulted = document.getElementById("resulted")
let valUe = parseInt(resulted.innerText)
document.getElementById("plusSign").addEventListener("click", function () {
    valUe = valUe + 1
    resulted.innerText = valUe.toString()

})
document.getElementById("minusSign").addEventListener("click", function () {
    valUe = valUe - 1
    resulted.innerText = valUe.toString()
})