import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AtendimentosDTO } from './atendimentos.dto';
import { AtendimentosService } from './atendimentos.service';

@Controller('atendimentos')
export class AtendimentosController {
  constructor(private readonly atendimentosService: AtendimentosService) {}

  @Post()
  async create(@Body() data: AtendimentosDTO) {
    return this.atendimentosService.create(data);
  }

  @Get()
  async findAll() {
    return this.atendimentosService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: AtendimentosDTO) {
    return this.atendimentosService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.atendimentosService.delete(id);
  }
}
