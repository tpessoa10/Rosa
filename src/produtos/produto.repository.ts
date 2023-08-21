import { Injectable } from "@nestjs/common";
import { ProdutosController } from "./produto.controller";
import { ulid } from "ulidx";
import { ProdutoDto } from "./dto/produtos.dto";

@Injectable()
export class ProdutosRepository{
    public produtos = []

    public salvarProduto(produto:ProdutoDto){
        const novoProduto = {
            ...produto,
            id: ulid()
        }
        this.produtos.push(novoProduto)
        return novoProduto
    }

    public listarProdutos(){
        return this.produtos
    }
}