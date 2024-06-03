//Single element
// console.log(document.getElementById('myForm'))
// console.log(document.querySelector('h1'))

//Multiple element
// console.log(document.querySelectorAll('.item'))
// console.log(document.getElementsByClassName('item'))
// console.log(document.getElementsByTagName('li'))

/*Remove and rename*/
// const ul = document.querySelector('.items')

// // ul.lastChild.remove()
// // ul.remove()
// ul.firstElementChild.textContent = "Hello"
// ul.children[1].innerText = 'World'
// ul.lastElementChild.innerHTML = '<h3>!!</h3>'

// const btn = document.querySelector('.btn')
// btn.style.background = 'aqua'

// const btn = document.querySelector('.btn')

// btn.addEventListener('click', (e) =>{ //mouseover ; mouseout ; click
//     e.preventDefault();
//     document.querySelector('body').classList.add('bgDark')
//     document.querySelector('.items').children[1].innerText = 'You'
// })


const myForm = document.querySelector('#myForm')
const nameInput = document.querySelector('#name')
const fonction = document.querySelector('#fonc')
const message = document.querySelector('.mess')
const userList = document.querySelector('#users')

function onSubmit(e) {
    e.preventDefault()

    if (nameInput.value ==='' || fonction.value === '') {
        message.classList.add('error')
        message.innerHTML = 'Please enter all fields'
        setTimeout(()=>{
            message.classList.remove('error')
            message.innerHTML = ''}, 2500)
    } else {
        message.classList.add('success')
        message.innerHTML = 'Succes'
        setTimeout(() => {
            message.classList.remove('success')
            message.innerHTML = ''}, 1500)

        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${fonction.value}`))

        userList.appendChild(li)
        // clear fields
        nameInput.value = ''
        fonction.value = ''
    }
}
myForm.addEventListener('submit',onSubmit)
