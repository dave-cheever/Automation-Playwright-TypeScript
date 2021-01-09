# Automation-Playwright-TypeScript
- use feature file to change the items to order 
- Drinks menu is the only menu automated
- Price, quantity, upgrades, table number, item is validated although i encountered a bug in the pricing of each items so there will be price discrepancy.
- Discounts not included cause i don't have the code for discount

-run in terminal-
-npm init -y
-npm i playwright @cucumber/cucumber typescript ts-node @types/node -D
-npx -p typescript tsc --init

-Update node modules-
-goto node_modules>@types>node>TS globals.d.ts
	-Then add this line of code "browser: typeof Browser;" under the "interface Global" line 468

-npm run test

