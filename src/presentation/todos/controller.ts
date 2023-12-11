import { Request, Response } from 'express';
import { CreateTodoDto, UpdateTodoDto } from '../../domain/dtos';
import {
  CreateTodo,
  DeleteTodo,
  GetTodo,
  GetTodos,
  TodoRepository,
  UpdateTodo,
} from '../../domain';

export class TodosController {
  //* DI
  constructor(private readonly todoRepository: TodoRepository) {}

  public getTodos = (req: Request, res: Response) => {
    new GetTodos(this.todoRepository)
      .excute()
      .then((todos) => res.send(todos))
      .catch((err) => res.status(400).send(err));
  };

  public getTodoById = (req: Request, res: Response) => {
    const id = +req.params.id;
    new GetTodo(this.todoRepository)
      .excute(id)
      .then((todo) => res.send(todo))
      .catch((err) => res.status(404).send(err));
  };

  public createTodo = (req: Request, res: Response) => {
    const [error, createTodoDto] = CreateTodoDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateTodo(this.todoRepository)
      .excute(createTodoDto!)
      .then((todo) => res.send(todo))
      .catch((err) => res.status(400).send(err));
  };

  public updateTodo = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    new UpdateTodo(this.todoRepository)
      .excute(updateTodoDto!)
      .then((todo) => res.send(todo))
      .catch((err) => res.status(400).send(err));
  };

  public deleteTodo = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteTodo(this.todoRepository)
      .excute(id)
      .then((todo) => res.send(todo))
      .catch((err) => res.status(404).send(err));
  };
}
