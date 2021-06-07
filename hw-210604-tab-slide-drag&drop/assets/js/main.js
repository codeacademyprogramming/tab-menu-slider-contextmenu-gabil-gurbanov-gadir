const tabs = Array.from(document.querySelectorAll('.tab'));
const tabSlide = document.querySelector('.tab-slide');
const tabTaskBar = document.querySelector('.tab-taskBar');

// Tab Start

tabs.forEach((tab) => {

    tab.addEventListener('mouseenter', (e) => {
        if (!HasActiveClass(tab)) {
            tab.classList.add('border', 'text-success', 'border-bottom-0',
                'border-info', 'rounded-top');
        }
    });
    tab.addEventListener('mouseleave', (e) => {
        if (!HasActiveClass(tab)) {
            tab.classList.remove('border-info', 'border');
        }

        tab.classList.remove('text-success', 'border-bottom-0');
    });

    tab.addEventListener('click', (e) => {
        tabs.forEach((t) => {
            if (HasActiveClass(t)) {
                t.classList.remove('active-tab');
                document.querySelector(`.${t.dataset.tab}`).classList.add('d-none');
            }
        });
        tab.classList.add('active-tab');
        document.querySelector(`.${tab.dataset.tab}`).classList.remove('d-none');
    });
})

function HasActiveClass(elem) {

    if (elem.className.indexOf('active-tab') != -1) {
        return true;
    };
    return false;
}

// Tab End


// Slider Start

const leftArrow = document.querySelector('.arrow-icons .left');
const rightArrow = document.querySelector('.arrow-icons .right');
let images = [];

rightArrow.addEventListener('click', (e) => {
    images = Array.from(document.querySelectorAll('.image'));
    const findingImage = FindDisplayBlock(images);
    findingImage.classList.remove('d-block');
    findingImage.classList.add('d-none');
    if (AtribitesArray(images).length >= (+(findingImage.dataset.slide) + 1)) {
        const imageNext = document.querySelector(`.image[data-slide ="${+(findingImage.dataset.slide)+1}"]`);
        imageNext.classList.remove('d-none');
        imageNext.classList.add('d-block');
    } else {
        const imageFirst = document.querySelector('.image[data-slide="1"]');
        imageFirst.classList.remove('d-none');
        imageFirst.classList.add('d-block');
    }
});

leftArrow.addEventListener('click', (e) => {
    images = Array.from(document.querySelectorAll('.image'));
    const findingImage = FindDisplayBlock(images);
    findingImage.classList.remove('d-block');
    findingImage.classList.add('d-none');
    if (0 != (+(findingImage.dataset.slide) - 1)) {
        const imageNext = document.querySelector(`.image[data-slide ="${+(findingImage.dataset.slide)-1}"]`);
        imageNext.classList.remove('d-none');
        imageNext.classList.add('d-block');
    } else {
        const imageFirst = document.querySelector(`.image[data-slide="${AtribitesArray(images).length}"]`);
        imageFirst.classList.remove('d-none');
        imageFirst.classList.add('d-block');
    }
});



// console.log(images);

// console.log(FindDisplayBlock(images));

function FindDisplayBlock(images) {
    let findImage;
    images.forEach((image) => {
        if (image.className.indexOf('d-block') != -1) {
            findImage = image;
        }
    });
    return findImage;
}

// function FindDisplayBlock2(images) {
//     images.forEach((image) => {
//         console.log(image.className.indexOf('d-block'));
//         if (image.className.indexOf('d-block') != -1) {
//             return image;
//         }
//     });
// }

function AtribitesArray(images) {
    const ArrAtr = [];
    images.forEach((img) => {
        ArrAtr.push(+img.dataset.slide);
    });
    return ArrAtr;
}

// Slider End