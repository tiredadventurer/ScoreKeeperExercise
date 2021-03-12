const ply1 = document.querySelector("#ply1")
const ply2 = document.querySelector("#ply2")
const reset = document.querySelector("#reset")
const ply1Score = document.querySelector("#ply1Score")
const ply2Score = document.querySelector("#ply2Score")
const playTo = document.querySelector("#playTo")

const rSet = document.querySelector("#reset")



ply1.addEventListener('click', function () {
    countFunk(ply1Score)
    if (parseInt(ply1Score.innerText) === parseInt(playTo.value)) {
        ply1.disabled = true;
        ply2.disabled = true;
        ply1Score.style.color = "green"
        ply2Score.style.color = "red"
    }
})

ply2.addEventListener('click', function () {
    countFunk(ply2Score)
    if (parseInt(ply2Score.innerText) === parseInt(playTo.value)) {
        ply1.disabled = true;
        ply2.disabled = true;
        ply1Score.style.color = "red"
        ply2Score.style.color = "green"
    }
})

const countFunk = function (counter) {
    let x = parseInt(counter.innerText)
    x += 1;
    return counter.innerText = x;
}


rSet.addEventListener('click', function () {
    ply1Score.innerText = "0"
    ply2Score.innerText = "0"
    ply1.disabled = false
    ply2.disabled = false
    ply1Score.style.color = "black"
    ply2Score.style.color = "black"
})

playTo.addEventListener('change', function () {
    ply1Score.innerText = "0"
    ply2Score.innerText = "0"
    ply1.disabled = false
    ply2.disabled = false
    ply1Score.style.color = "black"
    ply2Score.style.color = "black"
})