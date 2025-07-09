import { IsNumber, IsString } from "class-validator"

export class CreatePlaceDto {
    @IsNumber()
    id    
    @IsNumber()         
    distance   
    @IsString()   
    name    
    @IsNumber()          
    discount       
    @IsNumber()     
    discountDuration 
}


