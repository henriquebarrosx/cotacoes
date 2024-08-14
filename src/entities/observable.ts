export class Observable {
  constructor(
    public event: string,
    public callback: Function
  ) { }
}