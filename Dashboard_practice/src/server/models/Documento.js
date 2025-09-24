export default class Documento {
  constructor(obj = {}) {
        this.DocumentoId = obj?.DocumentoId ?? null;
        this.PropiedadId = obj?.PropiedadId ?? null;
        this.ContratoId = obj?.ContratoId ?? null;
        this.Tipo = obj?.Tipo ?? null;
        this.Url = obj?.Url ?? null;
  }
}
