# eCommerce-Website
This is a personal project for my practice where I try to build an eCommerce website using AngularJS

Step #1 - Setup
> Install npm
> Install angular
> Import angular modules into app.modules.ts
> Import styling (css) form tailwind
    > create tailwind config file (define target files in the content array)
    > declare tailwind in the main style.css file

Step #2 - Create Components
> Create a folder for all components
> for Menu Bar
    > ng g c header
> Create a folder for all pages
    > ng g c home // this is for the home page or the landing page
    > within app-routing.module.ts, define the route for the home component
    > within app.component.ts, add <router-outlet> tag to use home component
    > Create a folder for components within pages
        > create a new component called products-header
        > the conent within the home container will be called using their selector tags
    