import React, { useState } from 'react'

function Estudio(){
return(<div>
        <h1>Temporizador</h1>
        <div>
        <label htmlFor="">tiempo estudio</label>
            <select name="tiempo" id="tmp">
                <option value="1">60 + 15</option>
                <option value="2">50 + 10</option>
                <option value="3">25 + 5</option>
            </select>
        </div>
        <button id="start">Iniciar</button>
        <button id="pause">Pausar</button>
        <button id="reset">Reiniciar</button>       
    </div>
)
}
export default Estudio