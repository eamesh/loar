import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import puppeteer from 'puppeteer';
import { ArticleService } from 'src/modules/article/article.service';

@Injectable()
export class HkNewsTask implements OnModuleInit {
  constructor(
    private readonly prisma: PrismaService,
    private readonly article: ArticleService,
  ) {}

  async onModuleInit() {
    Logger.log(`爬取 Hk 新闻`, HkNewsTask.name);
    this.handle();
  }

  @Cron(CronExpression.EVERY_30_MINUTES)
  async handle() {
    try {
      const articles = await this.crawler();
      await this.article.createCrawler(articles, 'HKEX');
    } catch (error) {
      Logger.error(`爬取 Hk 新闻失败`);
    }
  }

  async crawler() {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
      headless: 'shell',
      args: ['--no-sandbox'],
      defaultViewport: {
        width: 1920,
        height: 1080,
      },
    });
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto(
      'https://www.hk01.com/channel/396/%E8%B2%A1%E7%B6%93%E5%BF%AB%E8%A8%8A',
    );

    //   const listDom = await page.$("#Home\ Page\ International-riverPlus")
    //   const lists = await listDom.$$eval('div', node => node.map(n => n.innerHTML))

    const options = await page.$$(
      '.content-card.content-card--big-image.content-card--social-reaction-clickable.content-card--article',
    );

    const targets = [];
    for (let index = 0; index < options.length; index++) {
      const option = options[index];
      const aLength = await option.$$eval(
        '.card-image__inner > a',
        (node) => node.length,
      );
      if (aLength === 1) {
        const a = await option.$eval(
          '.card-image__inner > a',
          (node) => node.href,
        );
        targets.push(a);
      }
    }

    // console.log(targets)
    const articles = [];
    for (let index = 0; index < targets.length; index++) {
      const target = targets[index];
      await page.goto(target);

      try {
        const thumb = await page.$eval(
          '.article-grid__top-media-section img',
          (node) => node.src,
        );
        const groups = await page.$$eval(
          '#article-content-section > .break-words',
          (nodes) => nodes.map((node) => node.innerHTML),
        );
        const content = groups.join('\r\n');
        const title = await page.$eval(
          '#articleTitle',
          (node) => node.innerHTML,
        );
        // console.log(thumb)

        // await downloadImage(thumb, `${index}.jpg`)

        articles.push({
          thumb,
          content,
          title,
          source: title,
        });
      } catch (error) {
        // console.log(error)
      }
    }

    Logger.log(`爬取 Hk 新闻 ${articles.length}`);

    //   const pages = await browser.pages()
    //   await Promise.all(pages.map(async (item) => await item.close()))
    //   await page.screenshot({ path: resolve('./', 'most.png'), fullPage: true })
    await browser.close();

    return articles;
  }
}
