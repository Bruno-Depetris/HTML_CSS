export default class Provincia {
  constructor(obj = {}) {
        this.ProvinciaId = obj?.ProvinciaId ?? null;
        this.Nombre = obj?.Nombre ?? null;
        this.PaisId = obj?.PaisId ?? null;
  }
}
