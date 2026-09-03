import { Produto } from "../produtos/models/produto";

export interface ItemCarrinhoInterface {

    produto: Produto;
    quantidade: number|null;
}
