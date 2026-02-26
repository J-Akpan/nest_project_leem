import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { Profile } from 'src/profile/profile.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { createUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
    //injection of user repository will be herer
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>
    ) { }

    allUsers(): any {
        const getAllUsers = this.userRepository.find({
            relations: { profile: true }
        })
        return getAllUsers
    }

    public async createUser(userDto: createUserDto) {
        // create ans  savee profile
        // userDto.profile = userDto.profile ?? {}
        // let profile = this.profileRepository.create(userDto.profile)
        // await this.profileRepository.save(profile)

        // create user object
        // let user = this.userRepository.create(userDto)

        // set the profile
        // user.profile = profile

        //save the user object 
        // await this.userRepository.save(user)

        // check out for the best way to implement the above using cascading

        userDto.profile = userDto.profile ?? {}
        let user = this.userRepository.create(userDto)
        return await this.userRepository.save(user)


    }
}
