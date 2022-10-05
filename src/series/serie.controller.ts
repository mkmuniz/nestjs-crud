import { SeriesService } from './serie.provider';
import { Controller, Delete, Get, Logger, Param, Put } from '@nestjs/common';
import { Serie } from './series.model';

@Controller('series')
export class SeriesController {
  private readonly logger = new Logger(SeriesController.name);
  constructor(private seriesService: SeriesService) 
  {}
  @Get()
  async findAll(): Promise<Serie[]> {
    this.logger.log('Getting all series');
    return this.seriesService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: String): Promise<Serie> {
    this.logger.log('Getting a specific serie');
    return this.seriesService.getById(id);
  }

  @Put(':id')
  async patchOne(@Param('id') id: String, @Param('serie') serie: Serie): Promise<Serie> {
    this.logger.log('Updating a serie');
    return this.seriesService.patch(id, serie);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: String): Promise<void> {
    return this.seriesService.delete(id);
  }

}