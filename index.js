
function display(val){  // value means with in the property(display) we have given value
        
    document.getElementById('result').value += val //value=value+val(shorthand operator)addition assignment operator
  
    return val
}
function solve(){

let x = document.getElementById('result').value

let y = eval(x);

document.getElementById('result').value = y

return y
}

function clearScreen(){

    document.getElementById('result').value = ''
    
    }