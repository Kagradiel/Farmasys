import Categoria from "../categoria/Categoria";

export default interface Produto{
    id: number;
    nomeDoProduto: string;
    price: number;
    categoria: Categoria;
}