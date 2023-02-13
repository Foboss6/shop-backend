import { BadRequestException, HttpException } from '@nestjs/common';

const er = new HttpException('Boo', 400);

console.log(er instanceof BadRequestException);

interface IObj {
  field: string;
}

class Obj {
  field: string;
  constructor(field: string) {
    this.field = field;
  }
}

const o = new Obj('boo');

console.log(o instanceof Obj);
console.log({ field: 'coo' } instanceof Obj);
