window.onload = () => {
    let body = document.querySelector("body")

    //2.1 Inserta dinamicamente en un html un div vacio con javascript.
    let newDiv = document.createElement("div")
    body.appendChild(newDiv)


    //2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
    let newP = document.createElement('p')
    let newDivwithP = document.createElement('div')
    newDivwithP.appendChild(newP)
    body.appendChild(newDivwithP)
    
    //2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
    let div6P = document.createElement('div')
    for(let i = 0; i < 6; i++) {
        let p = document.createElement('p')
        p.innerText = i + 1
        div6P.appendChild(p)
    }
    body.appendChild(div6P)

    //2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
    let nuevaP = document.createElement('p')
    nuevaP.innerText = 'Soy dinámico!'
    body.appendChild(nuevaP)

    //2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
    let h2NuevoTexto = document.querySelector('h2.fn-insert-here')
    h2NuevoTexto.innerHTML = 'Wubba Lubba dub dub'

    //2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
    const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
       let ulApps = document.createElement('ul')
       apps.forEach((item)=> {
           let li = document.createElement('li')
           li.innerText = item 
           ulApps.appendChild(li)
       })
       body.appendChild(ulApps)

    //2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
    let toDelete = document.querySelectorAll('.fn-remove-me')
    toDelete.forEach((value) => {
        value.remove()
    })

    //2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
    //Recuerda que no solo puedes insertar elementos con .appendChild.
    let allDivs = document.querySelectorAll('div')
    let pConTexto = document.createElement('p')
    pConTexto.innerText = 'Voy en medio!'
    body.insertBefore(pConTexto, allDivs[1])    

    //2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
    let divClassFn = document.querySelectorAll('div.fn-insert-here')
    divClassFn.forEach((item) => {
        let p = document.createElement("p")
        p.innerText = 'Voy dentro!'
        item.appendChild(p)
    })
}






















