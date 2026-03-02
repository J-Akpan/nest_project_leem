import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Messages } from './message.entity';
import { UsersService } from '../users/users.service';
import { Repository } from 'typeorm';


import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MessageService {
  constructor(private readonly userService: UsersService,
    @InjectRepository(Messages) private readonly messageRepository: Repository<Messages> 
  ) {}


 getMessages() {

 }

 createMessage(createMessageDto: CreateMessageDto) {
  // find user given id
  // create message with user
  // save message to database


 }


}
