const container = document.querySelector('.container');
const btn = document.getElementById('resize-btn');

// track whether the mouse button is currently pressed (for click-and-drag drawing)
let isDrawing = false;
// when the mouse is pressed anywhere, start drawing; when released, stop
document.addEventListener('mousedown', () => { isDrawing = true; });
document.addEventListener('mouseup', () => { isDrawing = false; });

function createGrid(size) {
    // clear existing cells
    container.innerHTML = '';

    // update CSS variable so cell sizing adapts
    container.style.setProperty('--cells-per-side', size);

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        // click-and-drag drawing:
        // draw on mousedown and when entering a cell while the mouse is pressed
        cell.addEventListener('mousedown', (e) => {
            e.preventDefault();
            cell.classList.add('active');
            isDrawing = true;
        });
        cell.addEventListener('mouseenter', () => {
            if (isDrawing) cell.classList.add('active');
        });

        container.appendChild(cell);
    }
}

btn.addEventListener('click', () => {
    const input = prompt('Enter number of squares per side (1-100):', '16');
    if (input === null) return; // user cancelled
    const newSize = parseInt(input, 10);
    if (Number.isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Invalid size. Please enter a number between 1 and 100.');
        return;
    }
    createGrid(newSize);
});

// clear current drawing by removing 'active' class from all cells
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
    document.querySelectorAll('.cell.active').forEach(cell => cell.classList.remove('active'));
});

// initial grid
createGrid(16);