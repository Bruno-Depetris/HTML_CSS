export default class Inquilino {
  constructor(obj = {}) {
        this.InquilinoId = obj?.InquilinoId ?? null;
        this.Nombre = obj?.Nombre ?? null;
        this.Email = obj?.Email ?? null;
        this.Telefono = obj?.Telefono ?? null;
        this.Documento = obj?.Documento ?? null;
  }
}
