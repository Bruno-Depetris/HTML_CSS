export default class Gasto {
  constructor(obj = {}) {
        this.GastoId = obj?.GastoId ?? null;
        this.PropiedadId = obj?.PropiedadId ?? null;
        this.ContratoId = obj?.ContratoId ?? null;
        this.Fecha = obj?.Fecha ?? null;
        this.Monto = obj?.Monto ?? null;
        this.Descripcion = obj?.Descripcion ?? null;
        this.PagadoPor = obj?.PagadoPor ?? null;
        this.ComprobanteUrl = obj?.ComprobanteUrl ?? null;
  }
}
