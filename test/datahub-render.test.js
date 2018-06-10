'use strict';

import {
  driver,
  BASE_URL,
} from './helper';

describe('test/datahub-render.test.js', () => {
  describe('home page render testing', () => {
    before(() => {
      return driver
        .initWindow({
          width: 1000,
          height: 800,
          deviceScaleFactor: 2,
          userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36 Language/zh-CN',
        });
    });

    afterEach(function () {
      return driver
        .coverage()
        .saveScreenshots(this);
    });

    after(() => {
      return driver
        .openReporter(false)
        .quit();
    });

    it('home page render should be ok', () => {
      return driver
        .getUrl(BASE_URL)
        .sleep(1000)
        .elementByCss('[data-accessbilityid="go-btn-dashboard"]')
        .hasText('立即开始');
    });

    it('home page render should be ok', () => {
      return driver
        .getUrl(BASE_URL)
        .sleep(1000)
        .elementByCss('[data-accessbilityid="go-btn-dashboard"]')
        .click()
        .elementByCss('h1.title')
        .hasText('DataHub');
    });
  });
});