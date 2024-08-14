import { Noticia } from "../../entities/noticia";
import { HttpNoticiasServiceGateway } from "./gateway";

export class HttpNoticiasService
  implements HttpNoticiasServiceGateway {

  buscarTodas(): Noticia[] {
    return [
      new Noticia(
        'Lorem Ipsum',
        'Bloomberg',
        '2024-08-12T23:00:10',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        false,
        5
      ),
      new Noticia(
        'Lorem Ipsum',
        'BDM',
        '2024-08-12T23:00:10',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        true,
        3
      ),
      new Noticia(
        'Lorem Ipsum',
        'Financial Juice',
        '2024-08-12T23:00:10',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        true,
        1
      ),
      new Noticia(
        'Lorem Ipsum',
        'BDM',
        '2024-08-12T23:00:10',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        true,
        3
      ),
      new Noticia(
        'Lorem Ipsum',
        'BDM',
        '2024-08-12T23:00:10',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        true,
        3
      ),
      new Noticia(
        'Lorem Ipsum',
        'Financial Juice',
        '2024-08-12T23:00:10',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        true,
        1
      ),
    ]
  }
}