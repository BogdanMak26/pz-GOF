
export class WebBackend implements Backend {
  public getData() {
    if (Math.random() > 0.8) {
      throw new Error("Помилка з'єднання з хмарою!");
    }
    return "WebBackend: Data from the cloud";
  }

}

