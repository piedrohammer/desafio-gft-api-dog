import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './modules/clientes/clientes.module';
import { CachorrosModule } from './modules/cachorros/cachorros.module';
import { VetsModule } from './modules/vets/vets.module';
import { AtendimentosModule } from './modules/atendimentos/atendimentos.module';
import { VacinasModule } from './modules/vacinas/vacinas.module';

@Module({
  imports: [
    ClientesModule,
    CachorrosModule,
    VetsModule,
    AtendimentosModule,
    VacinasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
