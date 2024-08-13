export interface LocalDate {
  format(period: string, type: LocalDateFormat): string;
}

export enum LocalDateFormat {
  DATE = 'dd/MM/yyyy',
  DATETIME = 'dd/MM/yyyy hh:mm:ss'
}