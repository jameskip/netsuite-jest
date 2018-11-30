const puppeteer = require('puppeteer')

let browser

const createOrder = async (done, product, category, embellishment, expected) => {
  let page = await browser.newPage()
  await page.goto('http://yeticustomshop.com/products')

  // select product
  await page.waitForSelector(product)
  await page.click(product)

  if (expected) {
    // select category
    await page.waitForSelector(category)
    // await page.screenshot({ path: `${product}.png` })
    await page.click(category)

    // select embellishment
    // await page.screenshot({ path: `${product}-2.png` })
    await page.waitForSelector(embellishment)
    // await page.screenshot({ path: `${product}-3.png` })
    await page.click(embellishment)

    // submit design
    // await page.screenshot({ path: `${product}-4.png` })
    await page.waitForSelector('[data-ui="design-submit"]')
    await page.click('[data-ui="design-submit"]')
    // await page.screenshot({ path: `${product}-5.png` })

    // approve design
    await page.waitForSelector('[data-ui="design-approve"]')
    await page.click('[data-ui="design-approve"]')
    // await page.waitForNavigation()
    // await page.screenshot({ path: `${product}-6.png` })
  }

  await page.close()

  done()
}

beforeAll(async () => {
  jest.setTimeout(50000)
  browser = await puppeteer.launch()
})

afterAll(async () => {
  await browser.close()
})

// Colegiate
test('should add 20oz Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-tumbler-20oz"]', '[data-title="Collegiate"]', '[data-key="air-force-primary-1"]', true))
test('should add 30oz Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-tumbler-30oz"]', '[data-title="Collegiate"]', '[data-key="air-force-primary-1"]', true))
test('should not add Mug Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-mug-14oz"]', '[data-title="Collegiate"]', '[data-key="air-force-primary-1"]', false))
test('should add Lowball Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-lowball"]', '[data-title="Collegiate"]', '[data-key="air-force-primary-1"]', true))
test('should add Colster Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-colster"]', '[data-title="Collegiate"]', '[data-key="air-force-primary-1"]', true))
test('should add Bottle 18oz Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-bottle-18oz"]', '[data-title="Collegiate"]', '[data-key="air-force-primary-1"]', true))
test('should add Bottle 26oz Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-bottle-26oz"]', '[data-title="Collegiate"]', '[data-key="air-force-primary-1"]', true))
test('should add Bottle 36oz Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-bottle-36oz"]', '[data-title="Collegiate"]', '[data-key="air-force-primary-1"]', true))
test('should not add Jug 64oz Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-jug-64oz"]', '[data-title="Collegiate"]', '[data-key="air-force-primary-1"]', false))
test('should not add Jug 128oz Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-jug-128oz"]', '[data-title="Collegiate"]', '[data-key="air-force-primary-1"]', false))

// Greek
test('should add 20oz Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-tumbler-20oz"]', '[data-title="Greek Society"]', '[data-key="alpha-chi-omega"]', true))
test('should add 30oz Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-tumbler-30oz"]', '[data-title="Greek Society"]', '[data-key="alpha-chi-omega"]', true))
test('should not add Mug Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-mug-14oz"]', '[data-title="Greek Society"]', '[data-key="alpha-chi-omega"]', false))
test('should add Lowball Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-lowball"]', '[data-title="Greek Society"]', '[data-key="alpha-chi-omega"]', false))
test('should add Colster Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-colster"]', '[data-title="Greek Society"]', '[data-key="alpha-chi-omega"]', false))
test('should add Bottle 18oz Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-bottle-18oz"]', '[data-title="Greek Society"]', '[data-key="alpha-chi-omega"]', true))
test('should add Bottle 26oz Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-bottle-26oz"]', '[data-title="Greek Society"]', '[data-key="alpha-chi-omega"]', true))
test('should add Bottle 36oz Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-bottle-36oz"]', '[data-title="Greek Society"]', '[data-key="alpha-chi-omega"]', true))
test('should not add Jug 64oz Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-jug-64oz"]', '[data-title="Greek Society"]', '[data-key="alpha-chi-omega"]', false))
test('should not add Jug 128oz Stainless, Air Force Primary ', done => createOrder(done, '[data-select="rambler-jug-128oz"]', '[data-title="Greek Society"]', '[data-key="alpha-chi-omega"]', false))
