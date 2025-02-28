import { IsString } from "class-validator"

export class CreateAppealDto {
    @IsString()
    topic: string
    @IsString()
    text: string
}
