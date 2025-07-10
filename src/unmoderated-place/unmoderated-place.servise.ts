import { Injectable } from '@nestjs/common';
import { CreateUnmoderatedPlaceDto } from './dto/create-unmoderated-place.dto';

import { PrismaService } from 'src/prisma.service';


@Injectable()
export class UnmoderatedPlaceService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateUnmoderatedPlaceDto) {
    return this.prisma.unmoderatedPlace.create({
      data: 
      {
        discount: dto.discount,
        distance: dto.distance, 
        discountDuration: dto.discountDuration, 
        name: dto.name,
        sprite: dto.sprite,
        rating: dto.rating
      }
    })
  }

  findAll() {
    return this.prisma.unmoderatedPlace.findMany()
  } 
}
