import {ProductoPrueba} from "./ProductoPrueba"


export interface ProductoRespuestaPrueba {
    products: ProductoPrueba[];
    total: number;
    skip: number;
    limit: number;

}