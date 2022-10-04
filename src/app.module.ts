import { SeriesController } from './series/serie.controller';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SeriesService } from './series/serie.provider';

@Module({
  imports: [],
  controllers: [SeriesController],
  providers: [AppService, SeriesService],
})
export class AppModule {}
