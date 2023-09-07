
import { contactos } from "../src/contactos";

const eliminarContacto = (eliminarContactoPorId: number) => {
    let eliminado = false;
    contactos.filter((contacto) => {
        if (contacto.id == eliminarContactoPorId) {
            eliminado = true;
            return false

        }
        else {
            return true
        }
    });
    return eliminado

}

export { eliminarContacto }