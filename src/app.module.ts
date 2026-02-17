import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './users/users.entity';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRootAsync({
      //to import and inject a  property
      imports: [],
      inject: [],

      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'Akpan123',
        database: 'leem',
        entities: [User],
        synchronize: true, //dont use in production

      })

    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
