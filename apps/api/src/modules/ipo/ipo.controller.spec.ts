import { Test, TestingModule } from '@nestjs/testing';
import { IpoController } from './ipo.controller';

describe('IpoController', () => {
  let controller: IpoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IpoController],
    }).compile();

    controller = module.get<IpoController>(IpoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
