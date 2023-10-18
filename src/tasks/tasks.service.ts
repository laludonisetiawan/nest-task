import { TaskRepository } from './tasks.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  constructor(public taskRepo: TaskRepository) {}

  findAll() {
    return this.taskRepo.findAll();
  }

  findOne(id: number) {
    return this.taskRepo.findOne(id);
  }

  create(task: string) {
    return this.taskRepo.create(task);
  }
}
