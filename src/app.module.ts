import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';

@Module({
  imports: [TasksModule],
  controllers: [TasksController],
  providers: [AppService],
})
export class AppModule {}
