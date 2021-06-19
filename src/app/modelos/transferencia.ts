import { Cuentabancaria } from './cuentabancaria';
import { Moneda } from './moneda';
// export interface Tipodecambio {
  export class Transferencia {

  id?: number;
  idcuentaorigen?: Cuentabancaria;
  idcuentadestino?: Cuentabancaria;
  idmoneda?: Moneda;
  monto?: number;
  cuentadestino?: number;
  
}
