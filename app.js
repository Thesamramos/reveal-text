const revealBtn = document.querySelector(".reveal-btn");

const hidderContent = document.querySelector(".hidden-content");

function revealContent(){

    if(hidderContent.classList.contains('reveal-btn')){
        hidderContent.classList.remove('reveal-btn')
    } else {
        hidderContent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener('click', revealContent);