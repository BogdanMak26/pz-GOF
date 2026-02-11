import {RouteStrategy} from "./RouteStrategy";

export class SecureRouteStrategy implements RouteStrategy {
  calculateRoute(start: string, end: string): string {
    return `[Secure] Розраховано шлях через захищені ретранслятори від ${start} до ${end}. Увімкнено шифрування AES-256.`;
  }
}
