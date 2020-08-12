function applytheme(theme){
    alert(theme)
    document.body.classList.remove("tauto","tdark","tlight")
    document.body.classList.add(current)
}


document.querySelector("#theme").addEventListener("change",function(){
    let current=this.value;
    document.body.classList.add(current)
    applytheme(current);

    
})