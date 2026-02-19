import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
        type: 'varchar',
        length: 100,
    })
    username: string;

    @Column({
        unique: true,
        type: 'varchar',
        length: 100,
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 100,
    })
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}

