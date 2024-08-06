import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { AddTaskDTO, UpdateTaskDTO } from 'src/models/dto/task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/')
  getTasks() {
    return this.taskService.getTasks();
  }

  @Post('/')
  addTask(@Body() addTaskDTO: AddTaskDTO) {
    return this.taskService.addTask(addTaskDTO);
  }

  @Get(':id')
  getTaskByID(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() task: UpdateTaskDTO) {
    return this.taskService.updateTask(id, task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
