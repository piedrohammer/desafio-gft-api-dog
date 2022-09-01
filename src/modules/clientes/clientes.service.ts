import { ClientesDTO } from './clientes.dto';
import { PrismaService } from './../../database/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}
  async create(data: ClientesDTO) {
    const clientesExists = await this.prisma.client.findFirst({
      where: {
        username: data.username,
      },
    });

    if (clientesExists) {
      throw new Error('Cliente já existe!');
    }

    const clientes = await this.prisma.client.create({
      data,
    });

    return clientes;
  }
  async findAll() {
    return this.prisma.client.findMany();
  }

  async update(id: string, data: ClientesDTO) {
    const clientesExists = await this.prisma.client.findUnique({
      where: {
        id,
      },
    });

    if (!clientesExists) {
      throw new Error('Cliente não existe!');
    }
    return await this.prisma.client.update({
      data,
      where: {
        id,
      },
    });
  }
  async delete(id: string) {
    const clientesExists = await this.prisma.client.findUnique({
      where: {
        id,
      },
    });

    if (!clientesExists) {
      throw new Error('Cliente não existe!');
    }
    return await this.prisma.client.delete({
      where: {
        id,
      },
    });
  }
}
