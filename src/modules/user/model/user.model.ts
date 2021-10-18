import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid} from 'uuid';

@Entity('users')
class UserModel {

    @PrimaryGeneratedColumn('uuid')
    id!: string; 

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password?: string;
    
    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
    
    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { UserModel };