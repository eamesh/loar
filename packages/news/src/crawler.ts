import puppeteer from 'puppeteer-extra';
// add stealth plugin and use defaults (all evasion techniques)
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { writeFileSync, readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { Cookie } from 'puppeteer';

puppeteer.use(StealthPlugin())

export interface IFinance {
  cookies: Cookie,
  crumb: string
}

export const getPuppeteer = async (): Promise<any> => {
  const tmpPath = resolve('tmp');
  const cacheFile = resolve(tmpPath, 'crumb');

  if (existsSync(cacheFile)) {
    const cache = readFileSync(cacheFile).toString();
    return JSON.parse(cache) as IFinance;
  }

  // puppeteer usage as normal
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  })

  const page = await browser.newPage()
  await page.goto('https://www.cnbc.com/world/');
  await page.screenshot({ path: resolve(tmpPath, 'most.png'), fullPage: true })

  // const crumb = await browser.newPage()
  // await crumb.goto('https://query2.finance.yahoo.com/v1/test/getcrumb')
  // const element = await crumb.waitForSelector('body > pre');
  // const html = await crumb.evaluate(item => {
  //   return item?.innerHTML;
  // }, element)

  // const cookies = await crumb.cookies()
  // console.log(cookies);
  // const a1Cookie = cookies.find(item => item.name === 'A1');
  // // await page.waitForTimeout(5000)
  // // console.log(await crumb.cookies());
  // await crumb.screenshot({ path: resolve(tmpPath, 'crumb.png'), fullPage: true })
  // await browser.close()

  // const result: IFinance = {
  //   cookies: a1Cookie!,
  //   crumb: html!
  // };
  // // 缓存 crumb
  // writeFileSync(cacheFile, JSON.stringify(result));

  // return result;
}
