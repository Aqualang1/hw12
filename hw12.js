const prev = document.getElementById('prev');
const next = document.getElementById('next');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const images = Array.from(document.getElementsByTagName('img'));
let i = 1;

next.addEventListener('click', () => {
    images[i].classList.add('hidden');
    images[i + 1].classList.remove('hidden');
    i++;
    console.log(i);
    if (i === images.length - 1) {
        next.classList.add('hidden');
    }
    prev.classList.remove('hidden');
})

prev.addEventListener('click', () => {
    images[i].classList.add('hidden');
    images[i - 1].classList.remove('hidden');
    i--;
    console.log(i);
    if (i === 0) {
        prev.classList.add('hidden');
    }
    next.classList.remove('hidden');
})