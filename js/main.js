const container = document.querySelector('#app-container--outer');
const sections = container.querySelectorAll('section');
const amountOfSections = sections.length;
let progress = 1;

const appendButtons = () => {

    const btn = '<button class="next-section--btn" onclick="nextSection(this)"><i class="fas fa-sort-down"></i></button>'

    let n;
    for (n = 0; n < (amountOfSections - 1); n++) {
        sections[n].innerHTML += btn;

    }
};


const updateProgressBar = () => {
    
    const currentProgress = ((progress /amountOfSections)*100);
    const progressBar = document.querySelector('.progress > .bar');
    progressBar.style.transform = `scaleX(${currentProgress}%)`;

    progress += + 1;
    console.log(`scaleX(${currentProgress}%);`)
}


const nextSection = (btn) => {
    const currentSection = btn.parentElement;
    const nextSection = currentSection.nextElementSibling;

    if (!(nextSection === null)) {
        nextSection.setAttribute('aria-hidden', 'false');
    }
    btn.classList.add('fade-out');
    btn.removeAttribute('onclick', '');

    setTimeout(function () { nextSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }) }, 300);

    updateProgressBar();

}


//PROGRSS FIRST COUNT HPOW MANY SECTION DEVIDE THAT INTO PERCENTAGE
//EVERYTIME A NEW SECTION IS OPENED INCREASE A N VARIABLE AND BOOM



(function () {
    appendButtons();
    updateProgressBar();
}())



