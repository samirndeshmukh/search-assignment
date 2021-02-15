import { Item } from "./Item";

export class Result {
    constructor(public keyword: string,
         public pageNumber: number, 
         public pageSize: number,
         public totalRecords: number, 
         public items: Item[], 
         public empty: boolean) { }

}