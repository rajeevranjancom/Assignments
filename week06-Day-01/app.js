let divs = document.querySelectorAll('div')
divs.forEach(function(div){
    console.log(div.firstElementChild.innerHTML)
})