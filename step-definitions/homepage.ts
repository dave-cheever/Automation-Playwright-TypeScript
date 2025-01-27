// step-definitions/homepage.ts
import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";
import { OurWorld } from "../types";

// Using a cucumber expression

// declare var actualTableNumber:string;


function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

Given("I view {string}", async function (this: OurWorld, url: string) {
  // Use the page instance from the World instance to navigate
  await this.page.goto(`https://${url}`);
});

// Using a regular expression
When("I click {string}", async function (this: OurWorld, text: string) {
  // Scroll to the link...
  await this.page.$eval(`"${text}"`, (element) => {
    element.scrollIntoView();
  });
  // ...then click it now it's within the viewport
  await this.page.click(`"${text}"`);
});


// textContent includes whitespace, so use this method to trim
// See https://stackoverflow.com/a/42921059
const trimExcessWhiteSpace = (s: string) =>
  s.replace(/[\n\r]+|[\s]{2,}/g, " ").trim();
