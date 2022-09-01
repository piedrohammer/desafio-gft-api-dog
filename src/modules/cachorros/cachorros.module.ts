import { PrismaService } from './../../database/PrismaService';
import { Module } from '@nestjs/common';
import { CachorrosService } from './cachorros.service';
import { CachorrosController } from './cachorros.controller';

@Module({
  controllers: [CachorrosController],
  providers: [CachorrosService, PrismaService],
})
export class CachorrosModule {}
