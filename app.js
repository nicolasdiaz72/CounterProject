// Set initial count
let count = 0; 

const btns = document.querySelectorAll('.btn ')
const value = document.querySelector('#value')

btns.forEach(function(btn){
btn.addEventListener('click', function(e){
const styles = e.currentTarget.classList

    // Set value to btns
    if (styles.contains('decrease')){
        count--;
    }
    else if (styles.contains('increase')){
        count++
    }
    else{
        count = 0;

    // Set color attribute
    }
    if (count<0){
     value.style.color = 'red'
    }
    if (count > 0){
    value.style.color = "green"
    }
    if (count === 0){
    value.style.color = "grey"
    }
    value.textContent = count;
    })

})