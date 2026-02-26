import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Profile } from './profile.entity';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController { 
    constructor(public profileService: ProfileService){}

    @Get()
    getAllProfiles(){
        return this.profileService.getAllProfiles()
    }
}
