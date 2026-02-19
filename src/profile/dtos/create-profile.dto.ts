import { IsDate, IsNotEmpty, IsOptional, IsString, Max, MaxLength, MinLength } from "class-validator";
import { Column } from "typeorm";

export class createProfileDto {
    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(20)
    firstName?: string;

    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(20)
    lastName?: string;

    @IsString()
    @IsOptional()
    age?: number;

    @IsString()
    @IsOptional()
    @MaxLength(20)
    gender?: string;



    @IsOptional()
    @IsDate()
    dob?: Date;

    @IsOptional()
    @IsString()
    bio?: string;

    @IsOptional()
    @IsString()
    profilePicture?: string;


}