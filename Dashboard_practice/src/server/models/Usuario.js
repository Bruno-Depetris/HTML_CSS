export default class Usuario {
  constructor(obj = {}) {
        this.UsuarioId = obj?.UsuarioId ?? null;
        this.Nombre = obj?.Nombre ?? null;
        this.Email = obj?.Email ?? null;
        this.Telefono = obj?.Telefono ?? null;
        this.Rol = obj?.Rol ?? null;
  }
}
