# **eCommerce-Website**

This is a personal project for my practice where I try to build an eCommerce website using Angular. This readme.md file contains all the steps I followed throughout this project.

<br>

## Step #1 - *Setup*
- install npm
- install angular
- import angular modules into app.modules.ts
- import styling (css) form tailwind
    - create tailwind config file (define target files in the content array)
    - declare tailwind in the main style.css file

<br>

## Step #2 - *Create Components*
- create a folder for all components
- for Menu Bar
    - ng g c header
- create a folder for all pages
    - ng g c home // this is for the home page or the landing page
    - within app-routing.module.ts, define the route for the home component
    - within app.component.ts, add <router-outlet> tag to use home component
    - create a folder for components within pages
        - create a new component called 'products-header'
        - the conent within the home container will be called using their selector tags

        > 57:30 | Next we add filters to the side panel

        - create a new component called 'filters' - this will be on the side panel to choose categories
        - create a new component called 'product-box' - this will display the items on the home page

    > 1:26:55 | Next we add cart page

    - create a new component called 'cart' - this will be the cart page
    - create a new folder called 'models' within the 'app' folder - this will contain definitions for our interfaces

    > 1:58:00 | Next we implement the cart logic

    - we start by adding functionality to the cart button on the products, on the home page
    - we create a folder called 'services' within the 'app' folder
        - we create the first service called 'cart' within this new folder
        - this serivces has to be manually imported into the app.module.ts -> within the 'provides' array
    - next we update the cart icon at the top of the home page to display & update accurate info
    - in a similar way, we update the cart page

<br>

## Step #2 - *Implement the API*
> 2:48:04 | Next we implement the API
