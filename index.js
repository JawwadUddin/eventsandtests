document.querySelector("h1").addEventListener("click", () => {
    let target = document.querySelector("h1")
    target.style.backgroundColor = "blue"    
})
document.querySelector("h1").addEventListener("mouseleave", () => {
    let target = document.querySelector("h1")
    target.style.backgroundColor = "white"    
})

document.querySelector("h2").addEventListener("mouseenter", () => {
    let target = document.querySelector("h2")
    target.textContent = "hello"
})

document.querySelector("h2").addEventListener("mouseleave", () => {
    let target = document.querySelector("h2")
    target.textContent = "this is h2"
})

document.addEventListener("keypress", (e) => {
    let result = e.key
    let newElement = document.createElement("p")
    newElement.textContent = result
    document.body.append(newElement)
})

let checking = document.querySelectorAll("li")
let newArray = Array.from(checking)


let para = document.querySelectorAll("p")
let paraArray = Array.from(para)

for (let i = 0; i<newArray.length; i++) {
    newArray[i].addEventListener("click", ()=> {
        if (paraArray[i].style.color === "red") {
            paraArray[i].style.color = "black"
            paraArray[i].style.fontWeight = "normal"
        } else { 
        paraArray[i].style.color = "red"
        paraArray[i].style.fontWeight = "bold" 
        }
    })
}