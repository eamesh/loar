import { Test, TestingModule } from '@nestjs/testing';
import { IpoService } from './ipo.service';

describe('IpoService', () => {
  let service: IpoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IpoService],
    }).compile();

    service = module.get<IpoService>(IpoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
