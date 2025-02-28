import { Injectable } from '@nestjs/common';
import { CreateAppealDto } from './dto/create-appeal.dto';
import { UpdateAppealDto } from './dto/update-appeal.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';


@Injectable()
export class AppealService {
  constructor(private prisma: PrismaService) {}

  create(createAppealDto: CreateAppealDto) {
    var today = new Date();
    return this.prisma.appeal.create({data: {...{"date": today.getFullYear() + "." + (today.getMonth() + 1) + "." + today.getDate()},...createAppealDto}})
  }

  findAll() {
    return this.prisma.appeal.findMany()
  }

  update(status: string, updateAppealDto: UpdateAppealDto) {
    return this.prisma.appeal.update(
      {
        data: {status, ...updateAppealDto},
        where: {
          id: updateAppealDto.id
        }
      }
    )
  }

  takeToWork(dto: UpdateAppealDto){
    return this.prisma.appeal.update(
      {
        data: {...{"status": "work"}, ...dto},
        where: {
          id: dto.id
        }
      }
    )
  }

  end(dto: UpdateAppealDto){
    return this.prisma.appeal.update(
      {
        data: {...{"status": "end"}, ...dto},
        where: {
          id: dto.id
        }
      }
    )
  }

  cancel(dto: UpdateAppealDto){
    return this.prisma.appeal.update(
      {
        data: {...{"status": "cancel"}, ...dto},
        where: {
          id: dto.id
        }
      }
    )
  }

  endAll(){
    return this.prisma.appeal.updateMany(
      {
        data: {...{"status": "end"}},
        where: {
          status: "work"
        }
      }
    )
  }

  async findPerDate(date: string){
    if (date.includes("-")){
      let validAppeals = []

      let appeals =  await this.prisma.appeal.findMany()

      let minDate = date.split('-')[0]
      let maxDate = date.split('-')[1]

      let minYear = Number(minDate.split('.')[0])
      let minMonth = Number(minDate.split('.')[1])
      let minDay = Number(minDate.split('.')[2])

      let maxYear = Number(maxDate.split('.')[0])
      let maxMonth = Number(maxDate.split('.')[1])
      let maxDay = Number(maxDate.split('.')[2])

      appeals.forEach(element => {
        let year = Number(element.date.split('.')[0])
        let month = Number(element.date.split('.')[1])
        let day = Number(element.date.split('.')[2])

        if (year > minYear && year < maxYear){
        
          validAppeals.push(element)
        }
        else if (year == minYear || year == maxYear){
          console.log("1")
          if (month > minMonth || month < maxMonth){
            validAppeals.push(element)
          }
          else if (month == minMonth || month == maxMonth){
            if (day >= minDay && day <= maxDay){
              validAppeals.push(element)
            }
          }

         
        }
      });
      
      return validAppeals
    }

    return this.prisma.appeal.findMany(
      {
        where: {
          date: date,

        }
      }
    )
  }
}
