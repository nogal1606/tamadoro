function temporizador1(){
    let cont = 0
    setTimeout(()=>{
        console.log("ejecutando Set timeout");
    }, 3000);
    setInterval(()=>{
        console.log("ejecutando set interval" + cont); ++cont;
    }, 1000)
}

export default temporizador1