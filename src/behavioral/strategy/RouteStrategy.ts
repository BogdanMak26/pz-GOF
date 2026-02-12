
export interface RouteStrategy {
  calculateRoute(start: string, end: string): string;
}

