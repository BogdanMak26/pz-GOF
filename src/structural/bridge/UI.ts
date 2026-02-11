export abstract class UI {
  protected backend: Backend;

  constructor(backend: Backend) {
    this.backend = backend;
  }

  abstract render(): void;


  public setBackend(backend: Backend) {
    this.backend = backend;
    console.log("Бекенд успішно змінено під час роботи програми.");
  }
}

