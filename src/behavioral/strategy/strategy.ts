
// 5. Контекст: Система передачі даних ТТД
import {EnergySavingStrategy} from "./EnergySavingStrategy";
import {SecureRouteStrategy} from "./SecureRouteStrategy";
import {FastRouteStrategy} from "./FastRouteStrategy";
import {RouteStrategy} from "./RouteStrategy";

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
console.log("\n--- Behavioral: Strategy ---");
console.log("=== ЗАПУСК СИСТЕМИ ТТД ===");

// Починаємо з режиму економії енергії
const ttdSystem = new DataTransmissionSystem(new EnergySavingStrategy());
ttdSystem.sendData("Штаб", "Блокпост-1");

// Ситуація змінилася, потрібна максимальна безпека
ttdSystem.setStrategy(new SecureRouteStrategy());
ttdSystem.sendData("Штаб", "Блокпост-1");

// Потрібна термінова передача (наприклад, тривога)
ttdSystem.setStrategy(new FastRouteStrategy());
ttdSystem.sendData("Штаб", "Блокпост-1");




