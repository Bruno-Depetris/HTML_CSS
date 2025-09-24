export default class Ciudade {
  constructor(obj = {}) {
        this.CiudadId = obj?.CiudadId ?? null;
        this.Nombre = obj?.Nombre ?? null;
        this.ProvinciaId = obj?.ProvinciaId ?? null;
  }
}
