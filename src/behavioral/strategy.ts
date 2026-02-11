
// 5. Контекст: Система передачі даних ТТД
export class DataTransmissionSystem {
  private strategy: RouteStrategy; // Посилання на поточну стратегію

  constructor(strategy: RouteStrategy) {
    this.strategy = strategy;
  }

  // Метод для зміни стратегії в процесі роботи (Runtime)
  public setStrategy(strategy: RouteStrategy): void {
    console.log("\n--- Зміна режиму передачі даних ---");
    this.strategy = strategy;
  }

  // Виконання передачі
  public sendData(from: string, to: string): void {
    const route = this.strategy.calculateRoute(from, to);
    console.log(`Система ТТД: ${route}`);
    console.log("Дані успішно відправлено.");
  }
}




