import { Inject} from '@nestjs/common';
import { TaskProvider } from './task.provider';
import { Task } from '../entities/task.entity';

export class CreateTaskUseCase {

  constructor(@Inject('TASK_PROVIDER') private readonly taskProvider: TaskProvider) {}

  execute(task: Task): Promise<Task> {
    return this.taskProvider.createTask(task);
  } 
}
