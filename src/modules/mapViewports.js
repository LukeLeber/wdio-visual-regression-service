const debug = require('debug')('wdio-visual-regression-service');
export async function mapViewports(browser, delay, viewports = [], iterateeScreenshot, iterateeProcess) {

  debug('7');
  const results = [];

  if (!viewports.length) {
    const viewport = await browser.getViewportSize();
    const params = await iterateeScreenshot(viewport);
    debug('10');
    results.push(iterateeProcess(...params));
  } else {
    for (let viewport of viewports) {
      await browser.setViewportSize(viewport);
      await browser.pause(delay);
      const params = await iterateeScreenshot(viewport);
    debug('11');

      results.push(iterateeProcess(...params));
    }
  }

  return Promise.all(results);
}

export async function mapOrientations(browser, delay, orientations = [], iterateeScreenshot, iterateeProcess) {
  debug('8');
  const results = [];

  if (!orientations.length) {
    const orientation = await browser.getOrientation();
    const params = await iterateeScreenshot(orientation);
    results.push(iterateeProcess(...params));
  } else {
    for (let orientation of orientations) {
      await browser.setOrientation(orientation);
      await browser.pause(delay);
      const params = await iterateeScreenshot(orientation);
      results.push(iterateeProcess(...params));
    }
  }

  return Promise.all(results);
}
