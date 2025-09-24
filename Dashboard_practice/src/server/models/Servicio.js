export default class Servicio {
  constructor(obj = {}) {
        this.ServicioId = obj?.ServicioId ?? null;
        this.PropiedadId = obj?.PropiedadId ?? null;
        this.Tipo = obj?.Tipo ?? null;
        this.NumeroCuenta = obj?.NumeroCuenta ?? null;
        this.ProveedorUrl = obj?.ProveedorUrl ?? null;
  }
}
