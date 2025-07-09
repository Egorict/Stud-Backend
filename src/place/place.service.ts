import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';


@Injectable()
export class PlaceService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreatePlaceDto) {
    var today = new Date();
    return this.prisma.place.create({
      data: 
      {
        discount: dto.discount,
        distance: dto.distance, 
        discountDuration: dto.discountDuration, 
        name: dto.name
      }
    })
  }

  findAll() {
    return this.prisma.place.findMany()
  } 

  find(id: number) {
    return this.prisma.place.findUnique({where: {id: id}})
  } 
}
