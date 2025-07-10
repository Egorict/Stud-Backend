import { IsNumber, IsString } from "class-validator"

export class CreateUnmoderatedPlaceDto {
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
  
    sprite
    @IsNumber()
    rating
}


