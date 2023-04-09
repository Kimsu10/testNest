import { Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `return one movie id : ${movieId}`;
  }

  @Post()
  create() {
    return 'create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `delete a movie id: ${movieId}`;
  }

  @Patch()
  patch(@Param('/:id') movieId: string) {
    return `patch a movie id : ${movieId} `;
  }
}
