import { Contacto, contactos } from "../src/contactos";

const findByEmail = (email: string) => {
    if (email === "") {
        return contactos
    }
    else { 
        return contactos.filter(contacto => contacto.email.includes(email))
    }


};
export { findByEmail };