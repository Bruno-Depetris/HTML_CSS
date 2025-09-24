export default class PropietariosPropiedade {
  constructor(obj = {}) {
        this.PropietarioPropiedadId = obj?.PropietarioPropiedadId ?? null;
        this.PropietarioId = obj?.PropietarioId ?? null;
        this.PropiedadId = obj?.PropiedadId ?? null;
        this.PorcentajeParticipacion = obj?.PorcentajeParticipacion ?? null;
  }
}
