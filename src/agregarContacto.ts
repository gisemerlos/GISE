import { Contacto, contactos } from "../src/contactos";


const agregarContacto = (nuevoContacto: Contacto) => {
    let agregado = nuevoContacto.first_name != "";
    agregado = agregado && nuevoContacto.ip_address != ""

    if (agregado === true) {
        contactos.push(nuevoContacto)
        return true
    } else {
        return false
    }

}

export { agregarContacto }