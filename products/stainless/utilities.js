let browser

const createOrder = async (done, product, category, embellishment) => {
  try {
    browser = await puppeteer.launch()
    let page = await browser.newPage()
    await page.goto('http://yeticustomshop.com/products')

    // select product and category
    await page.waitForSelector(product)
    await page.click(product)
    await page.waitForSelector(category)
    // await page.screenshot({ path: 'screenshot.png' })
    await page.click(category)

    // select embellishment
    // await page.screenshot({ path: 'screenshot2.png' })
    await page.waitForSelector(embellishment)
    // await page.screenshot({ path: 'screenshot3.png' })
    await page.click(embellishment)

    // submit design
    // await page.screenshot({ path: 'screenshot4.png' })
    await page.waitForSelector('[data-ui="design-submit"]')
    await page.click('[data-ui="design-submit"]')
    // await page.screenshot({ path: 'screenshot5.png' })

    // approve design
    await page.waitForSelector('[data-ui="design-approve"]')
    await page.click('[data-ui="design-approve"]')
    await page.waitForNavigation()
    // await page.screenshot({ path: 'screenshot6.png' })

    await browser.close()
    done()
  } catch (e) {
    console.error(e)
    done()
  }
}

export default createOrder
