let slides = document.querySelectorAll('.offer__slide');
let slider = [];
var timer;

for (let i = 0; i<slides.length;i++){
    slider[i] = slides[i].src;
    slides[i].remove();
}

let step = 0;
let offset = 0;


const draw = () =>{
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('offer__slide');
    img.style.left= offset*750+'px';

    document.querySelector('#slide').appendChild(img);

    if ( step + 1 === slider.length){
        step = 0;
    }
    else {
        step++;
    }

    offset = 1;
}

function autoSlider() {
     timer = setTimeout(left,2000)
}

function left (){
    let slides2 = document.querySelectorAll(".offer__slide");
    let offset2 = 0;

    for (let i = 0; i<slides2.length;i++){
        slides2[i].style.left = offset2*300 -300 + 'px';
        // slides2[i].style.width = 750 + 'px';
        slides2[1].style.width = 750 + 'px';
        slides2[1].style.height = 750 + 'px';
        offset2++;
        clearTimeout(timer);
        slides2[0].style.width = 300 + 'px';
        slides2[0].style.height = 300 + 'px';

    }

        setTimeout(function (){
            slides2[0].remove();
            draw();
        },1000)



    autoSlider()



}

draw();draw();

window.onload = left;






