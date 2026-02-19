import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class createUserDto {
    
    id: number;

    @IsString({message: 'First name must be a string'})
    @IsNotEmpty()
    @MinLength(3, {message: 'First name must be at least 3 characters long' })
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    lastName: string

    @IsString()
    @IsOptional()
    gender?: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}