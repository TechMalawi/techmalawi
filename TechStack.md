# Our Technology Stack

This document outlines our technology stack for this project and the guidelines
for you to contribute.

### The Stack

1. NextJs
2. ReactJs
3. TailwindCss
4. Eslint
5. Prettier
6. Husky

We are using `NextJs` with JavaScript because it will help us with SEO among other things.
We also decided to pick up `ReactJs` and `JavaScript` because we feel like its a technology that most of the peple
are comfortable with. For our styling, we are using `TailwindCss`. We are using
`Husky` to help us with our Git Hooks [Pre Commits, Push]. It helps us maintain standards and make sure
contributors don't push code that will break our code base. We do have `Pretier` and
`Eslint` configured to enforce our code style and standards

### Files You Don't Want To Change

Please do not change the files below unless you have been given the permission to do so. These files are there to help
you and all of us
to write better code. If you change any of these files your contributions will be rejected.

1. Anything inside `.husky` folder
2. `.eslintrc.json`
3. `.pretterrc.json`

## How The Project Is Structured

This project is structured in a simple NextJs architecture. These are some guidelines that will help your MRs to be
accepted

1. For any components that will be shared across multiple pages, please put them inside `core/components` directory
2. For components that are specific to a particular page, put them inside the relevant directory. For example, if I am
   creating a `ProfileCard` component, I should put it inside the `contributors` directory inside the pages folder

## Your Pull Requests

Make sure your pull requests are fully descriptive.
They should also contain good steps on how to test the changes made properly. 
