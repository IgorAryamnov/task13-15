import { Module } from "@nestjs/common";
import { TaskFieldsService } from "./task-fields.service";
import { TaskFieldsController } from "./task-fields.controller";
import { TaskField } from "./task-fields.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { Project } from "src/projects/projects.entity";
import { TaskFieldValue } from "./task-field-values.entity";
import { Task } from "src/tasks/tasks.entity";
import { SelectiveFieldValues } from "./selectiveField.entity";

@Module({
  providers: [TaskFieldsService],
  controllers: [TaskFieldsController],
  imports: [
    TypeOrmModule.forFeature([TaskField]),
    TypeOrmModule.forFeature([TaskFieldValue]),
    TypeOrmModule.forFeature([Task]),
    TypeOrmModule.forFeature([Project]),
    TypeOrmModule.forFeature([SelectiveFieldValues]),
    AuthModule,
  ],
})
export class TaskFieldsModule {}
