# AdoptionPlaywright
Playing some basic with playwright on page https://www.thetestroom.com/webapp/index.html

## Intsallation:
- make sure node.js is installed  - check `NodeJS` version  
  `node -v` 
- run command 'npm install'
  
### Runing tests

- run tests without browser GUI  
  `npx playwright test`
- run tests with browser GUI  
  `npx playwright test --headed`
- view report  
  `npx playwright show-report`
- run Trace Viewer on zip file  
  `npx playwright show-trace trace.zip`
- run tests form exact file  
  `npx playwright test tests/nameOfFile.spec.ts`

### Prettier

- install Prettier  
  `npm install --save-dev --save-exact prettier`
- configure Prettier

  - exlude files in `.prettierignore`

    ```
    package-lock.json
    playwright-report
    test-results

    ```

  - set rules in `.prettierrc.json`
    ```
    {
        "singleQuote": true,
        "endOfLine": "auto"
    }
    ```

- run Prettier  
  `npx prettier --write .`
- additionaly you can install VSC extension: **Prettier**
  - and set default VSC formatter as Prettier (right mouse button and `Format document with ...`)


