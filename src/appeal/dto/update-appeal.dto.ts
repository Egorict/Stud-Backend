import { PartialType } from '@nestjs/mapped-types';
import { CreateAppealDto } from './create-appeal.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateAppealDto extends PartialType(CreateAppealDto) {
    @IsNumber()
    id: number
    @IsString()
    additional_text: string
}
