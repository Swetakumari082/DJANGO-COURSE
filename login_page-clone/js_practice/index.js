console.log('it works')
updatecolor = function(){
    console.log("hakuna mtata")
}
function dosomething(){
    alert("i am doing something")
}
animate_button = () =>[
    console.log('i am animating the button')
]
changeMessage = (e) =>{
    e.target.innerText='button clicked'
    
}
let btnul=document.querySelector('#btn-uplink')
let alllinks=document.querySelectorAll('a')
btnul.addEventListener('click', (e)=>{
    alllinks.forEach((link,i)=>{
        link.textContent = `Link ${i}`
    })
})