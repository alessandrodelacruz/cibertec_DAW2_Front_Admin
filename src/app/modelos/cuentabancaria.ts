import { Moneda } from "./moneda";
import { CuentaUsuario } from './cuentausuario';

// export interface Tipodecambio {
  export class Cuentabancaria {

  id?: number;
  id_cliente?: CuentaUsuario;
  saldo?: number;
  id_moneda?: Moneda;
  numero_cuenta?: string;
  cci?: string;
  estado?: number;
  
}
