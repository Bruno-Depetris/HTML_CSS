export default class Propiedade {
  constructor(obj = {}) {
        this.PropiedadId = obj?.PropiedadId ?? null;
        this.Calle = obj?.Calle ?? null;
        this.Numero = obj?.Numero ?? null;
        this.Piso = obj?.Piso ?? null;
        this.Depto = obj?.Depto ?? null;
        this.Barrio = obj?.Barrio ?? null;
        this.CiudadId = obj?.CiudadId ?? null;
        this.Estado = obj?.Estado ?? null;
  }
}
