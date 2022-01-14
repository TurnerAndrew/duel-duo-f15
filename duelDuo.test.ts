
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking the draw button displays bot choices', async () => {
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking add to duo button displays the div with id of "player-duo"', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.css(".bot-btn")).click()
    let playerDuo = await driver.findElement(By.id('player-duo'))
    let displayed = playerDuo.isDisplayed()
    expect(displayed).toBeTruthy()   
})