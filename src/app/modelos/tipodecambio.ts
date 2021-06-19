import { Moneda } from './moneda';
// export interface Tipodecambio {
  export class Tipodecambio {

  // id: number,
  // moneda_origen: number,
  // moneda_destino: number,
  // tipo_cambio: number,
  // fecha: Date

  id?: number;
  moneda_origen?: Moneda;
  moneda_destino?: Moneda;
  tipo_cambio?: number;
  fecha?: Date;
  
}
