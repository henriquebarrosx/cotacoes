import { Cota } from "../../entities/cota";
import { Observer } from "../../entities/observer";

export interface WssForexProsServiceGateway extends Observer {
  subscribe(pid: string, callback: (result: Cota) => void): void;
}