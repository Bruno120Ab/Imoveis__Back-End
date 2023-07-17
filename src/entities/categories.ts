import { 
     Entity, Column, 
     PrimaryGeneratedColumn, 
     OneToMany
} from 'typeorm';

import { RealEstate } from './real_estate';

@Entity('categories')
export class Category{
     @PrimaryGeneratedColumn('increment')
     id: number

     @Column({type: 'varchar', length:45, unique: true})
     name: string

     @OneToMany(
          ()=> RealEstate, 
          realEstate => realEstate.category
     )
     realEstate: RealEstate[]
}

