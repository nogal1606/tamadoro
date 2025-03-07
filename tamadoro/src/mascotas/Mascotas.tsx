import React from "react";
import { mascotas } from "./mockMascotas"; // Importa tus datos de mascotas
import './mascotas.css'

const ListadoMascotas: React.FC = () => {
    return (
        <div className="container">
            {mascotas.map((mascota) => (
                <div className="calle" key={mascota.nombre}>
                    <div className="card h-100">
                        {/* Imagen de la mascota */}
                        <img src={mascota.imagen} className="card-img-top" alt={mascota.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{mascota.nombre}</h5>
                            <p className="card-text">{mascota.descripcion}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Precio: ${mascota.precio}</small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListadoMascotas;
