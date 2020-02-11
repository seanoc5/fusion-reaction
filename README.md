# Fusion Reaction

This project is aimed at providing a platform to delveop and test Fusion javascript pipeline stages. 

Some developers may find it more comfortable to work in a more robust IDE (Websotrm, VS, Atom,...) 
than the default code editor provided by the Fusion Admin UI.

Jest (https://jestjs.io/) is the driving force as a JS testing framework. It was chosen because of a passing interest and exploration of 
ReactJS for unrelated UI work. Jest seems robust, popular, and flexible enough to handle the pipeline development and testing needs here.

If the developer (me) know NodeJS better, that would likely have been a better starting point. As it is, 
just feel free to ignore the ReactJS parts, and focus on `npm test`. 

Currently work and testing is done in Webstorm, so there may need to be some extra configs/changes to call tests from the CLI.

## Getting started
- Download or `git clone` the project.
- Ensure `npm` is installed (version...?)
- Any other dependencies? (I don't think so)
- Run `npm init` from the `fusion-reaction` directory (it will download a third of the internet in dependencies, be patient....)
- Run `npm test` from the `fusion-reaction` directory (try `a` for running all tests--found by regex via jest)
- copy/paste one of the test files as a template for developing your own custom javascript stage:
    - `./src/components/fusion/index/indexStageDevelopment.unit.test.js`
    - `./src/components/fusion/query/queryStageDevelopment.unit.test.js`  
- add any helpful snippets/examples or extensions of the mock objects back to the repo :-)

## Notes
`Request.js` is a mock-object to provide basic mocked functionality for a query pipeline.
`PipelineDocument.js` is the mock object for index pipeline work. These are just initial starting points.

`App.test.js` fails at the moment. It is a default/template reach component test, and I changed the "app" content 
which broke the test. I've left it broken out of laziness, but also to show what a broken test displays (FYI).

If you use `jest`'s default testing approach, it will watch for changes in test files, and automatically run test files 
(I am still learning about this).

I use webstorm (trial) for builtin react/jest code completion, and javascript debugging.

There is currently nothing useful `React`-wise, but if you are curious, you could do something like:
`npm start` or 
`yarn start`

## TODO

- Add setup/automation to "push" changes to a managed javascript stage/blob in fusion (thanks Erik)
  - this could avoid copy-paste of 'finished' javascript from IDE into Admin-UI
  - might also help promote more automated testing against a live fusion node (TBD) 
- Flesh out more pipeline ojbects, including mock response, context,... object.
- implement more of the mock methods in the current mock opbject (Response, PipelineDocument...)
- look at possibility of leveraging nashorn or graalvm to allow JS to access Java classes
- look at any UI needs/benefits (to help justify React wrapping)  