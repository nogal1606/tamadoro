// mockMascotas.ts
import flamixImg from '../assets/mascotas/flamix.png';
import aquanixImg from '../assets/mascotas/aquanix.png';
import terronixImg from '../assets/mascotas/terronix.png';
import electruxImg from '../assets/mascotas/electrux.png';
import ventisImg from '../assets/mascotas/ventis.png';
import sombraxImg from '../assets/mascotas/sombrax.png';
import lumixImg from '../assets/mascotas/lumix.png';
import fangorImg from '../assets/mascotas/fangor.png';
import crystorImg from '../assets/mascotas/crystor.png';
import quetzalorImg from '../assets/mascotas/quetzalor.png';
import zenithorImg from '../assets/mascotas/zenithor.png';

export interface Mascota {
    nombre: string;
    elemento: string;
    descripcion: string;
    precio: number;
    imagen: string;
}

export const mascotas: Mascota[] = [
    { nombre: "Flamix", elemento: "Fuego", descripcion: "Una criatura valiente y feroz", precio: 4700, imagen: flamixImg },
    { nombre: "Aquanix", elemento: "Agua", descripcion: "Posee una gran sabiduría ancestral", precio: 2100, imagen: aquanixImg },
    { nombre: "Terronix", elemento: "Tierra", descripcion: "Capaz de generar tormentas a voluntad", precio: 2100, imagen: terronixImg },
    { nombre: "Electrux", elemento: "Electrico", descripcion: "Su rugido puede partir montañas", precio: 3400, imagen: electruxImg },
    { nombre: "Ventis", elemento: "Aire", descripcion: "Un guardián místico de las antiguas ruinas", precio: 2100, imagen: ventisImg },
    { nombre: "Sombrax", elemento: "Oscuridad", descripcion: "Brilla intensamente en la oscuridad", precio: 4100, imagen: sombraxImg },
    { nombre: "Lumix", elemento: "Luz", descripcion: "Emanación pura de energía celestial", precio: 2900, imagen: lumixImg },
    { nombre: "Fangor", elemento: "Veneno", descripcion: "Sus colmillos pueden paralizar a su presa", precio: 3350, imagen: fangorImg },
    { nombre: "Crystor", elemento: "Hielo", descripcion: "Sus escamas son tan frías como el Ártico", precio: 3600, imagen: crystorImg },
    { nombre: "Quetzalor", elemento: "Tierra", descripcion: "Un espíritu guardián de la naturaleza", precio: 2950, imagen: quetzalorImg },
    { nombre: "Zenithor", elemento: "Dragon", descripcion: "El más sabio de los dragones", precio: 4950, imagen: zenithorImg }
];
