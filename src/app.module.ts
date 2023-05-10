import { Module } from '@nestjs/common';
import { TaskModule } from './entrypoint/task.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TaskModule, ConfigModule.forRoot({isGlobal:true})]
})

export class AppModule {}
