import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { FilteredPlaceDto } from './dto/filtered-place.dto';


@Injectable()
export class PlaceService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreatePlaceDto) {
    return this.prisma.place.create({
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
    return this.prisma.place.findMany()
  } 

  find(id: number) {
    return this.prisma.place.findUnique({where: {id: id}})
  } 

  findFiltered(dto: FilteredPlaceDto) {
    return this.prisma.place.findMany(
      {
        where: 
        {
          id: dto?.id,
          name: dto?.name,
          discount: {
                gte: dto?.minDiscount // Фильтр: discount >= значение
            },
            distance: {
                lte: dto?.MaxDistance // Фильтр: distance <= значение (пример для расстояния)
            },
            rating: {
                gte: dto?.MinRating // Фильтр: rating >= значение
            },
            discountDuration: {
                gte: dto?.MinDiscountDuration // Фильтр: discountDuration >= значение
            }
        }
      }
    )
  } 
}
