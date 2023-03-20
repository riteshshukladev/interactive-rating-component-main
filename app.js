const main_container = document.querySelector('.main-container');
const thankyou_container = document.querySelector('.thankyou-container');
const submit_btn = document.querySelector('.submit-button');
const rating = document.querySelector('.rating');
const rating_value = document.querySelectorAll('.btn');
submit_btn.addEventListener('click', () => {
    thankyou_container.classList.remove('hidden');
    main_container.classList.add('hidden');
});

rating_value.forEach(rate => {
    rate.addEventListener('click', () => {
        rating.innerHTML=rate.innerHTML
});
});