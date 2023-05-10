import { Inject} from '@nestjs/common';
import { TaskProvider } from './task.provider';
import { Task } from '../entities/task.entity';;

export class GetAllTasksUseCase {

  constructor(@Inject('TASK_PROVIDER') private readonly taskProvider: TaskProvider) {}

  execute(): Promise<Task[]> {
    return this.taskProvider.getAllTasks();
  } 
}
