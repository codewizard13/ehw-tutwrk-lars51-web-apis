// index.js

const btn = document.querySelector('#btn')
const output = document.querySelector('.container')
const url = 'temp1.json'
// console.log(btn)

btn.onclick = () => {
  console.log('clicked')
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
}