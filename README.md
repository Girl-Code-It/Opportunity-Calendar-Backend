## Opportunity Calendar <img src="./assets/op-logo.png" width="3%">

<p>

[![Issues](https://img.shields.io/github/issues/Girl-Code-It/Opportunity-Calendar-Backend)](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend/issues)
[![PRs](https://img.shields.io/github/issues-pr/Girl-Code-It/Opportunity-Calendar-Backend)](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend/pulls)
[![Forks](https://img.shields.io/github/forks/Girl-Code-It/Opportunity-Calendar-Backend)](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend)
[![Stars](https://img.shields.io/github/stars/Girl-Code-It/Opportunity-Calendar-Backend)](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend)
[![Visits Badge](https://badges.pufler.dev/visits/Girl-Code-It/Opportunity-Calendar-Backend)](https://badges.pufler.dev)
[![Build Status](https://www.travis-ci.com/Girl-Code-It/Opportunity-Calendar-Backend.svg?branch=develop)](https://www.travis-ci.com/Girl-Code-It/Opportunity-Calendar-Backend)

</p>

Opportunity Calendar is the one-stop place to refer important opportunities available in tech-space like newly posted jobs, internships, hackathons, tech-conferences, scholarships etc.

The frontend of the same project can be found [here](https://github.com/Girl-Code-It/Opportunity-Calendar-Frontend)

## Table of Contents <img src="./assets/rocket.svg" width="3%">

1. [Install](#install)
2. [Introduction](#introduction)
3. [Technology Stack](#Technology-Stack)
4. [Documentation](#Documentation)
5. [Bugs and Feature Requests](#Bugs-and-Feature-Requests)
6. [Contributing](#contributing)
7. [Copyright and license](#copyright-and-license)

## Install <img src="./assets/test.svg" width="3%">

> Please use NPM for installing and managing dependencies. If you use Yarn, make
> sure to run `prepare` script after installing packages: `yarn prepare`. This
> will install git hooks using husky.

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

## Introduction <img src="./assets/op-about.png" width="3%">

Opportunity Calendar provides instant information on newly posted opportunuties for techies. There are times when applicants miss deadlines or get to know about available opportunties only after the deadline of their application passes.
Updates about following opportunities are available:

- Full Time Job Opportunties
- Internship Opportunties
- Scholarships
- Tech-Conferences
- Coding Competitions
- Hackathons

## Technology Stack <img src="./assets/atom.svg" width="3%">

- **Server Enviornment** - NodeJS
- **Framework** - ExpressJS
- **Database** - MongoDB
- **Cloud database service** - MongoDB Atlas
- **API Documentation** - [JSDoc and Swagger](https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do)

## Guidelines for GSSOC Participants <img src="./assets/op-guideline.png" width="3%">

We are glad to have your contributions to the project, Please make sure to read the following guidelines for the contributors.

### Community

- Join #opportunity-calendar-backend channel on Discord Server and feel free to ask any doubts regarding the project.
- Mentors are happy to help if you get stuck while making a PR, all of them are available on Discord channel.

| GitHub Usernames                               | Domain               |
| ---------------------------------------------- | -------------------- |
| [@abdus](https://github.com/abdus)             | FullStack            |
| [@Surajbokde](https://github.com/Surajbokde)   | Frontend Development |
| [@DeepanshiD](https://github.com/DeepanshiD)   | Design               |
| [@vaishali614](https://github.com/vaishali614) | Frontend Development |
| [@Manvityagi](https://github.com/Manvityagi)   | FullStack            |

### Rules

- Only 1 issue will be assigned to a participant at a time on FCFS(first come first serve) basis.
- Comment on a particular issue to get it assigned to you and start working on it after it is assigned to you.
- If you are creating a new issue, then please also comment on it mentioning that You want to work on it.
- If any issue is assigned to you, make sure you complete it before deadline.
- Deadline for issues:

| Issue Level | Max. no. of days to submit a PR | Points |
| ----------- | ------------------------------- | ------ |
| Level 0     | 2                               | 5      |
| Level 1     | 2                               | 10     |
| Level 2     | 3                               | 25     |
| Level 3     | 5                               | 45     |

- If you fail to make a PR within the deadline, then the issue will be assigned to another person in the queue.

## Documentation <img src="./assets/doc.svg" width="3%">

- [**Swagger Documentation**](https://opportunity-calendar.herokuapp.com/playground/)
- [**Models**](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend/tree/develop/documentation/models.md)
- [**List of APIS**](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend/tree/develop/documentation/APIS.md)
- [**New Ideas**](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend/tree/develop/documentation/ideas.md)

<h2>Project Structure <a><img src="./assets/op-structure.png" width="4%"></a></h2>

We will structure our application using the controller, service, and, manager pattern so our app will be broken into the managers, services, and controllers. The `Manager-Service-Controller` pattern breaks up the business layer of the app into three distinct layers:

1. The `manager class` handles getting data into and out of our data store. A manager is used between the service layer and the model layer. For example, in the opportunityManager you would create methods that write/read a opportunity to and from the database.
2. The `service class` calls the manager class and can combine their data to form new, more complex business objects. It is an abstraction between the controller and the manager.
3. A `controller` contains very little logic and is used to make calls to services.

## Bugs and Feature Request <img src="./assets/op-bug.png" width="3%">

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend/blob/develop/contributing.md) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend/issues/new).

## Contribution <img src="./assets/op-check.png" width="3%">

We want contributing to Opportunity Calendar to be enjoyable and educational for everyone. We would love to have your contributions.
To get started have a look at our [documentation on contributing](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend/blob/develop/contributing.md).

## Contributors <img src="./assets/contributors.svg" width="3%">

<a href="https://github.com/Girl-Code-It/Opportunity-Calendar-Backend">
  <img src="https://contrib.rocks/image?repo=Girl-Code-It/Opportunity-Calendar-Backend" />
</a>

## License <img src="./assets/license.svg" width="3%">

Code released under the [MIT License](https://github.com/Girl-Code-It/Opportunity-Calendar-Backend/blob/develop/LICENSE).
