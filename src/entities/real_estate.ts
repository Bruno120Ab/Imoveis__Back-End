import { 
     ManyToOne, OneToMany, 
     OneToOne, JoinColumn, 
     Entity, Column, 
     CreateDateColumn,  UpdateDateColumn,
     PrimaryGeneratedColumn, 
} from 'typeorm';

import { Category } from './categories';
import { Address } from './addresses';
import { Schedule } from './schedules';

@Entity('real_state')
export class RealEstate {
     @PrimaryGeneratedColumn('increment')
     id: number

     @Column({type: 'boolean', default: false})
     sold: boolean

     @Column({type: 'decimal', precision: 12, scale: 2, default: 0})
     value: number | string
     
     @Column({type: 'int'})
     size: number

     @CreateDateColumn({type:'date'})
     createdAt: string | Date 

     @UpdateDateColumn({type:'date'})
     updatedAt: string | Date  
     
     @OneToMany( 
          ()=> Schedule, 
          (schedules) => schedules.realEstate
     )
     schedules: Schedule[]

     @OneToOne(
          () => Address, 
          (address) => address.realEstate
     )
     @JoinColumn()
     address: Address
     
     @ManyToOne(
          () => Category, 
          (category) => category.realEstate
     )
     category: Category
}

