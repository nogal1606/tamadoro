import { useRef, useState } from 'react';
import temporizador1 from './estudio';
import React from 'react';
import './estudio.css'

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
            <h1 id='title'>Temporizador</h1>
            <div id="temp">
                <div>00:00</div>
            </div>
            <div id="btn-1">
                <label htmlFor="" id="txt1">Tiempo de estudio</label>
                <br />
                <button type="button" className="btn btn-outline-light" onClick={() => iniciarTemporizador(3600)}>60 + 15</button>
                <button type="button" className="btn btn-outline-light" onClick={() => iniciarTemporizador(3000)}>50 + 10</button>
                <button type="button" className="btn btn-outline-light" onClick={() => iniciarTemporizador(1500)}>25 + 5</button>
            </div>
            <div id='btn-2'>
                <input className="btn btn-outline-success" type="button" value="Start" onClick={() => iniciarTemporizador(tiempo)} /> 
                <input className="btn btn-outline-danger" type="button" value="Stop" onClick={detenerTemporizador} /> 
                <input className="btn btn-outline-warning" type="button" value="Reset" onClick={reiniciarTemporizador} />       
            </div>        
        </div>
    );
}

export default Estudio;
