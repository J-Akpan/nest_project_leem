
import { Column, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Profile } from "src/profile/profile.entity";
import { User } from "../users/users.entity";
import { OneToOne, JoinColumn } from "typeorm";

@Entity()
export class Messages {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'text',
        nullable: false,
    })
    text: string

    @Column({
        type: 'text',
        nullable: false,
    })
    image: string

    @ManyToOne(() => User, (user) => user.messages)
    user?: User

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}