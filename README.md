# Fusion Reaction

This project is aimed at providing a platform to delveop and test Fusion javascript pipeline stages. 

Some developers may find it more comfortable to work in a more robust IDE (Websotrm, VS, Atom,...) 
than the default code editor provided by the Fusion Admin UI.

Jest (https://jestjs.io/) is the driving force as a JS testing framework. It was chosen because of a passing interest and exploration of 
ReactJS for unrelated UI work. Jest seems robust, popular, and flexible enough to handle the pipeline development and testing needs here.

If the developer (me) know NodeJS better, that would likely have been a better starting point. As it is, 
just feel free to ignore the ReactJS parts, and focus on `npm test`. 

Currently work and testing is done in Webstorm, so there may need to be some extra configs/changes to call tests from the CLI.


## TODO

- Flesh out more pipeline ojbects, including mock response, context,... object.
- implement more of the mock methods in the current mock opbject (Response, PipelineDocument...)
- look at possibility of leveraging nashorn or graalvm to allow JS to access Java classes
- look at any UI needs/benefits (to help justify React wrapping)  