import { Module } from '@nestjs/common';
import { UnmoderatedPlaceController } from './unmoderated-place.controller';
import {  UnmoderatedPlaceService} from './unmoderated-place.servise';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UnmoderatedPlaceController],
  providers: [UnmoderatedPlaceService, PrismaService],
})
export class UnmoderatedPlaceModule {}
