import { Test, TestingModule } from '@nestjs/testing';
import { GuguService } from './gugu.service';

describe('GuguService', () => {
  let service: GuguService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuguService],
    }).compile();

    service = module.get<GuguService>(GuguService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
