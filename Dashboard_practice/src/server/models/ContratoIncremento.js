export default class ContratoIncremento {
  constructor(obj = {}) {
        this.ContratoIncrementoId = obj?.ContratoIncrementoId ?? null;
        this.ContratoId = obj?.ContratoId ?? null;
        this.FechaAplicacion = obj?.FechaAplicacion ?? null;
        this.Porcentaje = obj?.Porcentaje ?? null;
        this.ValorResultante = obj?.ValorResultante ?? null;
        this.IclId = obj?.IclId ?? null;
  }
}
