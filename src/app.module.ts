import { Module } from '@nestjs/common';
import { PlaceModule } from './place/place.module';

@Module({
  imports: [PlaceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
