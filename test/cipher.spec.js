// [Español]
// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
//
// [Português]
// Importamos o objeto `cipher`, que contém os métodos `encode` e `decode`

import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    it('should return "bcdefghijklmnopqrs" for "ABCDEFGHIJKLMNOPQR" with offset 33', () => {
      expect(cipher.encode('ABCDEFGHIJKLMNOPQR',33)).toBe('bcdefghijklmnopqrs');
    });

    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas y caracteres no alfabéticos descomenta el test a
    // continuación.
   
    it('should return "ÂmAĒAALAAANB" for "¡Los niños suman + y restan -!" with offset 33', () => {
      expect(cipher.encode('¡Los niños suman + y restan -!',33)).toBe('ÂmAĒAALAAANB');
      });

  });

  describe('cipher.decode', () => {

    it('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.decode()).toThrow(TypeError);
      expect(() => cipher.decode(0)).toThrow(TypeError);
      expect(() => cipher.decode(null, [])).toThrow(TypeError);
      expect(() => cipher.decode(0, 0)).toThrow(TypeError);
    });

    it('should return "*+,-./012345678" for "KLMNOPQRSTUVWXY" with offset 33', () => {
      expect(cipher.decode('KLMNOPQRSTUVWXY',33)).toBe('*+,-./012345678');
    });

    //
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas y caracteres no alfabéticos descomenta el test a
    // continuación.
  
    it('should return "niño+*-" for "ĒLKN" with offset 33', () => {
    expect(cipher.decode('ĒLKN',33)).toBe('niño+*-');
    });

  });

});
