import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { User } from "../../../../accounts/infra/typeorm/entities/User";

@Entity("barbecues")
class Barbecue {
  @PrimaryColumn()
  id: string;

  @Column()
  date: Date;

  @Column()
  description: string;

  @Column()
  observation?: string;

  @Column()
  value_with_drinks: number;

  @Column()
  value_without_drinks: number;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Barbecue };
