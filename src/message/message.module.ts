import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Messages } from './message.entity';

@Module({
  controllers: [MessageController],
  providers: [MessageService],
  imports: [UsersModule, 
    TypeOrmModule.forFeature([Messages])]
})
export class MessageModule { }
