import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppealService } from './appeal.service';
import { CreateAppealDto } from './dto/create-appeal.dto';
import { UpdateAppealDto } from './dto/update-appeal.dto';

@Controller('appeal')
export class AppealController {
  constructor(private readonly appealService: AppealService) {}

  @Post("/create")
  create(@Body() createAppealDto: CreateAppealDto) {
    return this.appealService.create(createAppealDto);
  }

  @Post("/take-to-work")
  takeToWork(@Body() updateAppealDto: UpdateAppealDto) {
    return this.appealService.takeToWork(updateAppealDto);
  }

  @Post("/end")
  end(@Body() updateAppealDto: UpdateAppealDto) {
    return this.appealService.end(updateAppealDto);
  }

  @Post("/end-all")
  endAll() {
    return this.appealService.endAll();
  }

  @Post("/cancel")
  cancel(@Body() updateAppealDto: UpdateAppealDto) {
    return this.appealService.cancel(updateAppealDto);
  }

  @Get()
  findAll() {
    return this.appealService.findAll();
  }

  @Get("/:date")
  findPerDate(@Param('date') date: string) {
    return this.appealService.findPerDate(date);
  }


}
