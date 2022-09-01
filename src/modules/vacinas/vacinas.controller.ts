import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VacinasDTO } from './vacinas.dto';
import { VacinasService } from './vacinas.service';

@Controller('vacinas')
export class VacinasController {
  constructor(private readonly vacinasService: VacinasService) {}

  @Post()
  async create(@Body() data: VacinasDTO) {
    return this.vacinasService.create(data);
  }

  @Get()
  async findAll() {
    return this.vacinasService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: VacinasDTO) {
    return this.vacinasService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.vacinasService.delete(id);
  }
}
