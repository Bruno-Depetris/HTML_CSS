export default class Contrato {
  constructor(obj = {}) {
        this.ContratoId = obj?.ContratoId ?? null;
        this.PropiedadId = obj?.PropiedadId ?? null;
        this.PropietarioId = obj?.PropietarioId ?? null;
        this.InquilinoId = obj?.InquilinoId ?? null;
        this.FechaInicio = obj?.FechaInicio ?? null;
        this.FechaFin = obj?.FechaFin ?? null;
        this.Estado = obj?.Estado ?? null;
        this.ValorInicial = obj?.ValorInicial ?? null;
        this.PeriodicidadIncremento = obj?.PeriodicidadIncremento ?? null;
        this.NotificarDiasAntes = obj?.NotificarDiasAntes ?? null;
        this.Notas = obj?.Notas ?? null;
  }
}
