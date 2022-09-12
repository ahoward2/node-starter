import { Test, TestingModule } from '@nestjs/testing';
import { AppGetterController } from './app-getter.controller';

describe('AppGetterController', () => {
  let controller: AppGetterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppGetterController],
    }).compile();

    controller = module.get<AppGetterController>(AppGetterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
