import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModel } from './models/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: 'api',
      username: 'root',
      password: '',
      port: 3306,
      host: 'localhost',
      type: 'mysql',
      synchronize: true,
      entities: [TaskModel],
    }),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
