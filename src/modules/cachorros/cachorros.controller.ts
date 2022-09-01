import { CachorrosDTO } from './cachorros.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CachorrosService } from './cachorros.service';

@Controller('cachorros')
export class CachorrosController {
  constructor(private readonly cachorrosService: CachorrosService) {}

  @Post()
  async create(@Body() data: CachorrosDTO) {
    return this.cachorrosService.create(data);
  }

  @Get()
  async findAll() {
    return this.cachorrosService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CachorrosDTO) {
    return this.cachorrosService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.cachorrosService.delete(id);
  }
}
