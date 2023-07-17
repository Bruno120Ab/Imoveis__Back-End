import { 
     Entity, Column, 
     PrimaryGeneratedColumn, 
     CreateDateColumn, UpdateDateColumn, 
     DeleteDateColumn, OneToMany,
     BeforeInsert, BeforeUpdate,
} from 'typeorm';

import { Schedule } from './schedules';
import { getRounds, hashSync } from 'bcryptjs';
@Entity('users')
export class User {
     @PrimaryGeneratedColumn('increment')
     id: number

     @Column({type: 'varchar', length:45})
     name: string

     @Column({type: 'varchar', length:45, unique: true})
     email: string

     @Column({type: 'boolean', default: false})
     admin: boolean

     @Column({type: 'varchar', length:120})
     password: string

     @CreateDateColumn({type:'date'})
     createdAt: string | Date 

     @UpdateDateColumn({type:'date'})
     updatedAt: string | Date  

     @DeleteDateColumn({type:'date'})
     deletedAt: string | Date  

     @OneToMany(
          ()=> Schedule, 
          (schedules) => schedules.user
     )
     schedules: Schedule[]

     @BeforeInsert() 
     @BeforeUpdate()
     hashPassword() { 
     const isEncrypted: number = getRounds(this.password); 
          if (!isEncrypted) {
               this.password = hashSync(this.password, 10);
          }
     }

}


