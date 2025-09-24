export default class ReciboItem {
  constructor(obj = {}) {
        this.ReciboItemId = obj?.ReciboItemId ?? null;
        this.ReciboId = obj?.ReciboId ?? null;
        this.Descripcion = obj?.Descripcion ?? null;
        this.Monto = obj?.Monto ?? null;
        this.ImpuestoId = obj?.ImpuestoId ?? null;
        this.TipoItem = obj?.TipoItem ?? null;
  }
}
