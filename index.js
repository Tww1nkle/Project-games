function showSlide(n){
    let sliders = document.getElementsByClassName('item');

    if (n > sliders.length) slide = 1;
    if (n < 1) slide = sliders.length;

    for (let sld of sliders){
        sld.style.display = 'none';
    }

    sliders[slide - 1].style.display = 'flex'
}

let slide = 1;
showSlide(slide)

function nextSlider(){
    showSlide(slide += 1);
}
function prevSlider(){
    showSlide(slide -= 1);
}

function showCurrentSl(num){
    showSlide(slide = num);
}

