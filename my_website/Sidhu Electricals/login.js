document.getElementById("start").addEventListener("click",function handleclick(){
    alert("Started the event Logger Successfully");
    document.getElementById("username").addEventListener("keyup",function(event){
        e= event.key;
        let logger = document.getElementById("logger");
        logger.textContent += (" "+e)
        if(event.key=='2'){
            event.preventDefault;
            event.stopPropagation;
            event.stopImmediatePropagation;
        }
            
    
    })
})
document.getElementById("stop").addEventListener("click",function(){
    confirm("You have clicked the stop button . All events will not be logged in the console.")
    document.getElementById("username").removeEventListener("keyup")
    document.getElementById("username").removeEventListener("keydown")
    document.getElementById("username").removeEventListener("keypress")
    
});

document.getElementById("submit_login").addEventListener("click",function(){
    confirm("Are you sure to proceed?")})

