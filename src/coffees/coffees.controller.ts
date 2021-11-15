import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService){
        console.log('coffeesController created');
    }
    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto)
    {
        //const{limit, offset} = paginationQuery;

        return this.coffeesService.findAll(paginationQuery);
        //return `This just return all the data of coffees ${limit}, ${offset}`;
    }

    @Get(':id')
    findOne(@Param('id') id: string)
    {
        return this.coffeesService.findOne(id);
        //return `This action returns #${id} coffee`;
    }

    @Post()
    create(@Body() createCoffeesDto: CreateCoffeeDto)
    {
        return this.coffeesService.create(createCoffeesDto);
        //return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto)
    {
        return this.coffeesService.update(id, updateCoffeeDto);
        //return `This action will update the data of #${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id: string)
    {
        return this.coffeesService.remove(id);
        //return `This action will delete the #${id} coffee`;
    }
}