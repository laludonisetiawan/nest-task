import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-tasks.dto';
import { TaskService } from './tasks.service';
@Controller('tasks')
export class TasksController {
  taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  @Get()
  listTask() {
    return this.taskService.findAll();
  }

  @Post()
  createTask(@Body() body: CreateTaskDto) {
    return this.taskService.create(body.content);
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.findOne(parseInt(id));
  }
}
