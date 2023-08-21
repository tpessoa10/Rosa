import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produto.module';

@Module({
  imports: [ProdutosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
