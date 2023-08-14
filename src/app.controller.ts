import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get("/")
  @Render("index")
  hello(@Query('nome') nome = 'Visitante'){
    const context = {
      nome,
      qtd_letras: nome.length
    }
    return context
  }
}
