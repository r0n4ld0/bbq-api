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
import { Barbecue } from "./Barbecue";

@Entity("barbecue_users")
class BarbecueUsers {
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  barbecue_id: string;

  @ManyToOne(() => Barbecue)
  @JoinColumn({ name: "barbecue_id" })
  barbecue: Barbecue;

  @Column()
  value: number;

  @Column()
  is_paid: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { BarbecueUsers };
