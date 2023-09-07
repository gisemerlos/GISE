
import { Contacto } from "../src/contactos";

describe("agregarContacto"), () => {
    test("Como usuario, deseo poder agregar nuevos contactos para actualizar mi lista.", () => {
      const contactos: Contacto[] = agregarNuevoContacto("");
      expect(contactos).toHaveLength(11);
    });
}

