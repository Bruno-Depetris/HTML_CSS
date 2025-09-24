export default class Recibo {
  constructor(obj = {}) {
        this.ReciboId = obj?.ReciboId ?? null;
        this.ContratoId = obj?.ContratoId ?? null;
        this.PropiedadId = obj?.PropiedadId ?? null;
        this.FechaEmision = obj?.FechaEmision ?? null;
        this.FechaPago = obj?.FechaPago ?? null;
        this.Total = obj?.Total ?? null;
        this.Tipo = obj?.Tipo ?? null;
        this.PdfUrl = obj?.PdfUrl ?? null;
        this.PagadoPor = obj?.PagadoPor ?? null;
  }
}
