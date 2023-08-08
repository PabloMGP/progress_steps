const progressBar = document.querySelector('.progress-bar');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const counter = document.querySelectorAll('.counter')

let currentlyActive = 1;

nextBtn.addEventListener('click', () => {
    currentlyActive++;
    prevBtn.removeAttribute('disabled');
    if (currentlyActive > 3) {
        currentlyActive = counter.length;
    }
    update();
})

prevBtn.addEventListener('click', () => {
    currentlyActive--
    if(currentlyActive < 1) {
        currentlyActive = 1;
    }
    update();
})

function update() {
    const actives = document.querySelectorAll('.active');

    counter.forEach((counter, indx) => {
        if(indx < currentlyActive) {
            counter.classList.add('active');
        } else {
            counter.classList.remove('active');
        }
    });

    progressBar.style.width = ((currentlyActive - 1) / (counter.length - 1)) * 100 + '%';

    if (currentlyActive === 1) {
        prevBtn.disabled = true;
    }
}

update(); // Call update initially to set the initial state


