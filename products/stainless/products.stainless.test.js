const puppeteer = require('puppeteer')

let browser

const createOrder = async (done, product, category, embellishment) => {
  jest.setTimeout(50000)
  let page = await browser.newPage()
  await page.goto('http://yeticustomshop.com/products')

  // select product and category
  await page.waitForSelector(product)
  await page.click(product)
  await page.waitForSelector(category)
  await page.screenshot({ path: `${product}.png` })
  await page.click(category)

  // select embellishment
  await page.screenshot({ path: `${product}-2.png` })
  await page.waitForSelector(embellishment)
  await page.screenshot({ path: `${product}-3.png` })
  await page.click(embellishment)

  // submit design
  await page.screenshot({ path: `${product}-4.png` })
  await page.waitForSelector('[data-ui="design-submit"]')
  await page.click('[data-ui="design-submit"]')
  await page.screenshot({ path: `${product}-5.png` })

  // approve design
  await page.waitForSelector('[data-ui="design-approve"]')
  await page.click('[data-ui="design-approve"]')
  await page.waitForNavigation()
  await page.screenshot({ path: `${product}-6.png` })

  done()
}

beforeAll(async () => {
  browser = await puppeteer.launch()
})

afterAll(async () => {
  await browser.close()
})

test('should add 20oz Stainless, Air Force Primary ', (done) => createOrder(done, '[data-select="rambler-tumbler-20oz"]', '[title="Shop College Logo Custom YETI Ramblers"]', '[data-key="air-force-primary-1"]'))

// test('should add 30oz Stainless, Air Force Primary ', (done) => createOrder(done, '[data-select="rambler-tumbler-30oz"]', '[title="Shop College Logo Custom YETI Ramblers"]', '[data-key="air-force-primary-1"]'))

// test('should add Mug Stainless, Air Force Primary ', (done) => createOrder(done, '[data-select="rambler-mug-14oz"]', '[title="Shop College Logo Custom YETI Ramblers"]', '[data-key="air-force-primary-1"]'))

test('should add Lowball Stainless, Air Force Primary ', (done) => createOrder(done, '[data-select="rambler-lowball"]', '[title="Shop College Logo Custom YETI Ramblers"]', '[data-key="air-force-primary-1"]'))

test('should add Colster Stainless, Air Force Primary ', (done) => createOrder(done, '[data-select="rambler-colster"]', '[title="Shop College Logo Custom YETI Ramblers"]', '[data-key="air-force-primary-1"]'))

// test('should add Bottle 18oz Stainless, Air Force Primary ', (done) => createOrder(done, '[data-select="rambler-bottle-18oz"]', '[title="Shop College Logo Custom YETI Ramblers"]', '[data-key="air-force-primary-1"]'))

// test('should add Bottle 26oz Stainless, Air Force Primary ', (done) => createOrder(done, '[data-select="rambler-bottle-26oz"]', '[title="Shop College Logo Custom YETI Ramblers"]', '[data-key="air-force-primary-1"]'))

// test('should add Bottle 36oz Stainless, Air Force Primary ', (done) => createOrder(done, '[data-select="rambler-bottle-36oz"]', '[title="Shop College Logo Custom YETI Ramblers"]', '[data-key="air-force-primary-1"]'))