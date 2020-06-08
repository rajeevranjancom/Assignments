//My Inplementation


let [name,price,tbody, form] = [
    document.querySelector('#name'),
    document.querySelector('#rate'),
    document.querySelector('tbody'),
    document.querySelector('form')
]
form.addEventListener('submit', (e)=>{
    localStorage.setItem(name.value, price.value)
    tbody.innerHTML += `
        <tr>
            <td>${name.value}</td>
            <td>${price.value}</td>
        </tr>
    `
    e.preventDefault()
})



// Assignment Solution

// let ice1 = [prompt('Enter Icecream Name 1'),prompt('Enter Price')]
// let ice2 = [prompt('Enter Icecream Name 2'),prompt('Enter Price')]
// let ice3 = [prompt('Enter Icecream Name 3'),prompt('Enter Price')]
// let ice4 = [prompt('Enter Icecream Name 4'),prompt('Enter Price')]
// let ice5 = [prompt('Enter Icecream Name 5'),prompt('Enter Price')]
// document.write(ice1[0] + ' : ' + ice1[1] + '<br>'+ ice2[0] + ' : ' + ice2[1] +'<br>'+ ice3[0] + ' : ' + ice3[1] +'<br>'+ ice4[0] + ' : ' + ice4[1] +'<br>'+ ice5[0] + ' : ' + ice5[1])