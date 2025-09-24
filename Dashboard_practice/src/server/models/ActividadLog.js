export default class ActividadLog {
  constructor(obj = {}) {
        this.ActividadId = obj?.ActividadId ?? null;
        this.UsuarioId = obj?.UsuarioId ?? null;
        this.Accion = obj?.Accion ?? null;
        this.EntidadTipo = obj?.EntidadTipo ?? null;
        this.EntidadId = obj?.EntidadId ?? null;
        this.Fecha = obj?.Fecha ?? null;
  }
}
