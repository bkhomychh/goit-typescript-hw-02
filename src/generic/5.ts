/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

type Key = string | symbol;

interface KeyValuePair<T extends Key, U> {
  key: T;
  value: U;
}

export {};
