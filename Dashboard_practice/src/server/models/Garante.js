export default class Garante {
  constructor(obj = {}) {
        this.GaranteId = obj?.GaranteId ?? null;
        this.Nombre = obj?.Nombre ?? null;
        this.Telefono = obj?.Telefono ?? null;
        this.Email = obj?.Email ?? null;
  }
}
