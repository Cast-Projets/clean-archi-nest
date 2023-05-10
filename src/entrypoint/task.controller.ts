import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { Task } from 'src/core/entities/task.entity';
import { TaskEntrypoint } from 'src/core/use_cases/task.entrypoint';

@Controller('api/todos')
export class TaskController {

  constructor(private readonly taskPresenter: TaskEntrypoint) {}

  @Get()
  getTodos(): Promise<Task[]> {
    try {
      return this.taskPresenter.getAllTasks();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  createTodo(@Body() task: Task): Promise<Task> {
    try {
      return this.taskPresenter.createTask(task);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  @Delete(':id')
  deleteTodo(@Param('id') id: string): Promise<void>  {
    try {
      return this.taskPresenter.deleteTask(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}