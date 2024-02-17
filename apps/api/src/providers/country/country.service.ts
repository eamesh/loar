import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface ICountryItem {
  code: string;
  name: string;
  tel: string;
  py: string;
  en: string;
}

export interface ICountryTree {
  type: string;
  child: ICountryItem[];
}

export interface ICountryTrees {
  [key: string]: ICountryItem[];
}

export type CountryTrees = ICountryTree[];

@Injectable()
export class CountryService {
  constructor(private readonly prisma: PrismaService) {}

  async listTree() {
    const result = await this.prisma.country.findMany();

    const countryTreesFlat: ICountryTrees = {};

    result.forEach(function ({ py, name, code, tel, en }) {
      const first = py.substring(0, 1).toUpperCase();

      if (!countryTreesFlat[first]) {
        countryTreesFlat[first] = [];
      }

      const currentTree = countryTreesFlat[first] ?? [];

      currentTree.push({
        code,
        name,
        tel,
        py,
        en,
      });
    });

    const countryTrees: CountryTrees = [];

    Object.keys(countryTreesFlat).forEach((type) => {
      countryTrees.push({
        type,
        child: countryTreesFlat[type],
      });
    });

    return countryTrees;
  }
}
