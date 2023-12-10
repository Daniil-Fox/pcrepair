const modal = document.querySelector('.modal')
const modalWindow = modal.querySelector('.modal__window')
const modalCloseBtn = modal.querySelector('.modal__close')
const modalBtns = document.querySelectorAll('[data-modal-btn]')

modalBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault()
    e.stopPropagation()

    modal.classList.add('active')
    document.body.style.overflow = "hidden"
  })
})

modal.addEventListener('click', e => {
  modal.classList.remove('active')
  document.body.style.overflow = null
})
modalCloseBtn.addEventListener('click', e => {
  modal.classList.remove('active')
  document.body.style.overflow = null
})
modalWindow.addEventListener('click', e => {
  e.stopPropagation()
})
