const text = document.querySelector('#name'), mile = document.querySelector('#num'), form = document.querySelector('form')
let result = []

    let tr = document.createElement('tr')
    let td = document.createElement('td')
    let tablebody = document.querySelector('tbody')
document.querySelector('.submit').addEventListener('click', function(){
    
        tablebody.innerHTML +=  `
            <tr>
                <td>${text.value}</td>
                <td>${mile.value}</td>
            </tr>
         `
        //  result.push()
        //  total += result.pop()
        //  document.querySelector('.result').innerHTML += total
        
})


let getResult = document.querySelector('.getResult')
getResult.addEventListener('click', function(){
    console.log(document.querySelectorAll('.miles').innerHTML)
})