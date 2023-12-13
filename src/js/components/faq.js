const faqItems = document.querySelectorAll('.faq-item')

faqItems.forEach(el => {
  el.addEventListener('click', e => {
    const content = e.currentTarget.querySelector('.faq-item__content')

    let isActive = e.currentTarget.classList.toggle('active')
    if(isActive){
      content.style.maxHeight = content.scrollHeight + 'px'
    } else {
      content.style.maxHeight = null
    }

  })
})
