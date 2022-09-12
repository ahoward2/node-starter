import { Test, TestingModule } from '@nestjs/testing';
import { AppGetterService } from './app-getter.service';

describe('AppGetterService', () => {
  let service: AppGetterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppGetterService],
    }).compile();

    service = module.get<AppGetterService>(AppGetterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
