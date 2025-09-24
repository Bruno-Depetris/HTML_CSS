export default class Comisione {
  constructor(obj = {}) {
        this.ComisionId = obj?.ComisionId ?? null;
        this.ContratoId = obj?.ContratoId ?? null;
        this.PropietarioId = obj?.PropietarioId ?? null;
        this.Tipo = obj?.Tipo ?? null;
        this.Valor = obj?.Valor ?? null;
  }
}
