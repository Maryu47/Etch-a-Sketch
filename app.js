const container = document.querySelector('.container');
const size = 16;
for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    // simple hover / draw effect: add 'active' class when mouse enters
    cell.addEventListener('mouseenter', () => {
        cell.classList.add('active');
    });

    container.appendChild(cell);
}