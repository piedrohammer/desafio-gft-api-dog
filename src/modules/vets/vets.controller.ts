import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VetsDTO } from './vets.dto';
import { VetsService } from './vets.service';

@Controller('vets')
export class VetsController {
  constructor(private readonly vetsService: VetsService) {}

  @Post()
  async create(@Body() data: VetsDTO) {
    return this.vetsService.create(data);
  }

  @Get()
  async findAll() {
    return this.vetsService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: VetsDTO) {
    return this.vetsService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.vetsService.delete(id);
  }
}
