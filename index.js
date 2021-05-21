const bulb = document.getElementById('bulb');
const btn = document.getElementById('btn');
const input = document.getElementById('input')
const input1 = document.getElementById('input1')
const form = document.getElementById('form')



function first(e){
    if (this.style.filter = 'invert(1)') {
        this.style.filter = "none"
        document.body.style.backgroundImage = 'url(images/swirl_pattern.png'
        btn.style.backgroundColor = '#7d7d7d'
        btn.style.color = 'white'
        input.style.backgroundColor = '#d9d9d9'
        input1.style.backgroundColor = '#d9d9d9'
        this.removeEventListener("click", first);
        this.onclick = second;
        
    }
}

function second(){
    this.style.filter = 'invert(1)'
    document.body.style.backgroundImage = 'url(images/swirl_dark.png'
    btn.style.backgroundColor = '#ededed'
    btn.style.color = '#7a7a7a'
    input.style.backgroundColor = 'white'
    input1.style.backgroundColor = 'white'
    this.removeEventListener("click", first)
    this.onclick = first;
    
}

function resetBtn(){
    setTimeout(function(){ btn.innerHTML = "Sign up"; }, 3000);
}

bulb.addEventListener('click', first)

form.addEventListener("submit", function() {
        event.preventDefault() 
        btn.innerHTML = "Check your inbox!" 
        form.reset();  
        resetBtn(); 
})











