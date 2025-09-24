export default class VwContratosActivo {
  constructor(obj = {}) {
        this.ContratoId = obj?.ContratoId ?? null;
        this.FechaInicio = obj?.FechaInicio ?? null;
        this.FechaFin = obj?.FechaFin ?? null;
        this.Estado = obj?.Estado ?? null;
        this.PropietarioNombre = obj?.PropietarioNombre ?? null;
        this.InquilinoNombre = obj?.InquilinoNombre ?? null;
        this.Calle = obj?.Calle ?? null;
        this.Numero = obj?.Numero ?? null;
        this.Piso = obj?.Piso ?? null;
        this.Depto = obj?.Depto ?? null;
        this.Barrio = obj?.Barrio ?? null;
        this.PropiedadEstado = obj?.PropiedadEstado ?? null;
  }
}
