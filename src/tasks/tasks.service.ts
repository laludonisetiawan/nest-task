import { TaskRepository } from './tasks.repository';

export class TaskService {
  taskRepo: TaskRepository;

  constructor() {
    this.taskRepo = new TaskRepository();
  }

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
