const imageArray = [
    './beachImages/beach1.jpg',
    './beachImages/beach2.jpg',
    './beachImages/beach3.jpg',
    './beachImages/beach4.jpg',
    './beachImages/beach5.jpg',
    './beachImages/beachSunset1.jpg',
    './beachImages/beachSunset2.jpg',
    './beachImages/beachSunset3.jpg',
];
const imagesDiv = document.getElementById('images');
const image = imagesDiv.childNodes[1];
const pauseButton = document.querySelector('[data-pause]');
const leftButton = document.querySelector('[data-left]');
const rightButton = document.querySelector('[data-right]');
const circle = document.querySelectorAll('[data-pic]');
let currentImage = 0;
let i = 0;
let myInterval = setInterval(changeImageRight, 5000)
let isPaused = 0;

leftButton.addEventListener('click', () => {
    changeImageLeft();
});

rightButton.addEventListener('click', () => {
    changeImageRight();
});

pauseButton.addEventListener('click', () => {
    togglePause();
})

function togglePause () {
    if (isPaused === 0) {
        pauseButton.style.backgroundColor = "black";
        clearInterval(myInterval);
        isPaused = 1;
    } else {
        pauseButton.style.backgroundColor = "grey";
        myInterval = setInterval(changeImageRight, 5000)
        isPaused = 0;
    }
}

function changeImageRight() {
    clearInterval(myInterval);
    if ( i === imageArray.length - 1) {
        i = 0;
        image.src = imageArray[i];
        currentImage = 0;
    } else {
        i++;
        image.src = imageArray[i];
        currentImage = i;
    }
    myInterval = setInterval(changeImageRight, 5000);
}

function changeImageLeft() {
    clearInterval(myInterval);
    if (currentImage === 0) {
        i = imageArray.length - 1;
        image.src = imageArray[i];
        currentImage = i;
    } else {
        i--;
        image.src = imageArray[i];
        currentImage = i;
    }
    myInterval = setInterval(changeImageRight, 5000);
}


console.log(circle);
circle.forEach((item) =>
    item.addEventListener('click', (e) => {
        navDisplay(e);
    })
);

function navDisplay(e) {
    clearInterval(myInterval);
    let pic = e.target.dataset.pic;
    image.src = imageArray[pic];
    currentImage = pic;
    i = pic;
    circle.forEach((item) => (item.style.backgroundColor = 'white'));
    e.target.style.backgroundColor = 'purple';
    myInterval = setInterval(changeImageRight, 5000);
}

function defaultDisplay() {
    image.src = imageArray[0];
   
}

window.onload = defaultDisplay();
