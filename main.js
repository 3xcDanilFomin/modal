const btnOpen = document.querySelector('.btn-open')
const modal = document.querySelector('.modal-overlay')
const btnClose = document.querySelector('.modal__btn-close')

btnOpen.addEventListener('click', function () {
  modal.classList.add('modal--open')
})

btnClose.addEventListener('click', function () {
  modal.classList.remove('modal--open')
})

modal.addEventListener('click', function (event) {
  if (!event.target.closest('.modal')) {
    modal.classList.remove('modal--open')
  }
})
