
const problems = document.querySelectorAll('.problems-item')
const problemsItems = document.querySelector('.problems__items')
const problemsSection = document.querySelector('.problems')


problemsSection.addEventListener('click', e => {
  e.stopPropagation()
  clearAll()
})

problems.forEach(prob => {
  prob.addEventListener('click', e => {
    e.stopPropagation()
    const currentSol = document.querySelector(`.problems-content[data-prob="${prob.dataset.prob}"]`)
    const currentCol = currentSol.closest('.problems__sol')
    clearAll()

    prob.classList.add('active')
    problemsItems.classList.add('active')
    currentCol.classList.add('active')
    currentSol.classList.add('active')
  })
})

function clearAll(){
  const problemsContent = document.querySelectorAll('.problems-content')
  const problemsColumns = document.querySelectorAll('.problems__sol')
  problemsItems.classList.remove('active')
  problemsContent.forEach(el => {
    el.addEventListener('click', e => e.stopPropagation())
    el.classList.remove('active')
  })
  problemsColumns.forEach(el => {
    el.addEventListener('click', e => e.stopPropagation())
    el.classList.remove('active')
  })
  problems.forEach(el => {
    el.addEventListener('click', e => e.stopPropagation())
    el.classList.remove('active')
  })
}
