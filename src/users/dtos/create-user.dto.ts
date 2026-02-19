import { IsEmail, IsNotEmpty, IsOptional, IsString, max, MaxLength, maxLength, MinLength } from "class-validator";

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
}