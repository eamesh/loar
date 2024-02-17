import { Test, TestingModule } from '@nestjs/testing';
import { KlineController } from './kline.controller';

describe('KlineController', () => {
  let controller: KlineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KlineController],
    }).compile();

    controller = module.get<KlineController>(KlineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
