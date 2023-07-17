import { 
     Entity, ManyToOne,
     Column, PrimaryGeneratedColumn, 
} from 'typeorm';

import { User } from './users';

import { RealEstate } from './real_estate';

@Entity('schedules')
export class Schedule{
     @PrimaryGeneratedColumn('increment')
     id: number

     @Column({type: 'date'})
     date: Date

     @Column({type: 'time'})
     hour: string 

     @ManyToOne(
          () => User, 
          (user) => user.schedules
     )
     user: User;

     @ManyToOne(
          () => RealEstate, 
          (realEstate) => realEstate.schedules
     )
     realEstate: RealEstate;
}

