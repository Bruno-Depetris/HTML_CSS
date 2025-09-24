export default class VwRecibosPendiente {
  constructor(obj = {}) {
        this.ReciboId = obj?.ReciboId ?? null;
        this.FechaEmision = obj?.FechaEmision ?? null;
        this.FechaPago = obj?.FechaPago ?? null;
        this.Total = obj?.Total ?? null;
        this.Tipo = obj?.Tipo ?? null;
        this.PagadoPor = obj?.PagadoPor ?? null;
        this.ContratoId = obj?.ContratoId ?? null;
        this.InquilinoNombre = obj?.InquilinoNombre ?? null;
        this.PropietarioNombre = obj?.PropietarioNombre ?? null;
  }
}
