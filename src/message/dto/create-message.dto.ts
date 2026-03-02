import { IsNotEmpty, IsOptional, IsString, IsInt } from "class-validator"
import { isNativeError } from "util/types"

export class CreateMessageDto {
    @IsNotEmpty()
    @IsString()
    text: string

    @IsOptional()
    image?: string


    @IsNotEmpty()
    @IsInt()
    userId: number
}