import { Test, TestingModule } from '@nestjs/testing';
import { CachorrosController } from './cachorros.controller';
import { CachorrosService } from './cachorros.service';

describe('CachorrosController', () => {
  let controller: CachorrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CachorrosController],
      providers: [CachorrosService],
    }).compile();

    controller = module.get<CachorrosController>(CachorrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
