import { createCrud } from "./crudFactory.js";
import { request } from "./httpClient.js";

export const ActividadLog = createCrud("actividadlog");
export const Ciudades = createCrud("ciudade");
export const Comisiones = createCrud("comisione");
export const Contratos = createCrud("contrato");
export const ContratoGarantes = createCrud("contratogarante");
export const ContratoIncrementos = createCrud("contratoincremento");
export const Documentos = createCrud("documento");
export const Garantes = createCrud("garante");
export const Gastos = createCrud("gasto");
export const Impuestos = createCrud("impuesto");
export const IndicesICL = createCrud("indicesicl");
export const Inquilinos = createCrud("inquilino");
export const Notificaciones = createCrud("notificacione");
export const Paises = createCrud("paise");
export const Propiedades = createCrud("propiedade");
export const PropiedadesImpuestos = createCrud("propiedadesimpuesto");
export const Propietarios = createCrud("propietario");
export const PropietariosPropiedades = createCrud("propietariospropiedade");
export const Provincias = createCrud("provincia");
export const Recibos = createCrud("recibo");
export const ReciboItems = createCrud("reciboitem");
export const Servicios = createCrud("servicio");
export const Usuarios = createCrud("usuario");

export const ContratosActivos = {
  getAll: () => request("/vwcontratosactivo")
};

export const RecibosPendientes = {
  getAll: () => request("/vwrecibospendiente")
};
