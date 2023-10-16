import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-tasks.dto';
@Controller('tasks')
export class TasksController {
  @Get()
  listTask() {
    return 'listTas!';
  }

  @Post()
  createTask(@Body() body: CreateTaskDto) {
    return body;
  }

  @Get('/:id')
  getTask(@Param() id: string) {
    return id;
  }
}
