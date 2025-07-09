import { IsString } from "class-validator"

export class CreatePlaceDto {
    @IsString()
    topic: string
    @IsString()
    text: string
}
