import { SeriesService } from './serie.provider';
import { Controller, Delete, Get, Param, Put } from '@nestjs/common';
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

  @Put(':id')
  async patchOne(@Param('id') id: String, @Param('serie') serie: Serie): Promise<Serie> {
    return this.seriesService.patch(id, serie);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: String): Promise<void> {
    return this.seriesService.delete(id);
  }

}