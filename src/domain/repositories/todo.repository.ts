import { CreateTodoDto, UpdateTodoDto } from "../dtos";
import { TodoEntity } from "../entities/todo.entity";

export interface TodoRepository {
  create(createTodoDto: CreateTodoDto): Promise<TodoEntity>;
  getAll(): Promise<TodoEntity[]>;
  findById(id: number): Promise<TodoEntity>;
  updateById(updatedTodo: UpdateTodoDto): Promise<TodoEntity>;
  deleteById(id: number): Promise<TodoEntity>;
}
