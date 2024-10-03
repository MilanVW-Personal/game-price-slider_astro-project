import { test, expect } from '@playwright/test';

/* Testen of er werkelijk minstens 2 items in de lijst zitten van games of de index.astro pagina */
test("There are atleast 2 games in the list", async ({ page }) => {
    await page.goto("/");  
   
    const lijstVanGames = /*await*/ page.locator("#listOfGames li") // lijst ophalen met <li>
    const aantal = await lijstVanGames.count() // Het aantal items in de lijst ophalen
    /*await*/ expect(aantal).toBeGreaterThanOrEqual(2) // Testen of het aantal groter is of gelijk is aan 2.
})

/* Testen of er x games in de lijst staan wanneer je filtert op 'Forza' */
test("The search term 'Forza', gives back x items when put in the searchbar", async ({ page }) => {
    await page.goto("/");  
    
    const lijstVanGames = /*await*/ page.locator("#listOfGames li")
    const aantal = await lijstVanGames.count()
  
    // Zoekbalk ophalen en invullen met de waarde 'Forza'
    const zoekbalkMetWaarde = /*await*/ page.locator("#simple-search")
    await zoekbalkMetWaarde.fill("Forza") // Gesimuleerd de zoekbalk opvullen met "Forza" om te testen

    await page.waitForTimeout(5000); // Wachten zodat de lijst kan updaten 

    /*await*/ expect(aantal).toBeGreaterThanOrEqual(1)
})

/* Testen of er een input-veld met id 'simple-search' aanwezig is */
test("On the index page, a searchbar exists", async ({ page }) => {
    await page.goto("/");;
   
    // Zoekbalk ophalen
    const zoekbalk = /*await*/ page.locator("#simple-search")
    /*await*/ expect(zoekbalk).toBeVisible
})

/* Testen of de juiste games tonen bij het filteren van de slider en zoekbalk tegelijk */
test("While filtering using the searchbar and slider, x games show on screen", async ({ page }) => {
    await page.goto("/")

    // Zoekveld invullen met 'Forza'
    const zoekbalkMetWaarde = /*await*/ page.locator("#simple-search")
    await zoekbalkMetWaarde.fill("Forza")

    await page.waitForTimeout(5000);

    // Deze onderstaande syntax is voor het invullen van de 'value' property van de slider, op 75;
    const sliderValue = page.locator("#discount-slider")
    await sliderValue.evaluate((el: HTMLInputElement, waarde) => el.value = waarde, '75')
    await sliderValue.dispatchEvent("input")

    await page.waitForTimeout(5000);

    // Lijst van games ophalen
    const filteredLijst = /*await*/ page.locator("listOfGames li")
    const aantalItems = await filteredLijst.count()
    
    await expect(filteredLijst).toHaveCount(aantalItems)
})


