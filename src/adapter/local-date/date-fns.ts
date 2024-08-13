import { format } from "date-fns";
import { LocalDate, LocalDateFormat } from "./gateway";

export class DateFnsAdapter implements LocalDate {
  format(period: string, type: LocalDateFormat): string {
    return format(new Date(period), type);
  }
}