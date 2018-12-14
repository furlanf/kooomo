# NgKooomo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Kooomo Frontend Test

The goal of this exercise is to test your knowledge of javascript, html5 and css, not the level you have using a specific framework.
You can use the tools/frameworks that you prefer.

---

## MockUp

![preview](./mockup/technical_test.jpg)

> **NOTE:** A PSD version is included in the mockup folder.

We only provide a desktop mockup.Please adapt the design to make it work on phones/tablets. We suggest you to use Bootstrap as frontend framework.

---

## Tasks

Good Endpoint:
'http://interviews-env-1.b8amvayt6w.eu-west-1.elasticbeanstalk.com/products'

Search Endpoint:
'http://interviews-env-1.b8amvayt6w.eu-west-1.elasticbeanstalk.com/products?search=searchTerm'

Example:
'http://interviews-env-1.b8amvayt6w.eu-west-1.elasticbeanstalk.com/products?search=surf'

1. Consume the good endpoint through AJAX and render the result on-screen following the mockup provided.
2. Add search functionality to the UI that uses the search endpoint. The Search results should be displayed substituting the normal products.
3. Display an error msg if there is an issue with the requests.

#### Extras

1. If a search term is called a second time then fetch it from a local JS cache rather than hitting the network.
2. Any other features that you think would be nice to have. ;)
