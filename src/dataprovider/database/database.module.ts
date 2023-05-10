import { Module } from '@nestjs/common';
import { TaskDatabaseProvider } from './task.database.provider';
import { TaskMapper } from './task.mapper';
import { TaskDomain, TaskName, TaskSchema } from './task.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ 
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('DATABASE_URI')
      }),
      inject: [ConfigService]
    }), 
    MongooseModule.forFeature([{name: TaskName, schema: TaskSchema}])
  ], 
  providers: [TaskDomain, TaskMapper, 
    { provide: 'TASK_PROVIDER',
      useClass: TaskDatabaseProvider}],
  exports: ['TASK_PROVIDER']
})

export class DatabaseModule {}
