import { Injectable } from "@nestjs/common";
import { ProdutosController } from "./produto.controller";
import { ulid } from "ulidx";
import { ProdutoDto, ProdutoStatus } from "./dto/produtos.dto";

@Injectable()
export class ProdutosRepository{
    public produtos = []

    public salvarProduto(produto:ProdutoDto){
        const novoProduto = {
            ...produto,
            id: ulid(),
            status: ProdutoStatus.DISPONIVEL
        }
        this.produtos.push(novoProduto)
        return novoProduto
    }

    public listarProdutos(){
        return this.produtos
    }

    public procurarPorId(id:string){
        const produto = this.produtos.find(p => p.id === id)
        return produto
    }

    public alternarStatus(idProduto:string): void{
        const produto = this.procurarPorId(idProduto)
         if(produto.status === 'Disponivel'){
             produto.status = 'Indisponivel'
         } else if (produto.status === 'Indisponivel'){
             produto.status = 'Disponivel'
         }
        return produto
    }

    public remove(id:string){
        const produto = this.produtos.findIndex(p => p.id === id)
        if(produto === -1) return
        this.produtos.splice(produto, 1)
    }
}