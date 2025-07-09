import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PlaceService } from './place.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Controller('place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post("/create")
  create() {
    return this.placeService.create();
  }

  @Get("/getAll")
  get() {
    return this.placeService.findAll();
  }
}
