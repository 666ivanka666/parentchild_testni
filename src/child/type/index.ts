export class Child {
  name: string;
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public parentId: string,
  ) {}
}
