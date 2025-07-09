import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PlaceService } from './place.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Controller('place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post("/create")
  create(@Body() dto: CreatePlaceDto) {
    return this.placeService.create(dto);
  }

  @Get("/getAll")
  getAll() {
    return this.placeService.findAll();
  }

  @Get("/:id")
  get(@Param("id") id: string) {
    return this.placeService.find(+id);
  }
}
