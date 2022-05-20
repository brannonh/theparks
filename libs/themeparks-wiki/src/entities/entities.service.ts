import { Injectable } from '@nestjs/common';
import got from 'got';
import { Endpoints } from '../endpoints';

@Injectable()
export class EntitiesService {
  async getDestinations() {
    return got.get(Endpoints.destinations()).json();
  }

  async get(id: string) {
    return got.get(Endpoints.entity(id)).json();
  }

  async getChildren(id: string) {
    return got.get(Endpoints.entityChildren(id)).json();
  }

  async getLiveData(id: string) {
    return got.get(Endpoints.entityLiveData(id)).json();
  }

  async getScheduleNext30Days(id: string) {
    return got.get(Endpoints.entityScheduleNext30Days(id)).json();
  }

  async getScheduleMonth(id: string, year?: number | string, month?: number | string) {
    return got.get(Endpoints.entityScheduleMonth(id, year.toString(), month.toString())).json();
  }
}
