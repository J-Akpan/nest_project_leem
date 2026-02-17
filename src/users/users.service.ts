import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    allUsers(): string {
        return 'This action returns all users';
    }
}
