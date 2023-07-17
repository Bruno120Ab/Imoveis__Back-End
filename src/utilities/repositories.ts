import { Repository } from "typeorm";

import { AppDataSource } from "../data-source";

import { Address, Category, RealEstate, Schedule, User } from "../entities";

const usersRepository: Repository<User> = AppDataSource.getRepository(User);

const adressRepository: Repository<Address> = AppDataSource.getRepository(Address);

const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

const schedulesRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);

const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

export {
     usersRepository,
     adressRepository,
     categoryRepository,
     schedulesRepository,
     realEstateRepository,
}