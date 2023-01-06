let slider = document.querySelector('.slider');
let bullets = document.querySelectorAll('.bullet span');
let nums = 0 ;


document.addEventListener('click',e => {
if(e.target.classList.contains('left')&&nums !== 0 ){
bullets.forEach((e)=>{
e.classList.remove('active');
})
    nums-=100;
    slider.style.cssText = `
    transform :translateX(-${nums}vw);`
    bullets[nums/100].classList.toggle('active')
}

if(e.target.classList.contains('right')&&nums !== 200){
    bullets.forEach((e)=>{
        e.classList.remove('active');
        })
    nums += 100;                 
    slider.style.cssText = `
    transform :translateX(-${nums}vw);`
    console.log('done');
    bullets[nums/100].classList.toggle('active')
}

})
