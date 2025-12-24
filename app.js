const container = document.querySelector('.container');
const btn = document.getElementById('resize-btn');

function createGrid(size) {
    // clear existing cells
    container.innerHTML = '';

    // update CSS variable so cell sizing adapts
    container.style.setProperty('--cells-per-side', size);

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        // simple hover / draw effect: add 'active' class when mouse enters
        cell.addEventListener('mouseenter', () => {
            cell.classList.add('active');
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