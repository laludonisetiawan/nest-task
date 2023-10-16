import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  listTask() {
    return 'listTas!';
  }

  @Post()
  createTask(@Body() body: any) {
    return body;
  }

  @Get('/:id')
  getTask(@Param() id: string) {
    return id;
  }
}
