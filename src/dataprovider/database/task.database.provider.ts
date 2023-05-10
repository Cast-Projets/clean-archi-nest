import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TaskProvider } from 'src/core/use_cases/task.provider';
import { TaskMapper } from './task.mapper';
import { TaskDomain, TaskName } from './task.schema';
import { Task } from 'src/core/entities/task.entity';


@Injectable()
export class TaskDatabaseProvider implements TaskProvider {
  
  constructor(@InjectModel(TaskName) private taskModel: Model<TaskDomain>, private readonly  taskMapper: TaskMapper) {}

  getAllTasks(): Promise<Task[]> {
    return this.taskModel.find().exec().then(tasks => {
      return tasks.map(task => this.taskMapper.toTask(task))
    });
  }

  async createTask(task: Task): Promise<Task> {
    return this.taskModel.create(task).then(t => { 
      return this.taskMapper.toTask(t); });
  }

  async deleteTask(id: String): Promise<void> {
    await this.taskModel.deleteOne({"_id": id});
  }
}
