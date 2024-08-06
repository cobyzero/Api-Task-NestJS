import { Injectable } from '@nestjs/common';
import { AddTaskDTO, UpdateTaskDTO } from 'src/models/dto/task.dto';
import { TaskModel } from 'src/models/task.model';
import { v4 } from 'uuid';
@Injectable()
export class TaskService {
  private tasks: TaskModel[] = [];

  getTasks(): TaskModel[] {
    return this.tasks;
  }

  addTask(task: AddTaskDTO) {
    var taskModel = new TaskModel();
    taskModel.id = v4();
    taskModel.name = task.name;
    taskModel.description = task.description;

    this.tasks.push(taskModel);
  }

  getTaskById(id: string): TaskModel {
    return this.tasks.find((e) => e.id === id);
  }

  updateTask(id: string, task: UpdateTaskDTO) {
    var taskModel = new TaskModel();

    taskModel.id = id;
    taskModel.name = task.name;
    taskModel.description = task.description;

    var taskFind = this.tasks.filter((e) => e.id !== id);

    taskFind.push(taskModel);

    this.tasks = taskFind;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((e) => e.id !== id);
  }
}
