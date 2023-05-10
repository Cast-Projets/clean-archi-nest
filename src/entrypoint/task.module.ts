import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { CoreModule } from 'src/core/core.module';

@Module({
  imports: [CoreModule],
  controllers: [TaskController]
})
export class TaskModule {}
