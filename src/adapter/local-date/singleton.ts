import { DateFnsAdapter } from "./date-fns";
import { LocalDate } from "./gateway";

export abstract class LocalDateSingleton {
  private static instance: LocalDate;

  static getInstance(): LocalDate {
    if (!LocalDateSingleton.instance) {
      LocalDateSingleton.instance = new DateFnsAdapter();
    }

    return LocalDateSingleton.instance;
  }
}