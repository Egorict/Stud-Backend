import { Module } from '@nestjs/common';
import { PlaceModule } from './place/place.module';
import { UnmoderatedPlaceModule } from './unmoderated-place/unmoderated-place.model';

@Module({
  imports: [PlaceModule, UnmoderatedPlaceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
