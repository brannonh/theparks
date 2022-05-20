export class Endpoints {
  private static readonly baseUrl: string = 'https://api.themeparks.wiki/v1';

  public static destinations() {
    return `${Endpoints.baseUrl}/destinations`;
  }

  public static entity(id: string) {
    return `${Endpoints.baseUrl}/entity/${id}`;
  }

  public static entityChildren(id: string) {
    return `${Endpoints.baseUrl}/entity/${id}/children`;
  }

  public static entityLiveData(id: string) {
    return `${Endpoints.baseUrl}/entity/${id}/live`;
  }

  public static entityScheduleNext30Days(id: string) {
    return `${Endpoints.baseUrl}/entity/${id}/schedule`;
  }

  public static entityScheduleMonth(id: string, year?: string, month?: string) {
    const y = year ? year : new Date().getFullYear().toString();
    const m = month ? month.padStart(2, '0') : new Date().getMonth().toString().padStart(2, '0');
    return `${Endpoints.baseUrl}/entity/${id}/schedule/${y}/${m}`;
  }
}

export const endpointsFactory = {
  provide: 'ENDPOINTS',
  useFactory: () => Endpoints,
}
