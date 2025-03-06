function temporizador1(
    duracion: number = 3600, 
    elementoId: string = 'temp', 
    callback?: () => void
): number {
    let cont: number = duracion;
    const elemento: HTMLElement | null = document.getElementById(elementoId);

    if (!elemento) {
        console.error(`Elemento con id "${elementoId}" no encontrado.`);
        return 0; // Devuelve un valor por defecto en caso de error
    }

    const intervalo: number = setInterval(() => {
        const minutos: string = Math.floor(cont / 60).toString().padStart(2, '0');
        const segundos: string = (cont % 60).toString().padStart(2, '0');

        elemento.innerHTML = `${minutos}:${segundos}`;
        
        if (--cont < 0) {
            clearInterval(intervalo);
            console.log("⏳ Temporizador finalizado");
            if (callback) callback();
        }
    }, 1000);

    return intervalo; // Devolvemos el intervalo para poder detenerlo desde React
}

export default temporizador1;


