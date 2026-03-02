import { Column, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "src/profile/profile.entity";
import { OneToOne, JoinColumn, OneToMany } from "typeorm";
import {  Messages } from "src/message/message.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        nullable: false,
        length: 24,
        unique: true
    })
    username: string

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100,
        unique: true
    })
    email: string

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100
    })
    password: string

    @OneToOne(() => Profile, (profile) => profile.user, {
        cascade: ['insert'],
        // eager: true
    })
    profile?: Profile

    @OneToMany(() => Messages, (message) => message.user)
    messages: Messages[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}