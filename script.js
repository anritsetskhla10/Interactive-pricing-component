// slider

const slider = document.querySelector('.range');
const rangeActive = document.querySelector('.range-active');


slider.addEventListener('input', () => {
  const percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
  rangeActive.style.width = `${percent}%`});



//  checkbox 

const ball = document.querySelector('.ball');
const ballLabel = document.querySelector('.ball-label');

function change(){

    if(ball.classList.contains('ball')){
        ball.classList.add('ball-right');
        ball.classList.remove('ball');
    }else{
        ball.classList.add('ball');
        ball.classList.remove('ball-right');
    }

}


const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('click', change);


