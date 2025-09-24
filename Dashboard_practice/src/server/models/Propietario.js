export default class Propietario {
  constructor(obj = {}) {
        this.PropietarioId = obj?.PropietarioId ?? null;
        this.Nombre = obj?.Nombre ?? null;
        this.Email = obj?.Email ?? null;
        this.Telefono = obj?.Telefono ?? null;
        this.Calle = obj?.Calle ?? null;
        this.Numero = obj?.Numero ?? null;
        this.Piso = obj?.Piso ?? null;
        this.Depto = obj?.Depto ?? null;
        this.Barrio = obj?.Barrio ?? null;
        this.CiudadId = obj?.CiudadId ?? null;
  }
}
