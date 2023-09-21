/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

const myGender: Gender = "male";
type Gender = "male" | "female";
export {};
