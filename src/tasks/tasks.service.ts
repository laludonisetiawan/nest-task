import { TaskRepository } from './tasks.repository';

export class TaskService {
  taskRepo: TaskRepository;

  constructor() {
    this.taskRepo = new TaskRepository();
  }

  findAll() {
    this.taskRepo.findAll();
  }

  findOne(id: number) {
    this.taskRepo.findOne(id);
  }

  create(task: string) {
    return this.taskRepo.create(task);
  }
}
