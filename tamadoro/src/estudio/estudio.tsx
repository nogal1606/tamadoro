import { useRef, useState } from 'react';
import temporizador1 from './estudio';

function Estudio() {
    const intervaloRef = useRef<number | null>(null); 
    const [tiempo, setTiempo] = useState(3600); 

    const iniciarTemporizador = (duracion: number) => {
        if (intervaloRef.current) {
            clearInterval(intervaloRef.current); 
        }

        setTiempo(duracion); 

        intervaloRef.current = temporizador1(duracion, 'temp', () => {
            alert('¡El tiempo ha terminado!');
            intervaloRef.current = null; 
        });
    };

    const detenerTemporizador = () => {
        if (intervaloRef.current !== null) {
            clearInterval(intervaloRef.current);
            intervaloRef.current = null;
        }
    };

    const reiniciarTemporizador = () => {
        detenerTemporizador();
        document.getElementById('temp')!.innerHTML = "00:00"; 
    };

    return (
        <div>
            <h1>Temporizador</h1>
            <div id="temp">
                <div>00:00</div>
            </div>
            <div>
                <label htmlFor="">Tiempo de estudio</label>
                <br />
                <button className="btn btn-success" onClick={() => iniciarTemporizador(3600)}>60 + 15</button>
                <button className="btn btn-success" onClick={() => iniciarTemporizador(3000)}>50 + 10</button>
                <button className="btn btn-success" onClick={() => iniciarTemporizador(1500)}>25 + 5</button>
            </div>
            <input className="btn btn-primary" type="button" value="Start" onClick={() => iniciarTemporizador(tiempo)} /> 
            <input className="btn btn-primary" type="button" value="Stop" onClick={detenerTemporizador} /> 
            <input className="btn btn-primary" type="button" value="Reset" onClick={reiniciarTemporizador} />       
        </div>
    );
}

export default Estudio;
