declare type TodoItem = {
  id: string;
  detail: string;
  checked: boolean;
};

declare type AppState = {
  items: TodoItem[];
};
