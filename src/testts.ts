let helloWorld: string = "1823"; // someApiData.someIntDataThoughtItWasString
helloWorld = "Hi there";

type TodoStatus = "active" | "completed" | "cancelled" | "postponed";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  someNullableBoolean: boolean | null;
  status: TodoStatus;
}

let todo: Todo = {
  id: 1,
  text: "Organize files",
  completed: false,
  someNullableBoolean: null,
  status: "active",
};

let todos: Todo[] = [
  todo,
  {
    id: 2,
    text: "Organize files",
    completed: false,
    someNullableBoolean: null,
    status: "postponed",
  },
];

function addNumber(a: number, b: number): number {
  return a + b;
}
