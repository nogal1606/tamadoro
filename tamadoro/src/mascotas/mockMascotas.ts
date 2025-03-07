export interface Mascota {
    nombre: string;
    elemento: string;
    descripcion: string;
    precio: number;
    imagen: string;
}

export const mascotas: Mascota[] = [
    { nombre: "Flamix", elemento: "Fuego", descripcion: "Una criatura valiente y feroz", precio: 4700, imagen: "flamix.png" },
    { nombre: "Aquanix", elemento: "Agua", descripcion: "Posee una gran sabiduría ancestral", precio: 2100, imagen: "aquanix.png" },
    { nombre: "Terronix", elemento: "Tierra", descripcion: "Capaz de generar tormentas a voluntad", precio: 2100, imagen: "terronix.png" },
    { nombre: "Electrux", elemento: "Electrico", descripcion: "Su rugido puede partir montañas", precio: 3400, imagen: "electrux.png" },
    { nombre: "Ventis", elemento: "Aire", descripcion: "Un guardián místico de las antiguas ruinas", precio: 2100, imagen: "ventis.png" },
    { nombre: "Sombrax", elemento: "Oscuridad", descripcion: "Brilla intensamente en la oscuridad", precio: 4100, imagen: "sombrax.png" },
    { nombre: "Lumix", elemento: "Luz", descripcion: "Emanación pura de energía celestial", precio: 2900, imagen: "lumix.png" },
    { nombre: "Fangor", elemento: "Veneno", descripcion: "Sus colmillos pueden paralizar a su presa", precio: 3350, imagen: "fangor.png" },
    { nombre: "Crystor", elemento: "Hielo", descripcion: "Sus escamas son tan frías como el Ártico", precio: 3600, imagen: "crystor.png" },
    { nombre: "Quetzalor", elemento: "Tierra", descripcion: "Un espíritu guardián de la naturaleza", precio: 2950, imagen: "quetzalor.png" },
    { nombre: "Zenithor", elemento: "Dragon", descripcion: "El más sabio de los dragones", precio: 4950, imagen: "zenithor.png" }
];
