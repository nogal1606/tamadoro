function temporizador1() {
    let cont = 3600;
    const intervalo = setInterval(() => {
        let minutos = Math.floor(cont / 60);
        let segundos = (cont % 60).toString().padStart(2, '0'); 
        console.log(`Ejecutando setInterval ${minutos}:${segundos}`);
        
        if (--cont < 0) {
            clearInterval(intervalo);
            console.log("Temporizador finalizado");
        }
    }, 1000);
}

export default temporizador1