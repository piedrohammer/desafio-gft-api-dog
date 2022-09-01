import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { VacinasDTO } from './vacinas.dto';

@Injectable()
export class VacinasService {
  constructor(private prisma: PrismaService) {}
  async create(data: VacinasDTO) {
    const codcartaoExists = await this.prisma.cartaoVacina.findFirst({
      where: {
        codcartao: data.codcartao,
      },
    });

    if (codcartaoExists) {
      throw new Error('Cartão de Vacina já existe!');
    }

    const vacinas = await this.prisma.cartaoVacina.create({
      data,
    });

    return vacinas;
  }
  async findAll() {
    return this.prisma.cartaoVacina.findMany();
  }

  async update(codcartao: string, data: VacinasDTO) {
    const codcartaoExists = await this.prisma.cartaoVacina.findUnique({
      where: {
        codcartao,
      },
    });

    if (!codcartaoExists) {
      throw new Error('Cartão de Vacinas não existe!');
    }
    return await this.prisma.cartaoVacina.update({
      data,
      where: {
        codcartao,
      },
    });
  }
  async delete(id: string) {
    const cartaoExists = await this.prisma.cartaoVacina.findUnique({
      where: {
        id,
      },
    });

    if (!cartaoExists) {
      throw new Error('Cartão de Vacinas não existe!');
    }
    return await this.prisma.cartaoVacina.delete({
      where: {
        id,
      },
    });
  }
}
