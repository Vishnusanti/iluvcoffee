import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Connection, Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { ConfigService, ConfigType } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';
export declare class CoffeesService {
    private readonly coffeeRepository;
    private readonly flavorRepository;
    private readonly connection;
    private readonly configService;
    private readonly coffeesConfiguaration;
    constructor(coffeeRepository: Repository<Coffee>, flavorRepository: Repository<Flavor>, connection: Connection, coffeeBrands: string[], configService: ConfigService, coffeesConfiguaration: ConfigType<typeof coffeesConfig>);
    findAll(paginationQuery: PaginationQueryDto): Promise<Coffee[]>;
    findOne(id: string): Promise<Coffee>;
    create(createCoffeeDto: CreateCoffeeDto): Promise<Coffee>;
    update(id: string, updateCoffeeDto: UpdateCoffeeDto): Promise<Coffee>;
    remove(id: string): Promise<Coffee>;
    recommendations(coffee: Coffee): Promise<void>;
    private preloadFlavorByName;
}
