import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserModel } from '../../user/model/user.model';
import { v4 as uuid} from 'uuid';

@Entity('dailys')
class DailyModel {

    @PrimaryGeneratedColumn('uuid')
    id!: string; 

    @Column()
    description!: string;

    @Column()
    type!: 'lunch' | 'breakfast' | 'dinner' | 'snack';

    @Column()
    day!: Date;

    @Column()
    user_id!: string;

    @ManyToOne(() => UserModel) //relacionamento 
    @JoinColumn({name: 'user_id'})
    user!: UserModel;
    
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

export { DailyModel };