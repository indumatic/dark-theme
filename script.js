const container = document.getElementById("container")

const createElementWithIdAndClasses = (element) => (id, ...classes) => {
    const element = document.createElement(element)
    element.id = id
    for (cl in classes) {
        element.classList.add(cl)
    }
    return element
}

const createDiv = createElementWithIdAndClasses("div")
const createButton = createElementWithIdAndClasses("button")

for(let i = 1; i<6; i++) {
    let div = document.createElement("div")
    div.classList.add("card",`level${i}`)
    div.id = `card-${i}`
    
    //let div = createDiv(`card-${i}`,"card",`level${i}`,"selected")

    let text = document.createElement("div")
    text.classList.add("text")
    text.id = `text-card-${i}`
    text.textContent = `Card number ${i}`

    let button = document.createElement("button")
    button.classList.add("del", "show")
    button.id = `del-card-${i}`
    button.textContent = "del"
     
    div.appendChild(button)
    div.appendChild(text)

    div.addEventListener("click", (e) => {
        Array.from(container.querySelectorAll(".card"))
            .forEach(card => card.classList.remove("selected"))
        e.currentTarget.classList.add("selected")

        if(e.target.classList.contains("del")) alert("del")
    })


    container.appendChild(div)
}

for(let i = 1; i<6; i++) {
    let div = document.createElement("div")
    div.classList.add("card", "description",`level${i}`)
    div.id = `card-description-${i}`    

    let title = document.createElement("div")
    title.classList.add("title")
    title.id = `text-card-description-${i}`
    title.textContent = `Card number ${i}`

    let button = document.createElement("button")
    button.classList.add("del", "show")
    button.id = `del-card-description-${i}`
    button.textContent = "del"

    let description = document.createElement("div")
    description.classList.add("description")
    description.id = `text-card-description-${i}`
    description.textContent = `Description for card number ${i}`
    
    div.appendChild(button)
    div.appendChild(title)
    div.appendChild(description)
    container.appendChild(div)
}

