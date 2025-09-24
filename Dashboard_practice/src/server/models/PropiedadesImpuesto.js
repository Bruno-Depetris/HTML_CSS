export default class PropiedadesImpuesto {
  constructor(obj = {}) {
        this.PropiedadImpuestoId = obj?.PropiedadImpuestoId ?? null;
        this.PropiedadId = obj?.PropiedadId ?? null;
        this.ImpuestoId = obj?.ImpuestoId ?? null;
        this.NumeroCuenta = obj?.NumeroCuenta ?? null;
        this.ProveedorUrl = obj?.ProveedorUrl ?? null;
        this.UltimoPeriodoDescargado = obj?.UltimoPeriodoDescargado ?? null;
  }
}
