import { SeriesService } from './serie.provider';
import { Controller, Get, Param } from '@nestjs/common';
import { Serie } from './series.model';

@Controller('series')
export class SeriesController {

  constructor(private seriesService: SeriesService) 
  {}
  @Get()
  async findAll(): Promise<Serie[]> {
    return this.seriesService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: String): Promise<Serie> {
    return this.seriesService.getById(id);
  }

}