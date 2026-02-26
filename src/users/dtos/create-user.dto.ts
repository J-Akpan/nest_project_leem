import { IsEmail, IsNotEmpty, IsOptional, IsString, 
    MaxLength, MinLength } from "class-validator";
import { createProfileDto } from "src/profile/dtos/create-profile.dto";


export class createUserDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(100)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(24)
    username: string; 

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(100)
    password: string;

    @IsOptional()
    profile: createProfileDto
}