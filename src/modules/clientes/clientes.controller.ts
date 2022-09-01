import { ClientesDTO } from './clientes.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  async create(@Body() data: ClientesDTO) {
    return this.clientesService.create(data);
  }

  @Get()
  async findAll() {
    return this.clientesService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ClientesDTO) {
    return this.clientesService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.clientesService.delete(id);
  }
}
