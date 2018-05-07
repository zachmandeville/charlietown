# charlietown
A site to see pictures of that good cat Charlie

# Summary
This is a small site for Angelica so she can see pictures of that good cat charlie, and put in pictures of her own.  This readme is slim and aspirational now, cos it being built up in realtime.  If you are seeing a mostly messy readme that don't make much sense, give it a couple days and come back!  Yr essentially reading a public diary right now.

# Spinning it Up
One day you'll be able to visit the site on the web.  When that day comes, we'll let you know here.

# Philosophy

It is useful to know how to build more small tools that serve a single, personal purpose.  In my case, it's having a site that displays pictures of Charlie and this site is collaborative between myself and Angelica.  We should both be able to edit and update through an easy interface.

The other main philosophy of this is learning the thing I've put myself in a position to learn.  In this case, it's react and redux and api calls to a database.   There are other ways this app could be built, and likely much easier (and maybe not even using javascript).  But I am using react and redux as a means of learning the concepts behind them better.

---

## Views (Client Side)
  | name           | purpose                                                        |
  | ---            | ---                                                            |
  | Main           | Displays a grid of Charlie Pictures                            |
  | CharlieDetails | Show details for a single Charlie Picture                      |
  | Edit           | Display a form to edit the details of a single Charlie Picture |
  | New            | Display a form to add a new Charlie Picture                    |
  | Login          | View for admin to enter their login credentials                |

## Reducers (Client Side)

  | name           | purpose                                                              |
  | ---            | ---                                                                  |
  | auth           | Store information regarding user logins, auth status and auth errors |
  | currentCharlie | Hold information about selected charlie picture                      |
  | Charlies       | store the list of Charlie Pictures                                   |
  | users          | store the list of admins who can edit and add new Charlies           |

## API (Client - Server)

| Method | Endpoint             | Protected | Usage                    | Response                                            |   |   |   |
| ---    | ---                  | ---       | ---                      | ---                                                 |   |   |   |
| Post   | /api/v1/auth/login   | Yes       | Log In a User            | The Users JWT Token                                 |   |   |   |
| Get    | /api/v1/charlies     | Yes       | Get all Charlie pictures | array of Charlie pictures                           |   |   |   |
| Post   | /api/v1/charlies     | Yes       | Add new Charlie Picture  | The Charlie that has been added                     |   |   |   |
| Put    | /api/v1/charlies/:id | Yes       | Save an edited Charlie   | The Charlie that has been updated in db read format |   |   |   |


# API
_the login will be a v2 thang.  The api will be defined when rest of app is working first._

GET `/api/v1/charlies`

```
res STATUS 200
[
  {
    "id": 1,
    "name": "Shrimp",
    "image": "https://url/shrimp-charlie.jpg',
    "mood" : "Charlie is sleepy fun and relaxed",
    "notes": "At our old house.  He'd just eaten tuna."
  },
  {
    "id": 2,
    "name": "Angry",
    "image": "https://url/angry-charlie.jpg',
    "mood" : "Charlie is mad." 
    "notes": "In Queens.  We were not feeding him fast enough and it bothered him."
  }
]
res STATUS 500
  {
  "message": "Error occured.  Whoops, send me a line for what happened!"
  }
```

POST `/api/v1/charlies`

```
res STATUS 200
  {
    "name": "Happy Boy",
    "image": "https://url/happy-charlie.jpg",
    "mood" : "elated",
    "notes":  "you can almost hear the purr."
  }
res STATUS 500
  {
    "message": "Whoops!  Something went wrong.  Gimme a ring!"
  }
```

PUT `/api/v1/charlies/2`

```
res STATUS 200
  {
    "name": "Mad Charlie",
    "image": "https://url/angry-charlie.jpg",
    "mood": "mad and angry cat."
    "notes": "Agnry at not getting fed.  At our place in Ridgewood."
  }
res STATUS 400
  {
    "message": "Sorry, an error occurred.  Are you trying to edit a real charlie, or is the URL incorrect?"
  }
res STATUS 500
  {
    "message": "An internal error occurred.  Gimme a ring!"
  }

## DB (Server Side)

### Charlies
 | Column Name | Data Type |
 | ---         | ---       |
 | id          | Integer   |
 | name        | String    |
 | image       | String    |
 | mood        | String    |
 | notes       | String    |


# User Stories

MVP, on localhost
* [ ] **As a Charlie fan, I can visit a page on localhost  that displays different Pictures of Charlie**
* [ ]  **As a charlie fan, I can click on any picture to see it larger, and with more info about the good man.**
* [ ] **As a Charlie fan, I can upload new pictures of charlie, that include notes of mood and location.**
* [ ] **After I upload a new photo, I'm taken to it's details page, to confirm that it has been successfully added.**

MVP, devside

* [X] **As a dev working on the site,  I can confirm I have a 'hello world', that uses React and Redux, accessible on localhost.**
* [X] **As a dev building a database, I can consult an api to better understand the tables needed and how they should be structured.**
* [ ] **As a dev, I can user Postman to test my api routes, and make sure they are pinging the server correctly and bringing up objects that match the README documentation.**
* [ ] **As a dev, I can confirm I have a Full Stack App that is displaying content from the database based on input from the client.**
* [ ] **As a dev wanting to work well with others, I make many small commits on clearly named branches that are merged at smart times to master.  In this way I continually maintain a working app and have a clear process for how I got there.**


V2, hosted.

* **As a remote charlie fan, I can visit a site on the web where I can see pictures of Charlie.**
* **As a remote charlie fan, I cannot edit or post any new pictures.  I have 'readonly' access to the good man.**
* **As a charlie admin, I can log in to the site and see it from the admin's view.**
* **As a logged in admin, I can edit any existing photo and its description.**
* **As a logged in admin, I can update new photos and confirm they are viewable by reg fans.**

