import { Injectable } from "@nestjs/common";
import { ProdutosController } from "./produto.controller";
import { ulid } from "ulidx";

@Injectable()
export class ProdutosRepository{
    private produtos = []

    async salvarProduto(produto){
        const novoProduto = {
            ...produto,
            id: ulid()
        }
        this.produtos.push(novoProduto)
        return novoProduto
    }

    async listarProdutos(){
        return this.produtos
    }
}