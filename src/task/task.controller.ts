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
  async getTasks() {
    return await this.taskService.getTasks();
  }

  @Post('/')
  async addTask(@Body() addTaskDTO: AddTaskDTO) {
    return await this.taskService.addTask(addTaskDTO);
  }

  @Get(':id')
  async getTaskByID(@Param('id') id: number) {
    return await this.taskService.getTaskById(id);
  }

  @Put(':id')
  async updateTask(@Param('id') id: number, @Body() task: UpdateTaskDTO) {
    return await this.taskService.updateTask(id, task);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number) {
    return await this.taskService.deleteTask(id);
  }
}
