const overlay = document.querySelector('#overlay');
const sign_in = document.querySelector('#in');
const sign_up = document.querySelector('#up');

overlay.addEventListener('click', ()=>{
    if(overlay.innerText !== '✓'){ 
        overlay.innerText = '✓';
    }else{
        overlay.innerText = '';
    }
})
sign_in.addEventListener('click', (e)=>{
    e.preventDefault();
})
sign_up.addEventListener('click', (e)=>{
    e.preventDefault();
})

sign_in.addEventListener('mouseover', ()=>{
    sign_up.style.color = '#ff4436';
    sign_up.style.backgroundColor = '#fff';
    sign_up.style.border = '2px  #ff4436 solid';
})
sign_in.addEventListener('mouseout', ()=>{
    sign_up.style.color = '#fff';
    sign_up.style.backgroundColor = '#ff4436';
})
sign_up.addEventListener('mouseout', ()=>{
   // sign_up.style.color = '#fff';
    //sign_up.style.backgroundColor = '#ff4436';
})
sign_up.addEventListener('mouseover', ()=>{
   // sign_up.style.color = '#ff4436';
   // sign_up.style.backgroundColor = '#fff';
   // sign_up.style.border = '2px  #ff4436 solid';
})