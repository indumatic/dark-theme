const container = document.getElementById("container")

for(let i = 1; i<6; i++) {
    let div = document.createElement("div")
    div.classList.add("card",`level${i}`,"selected")
    div.id = `card-${i}`    

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
    container.appendChild(div)
}

for(let i = 1; i<6; i++) {
    let div = document.createElement("div")
    div.classList.add("card", "description",`level${i}`,"selected")
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