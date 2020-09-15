const addBtn = document.getElementById("add")

const subtractBtn = document.getElementById("subtract")

const multiplyBtn = document.getElementById("multiply")

const divideBtn = document.getElementById("divide")

const val1 = document.getElementById("val1")

const val2 = document.getElementById("val2")

const answer = document.getElementById("answer")

const clearBtn = document.getElementById("clear")

addBtn.addEventListener("click", function (e) {
  e.preventDefault()
  return (answer.innerHTML = add(Number(val1.value), Number(val2.value)))
})

multiplyBtn.addEventListener("click", function (e) {
  e.preventDefault()
  return (answer.innerHTML = multiply(Number(val1.value), Number(val2.value)))
})

divideBtn.addEventListener("click", function (e) {
  e.preventDefault()
  return (answer.innerHTML = divide(Number(val1.value), Number(val2.value)))
})

subtractBtn.addEventListener("click", function (e) {
  e.preventDefault()
  return (answer.innerHTML = subtract(Number(val1.value), Number(val2.value)))
})

clearBtn.addEventListener("click", function (e) {
  document.getElementById("answer").innerHTML = "answer here"
})

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}
// const button = document.getElementById("bgButton")
// button.addEventListener("click", changeBg)

// const state = {
//   color: ["red", "blue", "green", "orange", "purple"],
//   currentIndex: 0,
// }

// function changeBg(e) {
//   button.style.backgroundColor = state.color[state.currentIndex]
//   state.currentIndex++
//   if (currentIndex > this.color.length - 1) {
//     currentIndex = 0
//   }
// }
