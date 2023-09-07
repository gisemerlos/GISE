import { Contacto, contactos } from "../src/contactos";

const findOneByEmail = (email: string): Contacto => {
    return contactos.filter((contacto) => contacto.email == email)[0];


};
export {findOneByEmail};