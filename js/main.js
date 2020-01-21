const container = document.querySelector('#app-container--outer');
const sections = container.querySelectorAll('section');
const amountOfSections = (sections.length);
let progress = 1;

const appendButtons = () => {

    const btn = '<button class="next-section--btn" onclick="nextSection(this)"><i class="fas fa-sort-down"></i></button>'

    const startBtn = '<button class="next-section--btn start-btn  " onclick="nextSection(this)">Start<i class="fas fa-play"></i></button'

    let n;
    for (n = 0; n < (amountOfSections - 1); n++) {

        switch (n) {
            case 0:
                sections[n].innerHTML += startBtn;
                break;

            default:
                sections[n].innerHTML += btn;
                break;
        }
    }
};


const updateProgressBar = () => {

    const currentProgress = (Math.round((progress / (amountOfSections - 1)) * (100 / 1) * 100) / 100);
    const progressBar = document.getElementById('bar');
    progressBar.style.transform = `scaleX(${currentProgress/100})`;

    progress++;
    console.log(currentProgress)
}


const nextSection = (btn) => {
    const currentSection = btn.parentElement;
    const nextSection = currentSection.nextElementSibling;

    if (!(nextSection === null)) {
        nextSection.setAttribute('aria-hidden', 'false');
    }
    btn.classList.add('fade-out');
    btn.removeAttribute('onclick', '');

    setTimeout(function() { btn.classList.add('hidden') }, 700);

    setTimeout(function() { nextSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }) }, 300);

    updateProgressBar();

}


//PROGRSS FIRST COUNT HPOW MANY SECTION DEVIDE THAT INTO PERCENTAGE
//EVERYTIME A NEW SECTION IS OPENED INCREASE A N VARIABLE AND BOOM



(function() {
    appendButtons();
}())