import { Test, TestingModule } from '@nestjs/testing';
import { KlineService } from './kline.service';

describe('KlineService', () => {
  let service: KlineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KlineService],
    }).compile();

    service = module.get<KlineService>(KlineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
