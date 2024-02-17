import { PrismaClient } from "../generated/prisma-client";
import conturies from './country.json'
import us from './us.json'
import hkex from './hkex.json'

const prisma = new PrismaClient();

async function main() {
  const result = conturies.result;

  for (let index = 0; index < result.length; index++) {
    const { shortCode, name, en, tel, pinyin } = result[index];

    const data = {
      code: shortCode,
      name,
      en,
      tel,
      py: pinyin
    };
    await prisma.country.upsert({
      where: {
        py_tel_name: {
          py: pinyin, tel, name
        }
      },
      create: data,
      update: data
    })
  }

  const usSymbols = us.result.records;

  for (let index = 0; index < usSymbols.length; index++) {
    const {id, ...args} = usSymbols[index];
    const data = {
      ...args,
      syncMarket: 'US',
      name: args.showName
    } as any

    // const stock = await prisma.stock.findFirst({
    //   where: {
    //     code: args.symbol
    //   }
    // })

    // if (stock) {
    //   data.name = stock.cname
    // }

    await prisma.stockSymbol.upsert({
      where: {
        symbol_market: {
          symbol: args.symbol,
          market: args.market
        }
      },
      create: data,
      update: data
    })
  }

  const hkSymbols = hkex.result.records;

  for (let index = 0; index < hkSymbols.length; index++) {
    const {id, ...args} = hkSymbols[index];
    const data = {
      ...args,
      syncMarket: 'HK',
      name: args.showName
    } as any

    const stock = await prisma.stock.findFirst({
      where: {
        code: args.symbol
      }
    })

    if (stock) {
      data.name = stock.cname
    }

    await prisma.stockSymbol.upsert({
      where: {
        symbol_market: {
          symbol: args.symbol,
          market: args.market
        }
      },
      create: data,
      update: data
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
