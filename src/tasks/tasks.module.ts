import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TaskService } from './tasks.service';
import { TaskRepository } from './tasks.repository';

@Module({
  controllers: [TasksController],
  providers: [TaskService, TaskRepository],
})
export class TasksModule {}
