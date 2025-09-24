export default class Impuesto {
  constructor(obj = {}) {
        this.ImpuestoId = obj?.ImpuestoId ?? null;
        this.Nombre = obj?.Nombre ?? null;
        this.Codigo = obj?.Codigo ?? null;
        this.Periodicidad = obj?.Periodicidad ?? null;
  }
}
