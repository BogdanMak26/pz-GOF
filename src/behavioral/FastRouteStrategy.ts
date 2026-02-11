import {RouteStrategy} from "./RouteStrategy";

export class FastRouteStrategy implements RouteStrategy {
  calculateRoute(start: string, end: string): string {
    return `[Fast] Розраховано найкоротший шлях від ${start} до ${end}. Використовуємо супутникові канали.`;
  }
}
