import { User } from "src/users/users.entity";
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: true,
    })
    firstName: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: true,
    })
    lastName: string;

    @Column({
        type: 'int',
        nullable: true,
    })
    age: number;

    @Column({
        type: 'varchar',
        length: 20,
        nullable: true,
    })
    gender: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true,
    })
    dob: Date;

    @Column({
        type: 'text',
        nullable: true,
    })
    bio: string;

    @Column({
        nullable: true,
        type: 'text'
    })
    profilePicture: string;
    @OneToOne(() => User, (user)=>user.profile)
    user: User

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}

