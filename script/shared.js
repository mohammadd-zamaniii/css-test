let backdrop = document.querySelector('.back-d')
let modal = document.querySelector('.modal')
let selectPlanBtn = document.querySelectorAll('.p-l button')
let modalClosBtn = document.querySelector('.modal-acn')

for (let i = 0; i < selectPlanBtn.length; i++) {
    selectPlanBtn[i].addEventListener('click', () => {
        // modal.style.display = 'block'
        // backdrop.style.display = 'block'
        modal.classList.add('open')
        backdrop.classList.add('open')
    })
}

backdrop.addEventListener('click', closeModal)
modalClosBtn.addEventListener('click', closeModal)

function closeModal() {
    // backdrop.style.display = 'none'
    // modal.style.display = 'none'
    modal.classList.remove('open')
    backdrop.classList.remove('open')
}