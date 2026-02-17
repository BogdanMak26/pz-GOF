import {Observer} from "./Observer";

export class CommunicationNode {
  private observers: Observer[] = []; // Список підписаних пристроїв
  private status: string = "Очікування";


  public attach(observer: Observer): void {
    this.observers.push(observer);
    console.log("Система: Підключено новий моніторинговий пристрій.");
  }

  // Змінити статус та сповістити всіх
  public setStatus(newStatus: string): void {
    this.status = newStatus;
    console.log(`\nНовий статус вузла зв'язку: ${this.status}`);
    this.notify();
  }

  // Розіслати оновлення
  private notify(): void {
    for (const observer of this.observers) {
      observer.update(this.status);
    }
  }
}
