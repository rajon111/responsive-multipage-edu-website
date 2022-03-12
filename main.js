//change navbar style on scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})
//show & hide faq answer
const faqs = document.querySelectorAll('.faq')
// console.log(faqs)
faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open')
        //change icon
        /*const icon = document.querySelector('.faq__icon i');
        if(icon.classList === 'fa-light fa-plus'){
            icon.classList ='fa-light fa-minus'
        }else{
            icon.classList ='fa-light fa-plus'
        }*/
    })
})