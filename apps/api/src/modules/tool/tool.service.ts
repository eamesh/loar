import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from 'src/providers/prisma/prisma.service';

@Injectable()
export class ToolService {
  constructor(private readonly prisma: PrismaService) {}

  async getCryptos() {
    return [];
  }

  async priceConversion(payload: any) {
    const map = new Map([
      ['BTC', 1],
      ['USD', 2781],
      ['USDT', 2781],
      ['ETH', 1027],
      ['HKD', 2792],
    ]);

    const { from, to, money } = payload;

    const params = {
      amount: money,
      convert_id: map.get(to),
      id: map.get(from),
    };

    try {
      const { data } = await axios.get(
        `https://pro-api.coinmarketcap.com/v2/tools/price-conversion`,
        {
          params,
          headers: {
            'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_KEY,
          },
        },
      );

      const price = +data.data.quote[map.get(to)].price.toFixed(5);
      return {
        price,
      };
    } catch (error) {
      console.log(error.response, params);
      throw new BadRequestException('Failed');
    }
  }
}
