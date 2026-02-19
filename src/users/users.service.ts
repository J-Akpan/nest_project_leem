import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
    //injection of user repository will be herer
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    allUsers(): any {
        const getAllUsers = this.userRepository.find()
        return getAllUsers
    }

    public async createUser(userDto: createUserDto) {
        //validate if user exixts
        const user = await this.userRepository.findOne({
            where: { email: userDto.email }
        })
        //if user exist , handle error/exceptions
        if (user) {
            return "User already exists"
        }
        //if user does not exist, create user
        const newUser = this.userRepository.create(userDto)
        await this.userRepository.save(newUser)

    }
}
