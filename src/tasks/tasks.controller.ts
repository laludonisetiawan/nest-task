import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
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
  async getTask(@Param('id') id: string) {
    const task = await this.taskService.findOne(parseInt(id));

    if (!task) {
      throw new NotFoundException('task not found');
    }
  }
}
