const createOrder = async (done, product, category, embellishment) => {
  try {
    // select product and category
    await page.waitForSelector(product)
    await page.click(product)
    await page.waitForSelector(category)
    await page.screenshot({ path: 'screenshot.png' })
    await page.click(category)

    // select embellishment
    await page.screenshot({ path: 'screenshot2.png' })
    await page.waitForSelector(embellishment)
    await page.screenshot({ path: 'screenshot3.png' })
    await page.click(embellishment)

    // submit design
    await page.screenshot({ path: 'screenshot4.png' })
    await page.waitForSelector('[data-ui="design-submit"]')
    await page.click('[data-ui="design-submit"]')
    await page.screenshot({ path: 'screenshot5.png' })

    // approve design
    await page.waitForSelector('[data-ui="design-approve"]')
    await page.click('[data-ui="design-approve"]')
    await page.waitForNavigation()
    await page.screenshot({ path: 'screenshot6.png' })
  } catch (e) {
    console.error(e)
  }
  done()
}

describe('Products - Stainless', () => {
  beforeAll(async () => {
    jest.setTimeout(20000)
    await page.goto('http://yeticustomshop.com/products')
  })

  // afterAll(async () => {
  //   await page.close()
  // })

  it('should add 20oz Stainless, Air Force Primary ', (done) => createOrder(done, '[data-select="rambler-tumbler-20oz"]', '[title="Shop College Logo Custom YETI Ramblers"]', '[data-key="air-force-primary-1"]'))

  // test('should add 30oz Stainless, Air Force Primary ', (done) => createOrder(done, '[data-select="rambler-tumbler-30oz"]', '[title="Shop College Logo Custom YETI Ramblers"]', '[data-key="air-force-primary-1"]'))

})
