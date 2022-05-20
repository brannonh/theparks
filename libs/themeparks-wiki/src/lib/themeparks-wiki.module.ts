import { Module } from '@nestjs/common';
import { EntitiesModule } from '../entities/entities.module';

@Module({
  controllers: [],
  providers: [EntitiesModule],
  exports: [EntitiesModule],
})
export class ThemeparksWikiModule {}
