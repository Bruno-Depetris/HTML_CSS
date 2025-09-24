export default class Notificacione {
  constructor(obj = {}) {
        this.NotificacionId = obj?.NotificacionId ?? null;
        this.Tipo = obj?.Tipo ?? null;
        this.EntidadTipo = obj?.EntidadTipo ?? null;
        this.EntidadId = obj?.EntidadId ?? null;
        this.EnviadoA = obj?.EnviadoA ?? null;
        this.FechaEnvio = obj?.FechaEnvio ?? null;
        this.Leido = obj?.Leido ?? null;
  }
}
