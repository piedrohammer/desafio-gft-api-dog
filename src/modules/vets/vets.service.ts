import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { VetsDTO } from './vets.dto';

@Injectable()
export class VetsService {
  constructor(private prisma: PrismaService) {}
  async create(data: VetsDTO) {
    const vetsExists = await this.prisma.client.findFirst({
      where: {
        username: data.username,
      },
    });

    if (vetsExists) {
      throw new Error('Médico Veterinário já existe!');
    }

    const vets = await this.prisma.medicoVet.create({
      data,
    });

    return vets;
  }
  async findAll() {
    return this.prisma.medicoVet.findMany();
  }

  async update(id: string, data: VetsDTO) {
    const vetsExists = await this.prisma.medicoVet.findUnique({
      where: {
        id,
      },
    });

    if (!vetsExists) {
      throw new Error('Médico Veterinário não existe!');
    }
    return await this.prisma.medicoVet.update({
      data,
      where: {
        id,
      },
    });
  }
  async delete(id: string) {
    const vetsExists = await this.prisma.medicoVet.findUnique({
      where: {
        id,
      },
    });

    if (!vetsExists) {
      throw new Error('Médico Veterinário não existe!');
    }
    return await this.prisma.medicoVet.delete({
      where: {
        id,
      },
    });
  }
}
