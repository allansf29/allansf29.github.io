const openModal = () => document.querySelector('#modal')
    .classList.add('active')

const closeModal = () => document.querySelector('#modal')
    .classList.remove('active')

document.querySelector('#open-modal')
    .addEventListener('click', openModal)

document.querySelector('#modal-close')
    .addEventListener('click', closeModal)
