// найди элементы: поле ввода, кнопку и список задач
const input = document.querySelector('.task-input')
const button = document.querySelector('.button')
const ul = document.querySelector('.task-list')

// при нажатии на кнопку
button.addEventListener('click', () => {
  const val = input.value.trim() //берем значение из input
  if (val === '') return //если пустое, ничего не делаем

  const li = document.createElement('li') //создаем элемент списка
  li.textContent = val //добавляем в него текст из input
  ul.appendChild(li) //добавляем элемент в список
  li.addEventListener('click', () => { //при нажатии удаляем элемент списка 
    li.remove()
  })
  input.value = '' // очищаем поле ввода
})

//при нажатии на 'Enter' в поле ввода 
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    button.click() //добавляем задачу
  }
})