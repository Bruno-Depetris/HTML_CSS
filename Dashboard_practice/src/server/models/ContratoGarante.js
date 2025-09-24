export default class ContratoGarante {
  constructor(obj = {}) {
        this.ContratoGaranteId = obj?.ContratoGaranteId ?? null;
        this.ContratoId = obj?.ContratoId ?? null;
        this.GaranteId = obj?.GaranteId ?? null;
        this.TipoRelacion = obj?.TipoRelacion ?? null;
  }
}
