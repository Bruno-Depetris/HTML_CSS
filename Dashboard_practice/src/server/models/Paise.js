export default class Paise {
  constructor(obj = {}) {
        this.PaisId = obj?.PaisId ?? null;
        this.Nombre = obj?.Nombre ?? null;
  }
}
