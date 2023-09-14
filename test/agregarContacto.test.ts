
import { Contacto } from "../src/contactos";
import { agregarContacto } from "../src/agregarContacto";

describe("agregarContacto", () => {
    test("Como usuario, deseo poder agregar nuevos contactos para actualizar mi lista.", () => {
    const nuevoContacto: Contacto = {
    id: 11,
    first_name: "Gise",
    last_name: "Merlos",
    email: "gisemerlosporsiempre@gmail.com",
    gender: "female",
    ip_address: "198.76.1.0"

    }
    const agregado = agregarContacto(nuevoContacto) 
    expect(agregado).toBe(true);
     
    });
})

