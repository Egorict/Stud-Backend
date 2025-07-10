import { IsNumber, IsString } from "class-validator"

export class FilteredPlaceDto {
    @IsNumber()
    id?    
    @IsNumber()         
    minDiscount?   
    @IsString()   
    name?    
    @IsNumber()          
    MinRating?       
    @IsNumber()     
    MinDiscountDuration?     
    @IsNumber()
    MaxDistance?
}

