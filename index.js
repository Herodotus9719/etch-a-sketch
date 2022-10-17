const container = document.querySelector('.container');
var color = 'lightgrey';

function between(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}

function createGrid(num) {
    let gridSize = num * num;
    for (let i = 1; i <= gridSize; i++) {
        let gridUnit = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridUnit);
        // gridUnit.textContent = '1';
    }
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));

}

// function colorGrid() {
//     switch (color) {
//         case "grey":
//             if (this.style.backgroundColor.match(/rgba/)) {
//                 let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
//                 if (currentOpacity <= 0.9) {
//                     this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
//                     this.classList.add('grey');
//                 }
//             } else if (this.classList == 'grey' && this.style.backgroundColor == 'rgba(0, 0, 0)') {
//                 return;
//             } else {
//                 this.style.backgroundColor = 'rgba 0, 0, 0, 0.1';
//             }
//             break;
//         default:
//             this.style.backgroundColor = color;
//             this.classList.remove('grey');
//             break;
//     }
// }


/* Grey color : */
/*
function colorGrid() {
    this.style.backgroundColor = color;
}
*/

/* Rainbow */

// function colorGrid() {
//     this.style.backgroundColor = `rgb(${between(0, 255)}, ${between(0, 255)}, ${between(0, 255)})`;
// }

/* Greyscale */

function colorGrid() {
    if (this.style.backgroundColor == `rgb(12, 12, 12)`) {
        this.style.backgroundColor = `rgb(0, 0, 0)`;
    } else if (this.style.backgroundColor == `rgb(24, 24, 24)`) {
        this.style.backgroundColor = `rgb(12, 12, 12)`;
    } else if (this.style.backgroundColor == `rgb(36, 36, 36)`) {
        this.style.backgroundColor = `rgb(24, 24, 24)`;
    } else if (this.style.backgroundColor == `rgb(48, 48, 48)`) {
        this.style.backgroundColor = `rgb(36, 36, 36)`;
    } else if (this.style.backgroundColor == `rgb(60, 60, 60)`) {
        this.style.backgroundColor = `rgb(48, 48, 48)`;
    } else if (this.style.backgroundColor == `rgb(72, 72, 72)`) {
        this.style.backgroundColor = `rgb(60, 60, 60)`;
    } else if (this.style.backgroundColor == `rgb(84, 84, 84)`) {
        this.style.backgroundColor = `rgb(72, 72, 72)`;
    } else if (this.style.backgroundColor == `rgb(96, 96, 96)`) {
        this.style.backgroundColor = `rgb(84, 84, 84)`;
    } else if (this.style.backgroundColor == `rgb(108, 108, 108)`) {
        this.style.backgroundColor = `rgb(96, 96, 96`;
    } else if (this.style.backgroundColor == `rgb(120, 120, 120)`) {
        this.style.backgroundColor = `rgb(108, 108, 108)`;
    } else if (this.style.backgroundColor == `rgb(0, 0, 0)`) {
        return;
    } else {
        this.style.backgroundColor = `rgb(120, 120, 120)`
    }
}

const btn = document.querySelector('.grid-button');
btn.addEventListener('click', () => {
    newGrid();
});

function delGrid() {
    container.innerHTML = "";
}

function newGrid() {
    let num;
    do {
        num = parseInt(prompt("Pick how large a grid you'd like, from 2 to 100! :"));
    } while (num > 100 || num < 2);
    delGrid();
    createGrid(num);
}


/* Create this default grid upon load: */
createGrid(10);