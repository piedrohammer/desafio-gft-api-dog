import { Test, TestingModule } from '@nestjs/testing';
import { CachorrosService } from './cachorros.service';

describe('CachorrosService', () => {
  let service: CachorrosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CachorrosService],
    }).compile();

    service = module.get<CachorrosService>(CachorrosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
