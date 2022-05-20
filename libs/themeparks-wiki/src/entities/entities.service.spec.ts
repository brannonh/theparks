import { Test, TestingModule } from '@nestjs/testing';
import { EntitiesService } from './entities.service';

describe('EntitiesService', () => {
  let service: EntitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntitiesService],
    }).compile();

    service = module.get<EntitiesService>(EntitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of destinations', async () => {
    const destinations = await service.getDestinations();
    expect(destinations).toBeDefined();
    expect(Array.isArray(destinations)).toBeTruthy();
  });
});
