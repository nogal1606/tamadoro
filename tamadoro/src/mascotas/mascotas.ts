import React from "react";
import { mascotas } from "./mockMascotas";  // Asegúrate de importar correctamente el array de mascotas

const ListadoMascotas: React.FC = () => {
    return (
        <div className="container">
            {mascotas.map((mascota) => (
                <div className="mascota-card" key={mascotas.nombre}>
                    <img src={mascotas.imagen} alt={mascotas.nombre} />
                    <h3>{mascotas.nombre}</h3>
                    <p>Elemento: {mascota.elemento}</p>
                    <p>Descripción: {mascota.descripcion}</p>
                    <p className="precio">Precio: ${mascota.precio}</p>
                </div>
            ))}
        </div>
    );
};

export default ListadoMascotas;