export class Cota {
  private constructor(
    public ask: string,
    public bid: string,
    public high: string,
    public last: string,
    public last_dir: string,
    public last_numeric: number,
    public low: string,
    public pc: string,
    public pc_col: string,
    public pcp: string,
    public pid: string,
    public time: string,
    public timestamp: number,
  ) { }

  public static criarCota(input: Input) {
    const { ask, bid, high, last, last_dir, last_numeric, low, pc, pc_col, pcp, pid, time, timestamp } = input;
    return new Cota(ask, bid, high, last, last_dir, last_numeric, low, pc, pc_col, pcp, pid, time, timestamp);
  }
}

type Input = {
  ask: string;
  bid: string;
  high: string;
  last: string;
  last_dir: string;
  last_numeric: number;
  low: string;
  pc: string;
  pc_col: string;
  pcp: string;
  pid: string;
  time: string;
  timestamp: number;
}