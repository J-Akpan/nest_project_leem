import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/users.entity';

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>,

        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    public async getAllProfiles() {
        let profiles = await this.profileRepository.find({
            relations: { user: true }
        })
        return profiles
    }

    // delete a profile
    public async deleteProfile(id: number) {
        await this.profileRepository.delete(id)
        return { message: "Profile deleted successfully" }

    }


}
