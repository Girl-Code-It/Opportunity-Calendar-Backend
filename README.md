## Opportunity Calendar

[![Build Status](https://www.travis-ci.com/Girl-Code-It/Opportunity-Calendar-Backend.svg?branch=develop)](https://www.travis-ci.com/Girl-Code-It/Opportunity-Calendar-Backend)

Opportunity Calendar is the one-stop place to refer important opportunities available in tech-space like newly posted jobs, internships, hackathons, tech-conferences, scholarships etc.

The frontend of the same project can be found [here](https://github.com/Girl-Code-It/Opportunity-Calendar-Frontend)

## Table of Contents

1. [Install](#install)
2. [Introduction](#introduction)
3. [Technology Stack](#Technology-Stack)
4. [Documentation](#Documentation)
5. [Bugs and Feature Requests](#Bugs-and-Feature-Requests)
6. [Contributing](#contributing)
7. [Copyright and license](#copyright-and-license)

<h2 align="center">Install</h2>

```
# clone the repository to your local machine
$ git clone https://github.com/<YOUR-GITHUB-USERNAME>/Opportunity-Calendar-Backend.git

# navigate to the project's directory 
$ cd Opportunity-Calendar-Backend

# install all the relevant (dev) dependencies using npm
$ npm install

# Copy .env.example to .env
$ It is recommended to install [MongoDB Compass](https://www.mongodb.com/try/download/compass) to visualize data in mongodb

# Start application
$ npm run start:dev

# Visit http://localhost:3030/ in your browser
```

<h2 align="center">Introduction</h2>
Opportunity Calendar provides instant information on newly posted opportunuties for techies. There are times when applicants miss deadlines or get to know about available opportunties only after the deadline of their application passes. 
Updates about following opportunities are available:

- Full Time Job Opportunties
- Internship Opportunties
- Scholarships
- Tech-Conferences
- Coding Competitions
- Hackathons

<h2 align="center">Technology Stack</h2>

- **Server Enviornment** - NodeJS
- **Framework** - ExpressJS
- **Database** - MongoDB
- **Cloud database service** - MongoDB Atlas

<h2 align="center">Documentation</h2>

-   [**Models**](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend/tree/develop/documentation/models.md)
-   [**List of APIS**](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend/tree/develop/documentation/APIS.md)
- [**New Ideas**](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend/tree/develop/documentation/ideas.md)
-   [**Swagger Documentation**]()

<h2 align="center">Project Structure</h2>

We will structure our application using the controller, service, and, manager pattern so our app will be broken into the managers, services, and controllers. The `Manager-Service-Controller` pattern breaks up the business layer of the app into three distinct layers:

1. The `manager class` handles getting data into and out of our data store. A manager is used between the service layer and the model layer. For example, in the opportunityManager you would create methods that write/read a opportunity to and from the database.
2. The `service class` calls the manager class and can combine their data to form new, more complex business objects. It is an abstraction between the controller and the manager.
3. A `controller` contains very little logic and is used to make calls to services.

[Documenting API using JSDoc and Swagger](https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do)

<h2 align="center">Bugs and Feature Requests</h2>

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend/blob/develop/contributing.md) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend/issues/new).

<h2 align="center">Contributing</h2>

We want contributing to Opportunity Calendar to be enjoyable and educational for everyone. We would love to have your contributions.
To get started have a look at our [documentation on contributing](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend/blob/develop/contributing.md).

<h2 align="center">✨ Our Contributors ✨</h2>

<a href="https://github.com/Girl-Code-It/Opportunity-Calendar-Backend">
  <img src="https://contrib.rocks/image?repo=Girl-Code-It/Opportunity-Calendar-Backend" />
</a>

<h2 align="center">Copyright and license</h2>

Code released under the [MIT License](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend/blob/develop/LICENSE).
