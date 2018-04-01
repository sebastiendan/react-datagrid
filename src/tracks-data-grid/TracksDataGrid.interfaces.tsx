export default interface Cell {

  id: number;
  value: string | number;

}

export interface Column {

  id: string;
  name: string;
  type?: string;

}

export interface Row {

  id: number;

}