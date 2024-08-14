import { WssForexProsService } from "./forex-pros";
import { WssForexProsServiceGateway } from "./gateway";

export abstract class WssForexProsServiceSingleton {
  private static instance: WssForexProsServiceGateway;

  static getInstance() {
    if (!WssForexProsServiceSingleton.instance) {
      WssForexProsServiceSingleton.instance = new WssForexProsService();
    }

    return WssForexProsServiceSingleton.instance;
  }
}