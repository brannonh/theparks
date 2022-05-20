import { Endpoints } from './endpoints';

describe('Endpoints', () => {
  it('should be defined', () => {
    expect(new Endpoints()).toBeDefined();
  });

  it('should return proper schedule URL for current month', () => {
    const y = new Date().getFullYear().toString();
    const m = new Date().getMonth().toString().padStart(2, '0');
    expect(Endpoints.entityScheduleMonth('test')).toEqual(`https://api.themeparks.wiki/v1/entity/test/schedule/${y}/${m}`);
  });

  it ('should return proper schedule URL for single-digit month', () => {
    expect(Endpoints.entityScheduleMonth('test', '2022', '7')).toEqual(`https://api.themeparks.wiki/v1/entity/test/schedule/2022/07`);
  });
});
