// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

type Callback = (num: number) => number;

let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: unknown;
let callback: Callback = a => {
  return 100 + a;
};

export {};
