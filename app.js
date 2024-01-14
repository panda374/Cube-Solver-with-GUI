import {Solver} from './solver.js'

let solver

export const whiteSide = [
    {
        color: 'black',
        img: 'images/black-border.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'white',
        img: 'images/white.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    }
]
export const orangeSide = [
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'orange',
        img: 'images/orange.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    }
]
export const greenSide = [
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'green',
        img: 'images/green.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    }
]
export const redSide = [
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'red',
        img: 'images/red.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    }
]
export const blueSide = [
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'blue',
        img: 'images/blue.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    }
]
export const yellowSide = [
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'yellow',
        img: 'images/yellow.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    },
    {
        color: 'black',
        img: 'images/black.jpg'
    }
]

const whiteGrid = document.querySelector('#grid1')
const orangeGrid = document.querySelector('#grid2')
const greenGrid = document.querySelector('#grid3')
const redGrid = document.querySelector('#grid4')
const blueGrid = document.querySelector('#grid5')
const yellowGrid = document.querySelector('#grid6')

const sideList = [whiteSide, orangeSide, greenSide, redSide, blueSide, yellowSide]
const gridList = [whiteGrid, orangeGrid, greenGrid, redGrid, blueGrid, yellowGrid]

const colours = document.querySelector('#colourGrid')

let idx = 0
let sideNum = 0

let currentSelection

const solvebutton = document.getElementById('solveButton')
solvebutton.addEventListener('click',finished)

const nextButton = document.getElementById('nextButton')
nextButton.style.display = "none"

const loadingGif = document.getElementById('loading')
loadingGif.style.display = "none"

function finished() {
    try {
        solver = new Solver()
        loadingGif.style.display = "block"
    } catch(err) {
        alert("The state you entered is not valid")
        return
    }
    solver.solve()
    solver.reduceSolution()
    solver.printNext()
    loadingGif.remove()
    nextButton.style.display = "block"
    nextButton.addEventListener('click', nextMove)
}

function nextMove() {
    if (solver.printNext()) {
        nextButton.style.display = "none"
    }
}


function createBoard() {
    for(let i = 0; i < 6; i++) {
        let j = 0
        for(let c of sideList[i]) {
            const tile = document.createElement('img')
            tile.setAttribute('src', c.img)
            tile.setAttribute('color', c.color)
            tile.setAttribute('side', i)
            tile.setAttribute('idx', j)
            tile.addEventListener('click', changeSelection)
            gridList[i].appendChild(tile)
            j++
        }
    }
    currentSelection = whiteGrid.childNodes[0]
    createColourGrid()
}

function changeSelection() {
    let color = currentSelection.getAttribute('color')
    if (color == 'black') currentSelection.setAttribute('src', 'images/black.jpg')
    else if (color == 'white') currentSelection.setAttribute('src', 'images/white.jpg')
    else if (color == 'orange') currentSelection.setAttribute('src', 'images/orange.jpg')
    else if (color == 'green') currentSelection.setAttribute('src', 'images/green.jpg')
    else if (color == 'red') currentSelection.setAttribute('src', 'images/red.jpg')
    else if (color == 'blue') currentSelection.setAttribute('src', 'images/blue.jpg')
    else if (color == 'yellow') currentSelection.setAttribute('src', 'images/yellow.jpg')

    color =  this.getAttribute('color')
    if (color == 'black') this.setAttribute('src', 'images/black-border.jpg')
    else if (color == 'white') this.setAttribute('src', 'images/white-border.jpg')
    else if (color == 'orange') this.setAttribute('src', 'images/orange-border.jpg')
    else if (color == 'green') this.setAttribute('src', 'images/green-border.jpg')
    else if (color == 'red') this.setAttribute('src', 'images/red-border.jpg')
    else if (color == 'blue') this.setAttribute('src', 'images/blue-border.jpg')
    else if (color == 'yellow') this.setAttribute('src', 'images/yellow-border.jpg')
    currentSelection = this
    idx = this.getAttribute('idx')
    sideNum = this.getAttribute('side')
}

function createColourGrid() {
    const imgList = ['images/white.jpg','images/yellow.jpg','images/red.jpg','images/orange.jpg','images/blue.jpg','images/green.jpg']
    const colourList = ['white', 'yellow', 'red', 'orange', 'blue', 'green']
    for(let i = 0; i < 6; i++) {
        const tile = document.createElement('img')
        tile.setAttribute('src', imgList[i])
        tile.setAttribute('color', colourList[i])
        tile.addEventListener('click', changeColour)
        colours.appendChild(tile)
    }
}

function changeColour() {
    let side
    let nodes
    if (sideNum == 0) {
        nodes = whiteGrid.childNodes
        side = whiteSide
    }
    else if (sideNum == 1) {
        nodes = orangeGrid.childNodes
        side = orangeSide
    }
    else if (sideNum == 2) {
        nodes = greenGrid.childNodes
        side = greenSide
    }
    else if (sideNum == 3) {
        nodes = redGrid.childNodes
        side = redSide
    }
    else if (sideNum == 4) {
        nodes = blueGrid.childNodes
        side = blueSide
    }
    else if (sideNum == 5) {
        nodes = yellowGrid.childNodes
        side = yellowSide
    }
    nodes[idx].setAttribute('src',this.getAttribute('src'))
    nodes[idx].setAttribute('color', this.getAttribute('color'))
    side[idx].color = this.getAttribute('color')
    side[idx].img = this.getAttribute('src')
    idx++
    if (idx > 8) { 
        sideNum++
        if (sideNum > 5) return;
        idx = 0
        nodes = gridList[sideNum].childNodes
    }
    changeSelection.call(nodes[idx])
}

createBoard()