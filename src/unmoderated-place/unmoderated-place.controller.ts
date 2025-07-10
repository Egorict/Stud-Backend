import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UnmoderatedPlaceService } from './unmoderated-place.servise';
import { CreateUnmoderatedPlaceDto } from './dto/create-unmoderated-place.dto';
import { UnmoderatedPlace } from '@prisma/client';


@Controller('unmoderatedPlace')
export class UnmoderatedPlaceController {
  constructor(private readonly placeService: UnmoderatedPlaceService) {}

  @Post("/create")
  create(@Body() dto: CreateUnmoderatedPlaceDto) {
    return this.placeService.create(dto);
  }

  @Get("/getAll")
  getAll() {
    return this.placeService.findAll();
  }


}
