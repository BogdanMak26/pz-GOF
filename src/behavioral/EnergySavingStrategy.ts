import {RouteStrategy} from "./RouteStrategy";

export class EnergySavingStrategy implements RouteStrategy {
  calculateRoute(start: string, end: string): string {
    return `[Energy] Розраховано шлях з мінімальною потужністю сигналу від ${start} до ${end}. Використовуємо LoRaWAN.`;
  }
}
