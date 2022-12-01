# gold-ember-ts

This app, originally created on Dec 17, 2021 is meant to serve as a template for anyone interested in TailWind and Typescript. Integrating Tailwind into an Ember app, needs a few steps described in [this GitHub repository](https://github.com/chrism/emberjs-tailwind-purgecss) and rephrased in this [dev.to blog post](https://dev.to/jamesbyrne/using-tailwindcss-with-ember-41el). However, there is a mistake and an important final step is overlooked by the two authors. It might be that they didn't need to take this step as they used Tailwind 1.0.3. That version of Tailwind is quite old, though. So, here you go with a working Ember + Tailwind 3 project which also utilizes Typescript.

### The mistake
Instead of creating `app/tailwind/config.js`, you should create `app/tailwind.config.js`. Then, in `ember-cli-build.js` import it like this:

difff```
- require('tailwindcss')('./app/tailwind/config.js'),
- + require('tailwindcss')('./app/tailwind.config.js'),,
```

### The missing step
It is necessary to specify the content path in tailwind.config.js, like this;
`content: ['./app/**/*.{hbs,js,ts}']`




## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
