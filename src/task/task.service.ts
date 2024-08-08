import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddTaskDTO, UpdateTaskDTO } from 'src/models/dto/task.dto';
import { TaskModel } from 'src/models/task.entity';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';
@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskModel) private taskRepository: Repository<TaskModel>,
  ) {}

  getTasks() {
    return this.taskRepository.find();
  }

  addTask(task: AddTaskDTO) {
    var taskRepo = this.taskRepository.create(task);
    return this.taskRepository.save(taskRepo);
  }

  getTaskById(id: number) {
    return this.taskRepository.findOneBy({ id });
  }

  updateTask(id: number, task: UpdateTaskDTO) {
    return this.taskRepository.update({ id }, task);
  }

  deleteTask(id: number) {
    return this.taskRepository.delete({ id });
  }
}
