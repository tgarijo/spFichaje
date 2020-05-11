import { Entity, Column } from "typeorm";
import { Content } from "./Content";


@Entity()
export class Stopdescription extends Content {
  
  @Column({
    type: 'varchar',
    length: 150,
    unique: true
  })
  name: string
}
