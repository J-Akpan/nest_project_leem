import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { Type } from 'class-transformer';
import { Profile } from './profile.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
  imports: [TypeOrmModule.forFeature([Profile, User])]
})
export class ProfileModule { }
