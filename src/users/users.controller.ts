import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getUsers(): string {
        return this.usersService.allUsers()
    }

    @Post()
    createUser(@Body(new ValidationPipe()) userDto: createUserDto) {
        return this.usersService.createUser(userDto)
    }

}
