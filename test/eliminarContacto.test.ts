import { eliminarContacto} from "../src/eliminarContacto";

describe("eliminarContacto", () => {
    test("deberia eliminar contactos buscando su id", () => {
      const eliminado: boolean = eliminarContacto(2);
      expect(eliminado).toBe(true);
      
    });

    test("no deberia eliminar contactos buscando su id", () => {
        const eliminado: boolean = eliminarContacto(29);
        expect(eliminado).toBe(false);
        
      });
  });