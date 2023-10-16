import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class TasksController {
  @Get()
  listTask() {}

  @Post()
  createTask() {}

  @Get('/:id')
  getTask() {}
}
