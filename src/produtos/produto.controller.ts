import { Body, Controller, Get, Post, Query, Redirect, Render } from "@nestjs/common";
import { ProdutosRepository } from "./produto.repository";
import { ProdutoDto } from "./dto/produtos.dto";

@Controller('produtos')
export class ProdutosController{
    constructor(public produtoRepository: ProdutosRepository){}

    @Get('/listar')
    @Render('listar')
    public listaProdutos(){
        console.log({produtos: this.produtoRepository.listarProdutos()})
        return {produtos: this.produtoRepository.listarProdutos()}
    }

    @Get('/novo')
    @Render('form')
    public formularioProduto(){
        return;
    }

    @Post('/salvar')
    @Redirect('/produtos/listar')
    public Post(@Body() dadosProdutos:ProdutoDto){
        this.produtoRepository.salvarProduto(dadosProdutos)
    }

    @Get('/alternar-status')
    @Redirect('/produtos/listar')
    public alternarStatus(@Query('id') idProduto:string){
        this.produtoRepository.alternarStatus(idProduto)
        return
    }
}