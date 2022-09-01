import { PrismaService } from './../../database/PrismaService';
import { Injectable } from '@nestjs/common';
import { AtendimentosDTO } from './atendimentos.dto';

@Injectable()
export class AtendimentosService {
  constructor(private prisma: PrismaService) {}

  async create(data: AtendimentosDTO) {
    const atendimentoExists = await this.prisma.atendimento.findFirst({
      where: {
        codAtendimento: data.codAtendimento,
      },
    });
    if (atendimentoExists) {
      throw new Error('Atendimento já existe');
    }
    const atendimentos = await this.prisma.atendimento.create({
      data,
    });
    return atendimentos;
  }
  async findAll() {
    return this.prisma.atendimento.findMany();
  }

  async update(id: string, data: AtendimentosDTO) {
    const atendimentoExists = await this.prisma.atendimento.findUnique({
      where: {
        id,
      },
    });

    if (!atendimentoExists) {
      throw new Error('Atendimento não existe!');
    }
    return await this.prisma.atendimento.update({
      data,
      where: {
        id,
      },
    });
  }
  async delete(id: string) {
    const atendimentoExists = await this.prisma.atendimento.findUnique({
      where: {
        id,
      },
    });

    if (!atendimentoExists) {
      throw new Error('Atendimento não existe!');
    }
    return await this.prisma.atendimento.delete({
      where: {
        id,
      },
    });
  }
}
