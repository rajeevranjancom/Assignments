
document.querySelector('form').addEventListener('submit',(e)=>{
    [n,k,p] = [Number(document.querySelector('.nvalue').value), Number(document.querySelector('.kvalue').value), document.querySelector('p')];

    if(k>=n){
        p.innerHTML = 'K Should be lesser than N'
        p.classList.remove('invisible')
        document.querySelector('.result').value = ''
    }else if(n === 0 && k === -1){
        p.innerHTML = 'You\'re an idiot'
        p.classList.remove('invisible')
        document.querySelector('.result').value = ''
    }else{
        result = 0;
        if(k<0){
            k = 0;
        }
        for(let i = n; i>=k; i--){
            result += i*i;
        }
        document.querySelector('.result').value = document.querySelector('.result').value + result
        e.preventDefault();
    }
})
function clearpartially(){
    if(document.querySelector('.result').value !== ''){
        document.querySelector('.nvalue').value = ''
        document.querySelector('.kvalue').value = ''
        document.querySelector('.result').value = ''
    }
}

function clearall(){
    document.querySelector('.nvalue').value = ''
    document.querySelector('.kvalue').value = ''
    document.querySelector('.result').value = ''
}