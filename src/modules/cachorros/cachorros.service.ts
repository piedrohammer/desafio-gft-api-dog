import { CachorrosDTO } from './cachorros.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './../../database/PrismaService';

@Injectable()
export class CachorrosService {
  constructor(private prisma: PrismaService) {}

  async create(data: CachorrosDTO) {
    const cachorrosExists = await this.prisma.cachorro.findFirst({
      where: {
        carteirinha: data.carteirinha,
      },
    });
    if (cachorrosExists) {
      throw new Error('Cachorros já existe');
    }
    const cachorros = await this.prisma.cachorro.create({
      data,
    });
    return cachorros;
  }
  async findAll() {
    return this.prisma.cachorro.findMany();
  }

  async update(id: string, data: CachorrosDTO) {
    const cachorrosExists = await this.prisma.cachorro.findUnique({
      where: {
        id,
      },
    });

    if (!cachorrosExists) {
      throw new Error('Cachorro não existe!');
    }
    return await this.prisma.cachorro.update({
      data,
      where: {
        id,
      },
    });
  }
  async delete(id: string) {
    const cachorroExists = await this.prisma.cachorro.findUnique({
      where: {
        id,
      },
    });

    if (!cachorroExists) {
      throw new Error('Cachorro não existe!');
    }
    return await this.prisma.cachorro.delete({
      where: {
        id,
      },
    });
  }
}
