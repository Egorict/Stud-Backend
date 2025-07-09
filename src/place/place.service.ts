import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';


@Injectable()
export class PlaceService {
  constructor(private prisma: PrismaService) {}

  create() {
    var today = new Date();
    return this.prisma.place.create({
      data: 
      {discount: 1, distance: 1, duscountDuration: 1, name: "!!", id: "1"}})
  }

  findAll() {
    return this.prisma.place.findMany()
  } 
}
