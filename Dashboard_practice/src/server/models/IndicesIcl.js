export default class IndicesIcl {
  constructor(obj = {}) {
        this.IclId = obj?.IclId ?? null;
        this.FechaInicio = obj?.FechaInicio ?? null;
        this.FechaFin = obj?.FechaFin ?? null;
        this.IndiceValor = obj?.IndiceValor ?? null;
        this.FuenteUrl = obj?.FuenteUrl ?? null;
  }
}
