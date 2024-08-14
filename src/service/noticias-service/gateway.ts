import { Noticia } from "../../entities/noticia";

export interface HttpNoticiasServiceGateway {
  buscarTodas(): Promise<Noticia[]>;
}