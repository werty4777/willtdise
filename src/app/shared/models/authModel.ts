import {Rolmodel} from './rolmodel';

export interface AuthModel {
  email: string;
  password?: string;
  name?: string;
  lastName?: string;
  rol?:number;
  phone?:string;
  sex?:sexo;
  photo?:string;
}
export enum sexo {
  masculino='M',
  femenino='F'
}
