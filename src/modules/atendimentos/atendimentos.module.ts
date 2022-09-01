import { PrismaService } from './../../database/PrismaService';
import { Module } from '@nestjs/common';
import { AtendimentosService } from './atendimentos.service';
import { AtendimentosController } from './atendimentos.controller';

@Module({
  controllers: [AtendimentosController],
  providers: [AtendimentosService, PrismaService],
})
export class AtendimentosModule {}
