# gold-ember-ts

This app, originally created on Dec 17, 2021 is meant to serve as a template for anyone interested in TailWind and Typescript. Integrating Tailwind into an Ember app, needs a few steps described in [this GitHub repository](https://github.com/chrism/emberjs-tailwind-purgecss) and rephrased in this [dev.to blog post](https://dev.to/jamesbyrne/using-tailwindcss-with-ember-41el). However, a final step is needed which is overlooked by the two authors. It might be that they didn't need to take this step as they used Tailwind 1.0.3. That version of Tailwind is quite old, though. So, here you go with a working Ember + Tailwind 3 project which also utilizes Typescript.

### The missing step
It is necessary to specify the content path in tailwind.config.js, like this;
`content: ['./app/**/*.{hbs,js}']`


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd gold-ember-ts`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details. Please be notified that you need to take care of nullable properties in your auto-generated test. Let me illustrate it by an example. The following line may be included in such an auto generated test:
`assert.equal(this.element.textContent.trim(), 'template block text');`

The build process will get stuck, though, complaining that something might be null. You'll need to update the line to avoid that possibility. Like this:
`assert.equal(this.element.textContent?.trim(), 'template block text');`

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
