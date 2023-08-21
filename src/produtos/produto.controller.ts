import { Body, Controller, Get, Post, Redirect, Render } from "@nestjs/common";
import { ProdutosRepository } from "./produto.repository";
import { ProdutoDto } from "./dto/produtos.dto";

@Controller('produtos')
export class ProdutosController{
    constructor(public produtoRepository: ProdutosRepository){}

    @Get('/listar')
    async listaProdutos(){
        this.produtoRepository.listarProdutos()
    }

    @Get('/novo')
    @Render('form')

    @Post('/salvar')
    @Redirect('produtos/listar')
    async Post(@Body() dadosProdutos:ProdutoDto){
        this.produtoRepository.salvarProduto(dadosProdutos)
    }
}