# Flat-ping-frontend
Front end for Flat-ping
#Alfred Wang's capstone project - Flat Ping

This is an app I've worked on to solidify my understanding of various skills I've learned during the Flatiron immersive, and a great oppurtunity to experiment with new things.

In summary, this app allows a user to create alerts, and the user will be notified if there is a change made on the monitored url. As time was constrained, many features were considered, but remain on the backlog for continuous development. The items planned and worked on are on a [Trello board](https://trello.com/b/P9oCC8aK/simple-project-board).

## Rails Backend
* created and updated several data models based on current and expected functionality
*  CRUD functionalities for main app
* architect data schema structure

## Node.js Backend
* created a Node.js backend that continuously check for user queries, fetch a screenshot of the page, compares it against the last known screenshot, calculates the difference threshold (currently any difference), and if different, sends an email to the user along with saving the images and change events into the database
* researched different libraries and potential features for future iterations such as:
  * just allowing user to provide a CSS selector
  * upon user entering a url, take screenshot, show it to the user, allow the user to clip a specific region of the target page, save the coordinates, and only save the screenshot for that region

## Frontend Stack
* bootstrapped with react-create-app
* updated with create alerts, view alert lists, toggle/delete alerts, and view changes
* experimented with accessibility after taking the [Udacity Google's accessibility course](https://www.udacity.com/course/web-accessibility--ud891) on the side
  * tried to make sure the tabbing experience was OK
  * added the "@reach/skip-nav" package to have a "skip-to-content" button, which admittedly is not that useful on this site
  * added a screen reader only message on the differences page

## General Tech 
researched many libraries before settling on these
* [Puppeteer] Generate Screenshots and PDFs of pages
* [pixel-match] Image comparison Library
* [pngjs] PNG encoder/decoder for Node.js
* [Sequelize]  ORM for reading database
* [EmailJS] Send Emails with pre-set templates
* [Reach UI] Acessibility components



## Known technical debt
* The file structure is slightly awkward as everything is run locally, and the Rails, Node.js, and frontend public folder all need access to the images.
* The chosen email API only supports 200 monthly emails
* Images hosted locally + email API not supporting attachments = email alerts don't have images
* Image sizes need to be standardized if we support viewable region specific monitoring
* Currently the Node.js process runs all queries through an Array.map, which runs many browser sessions simultaneously. It needs to be limited on some TBD basis
* Currently the API dev key is committed and in the frontend code
* Currently most of the data is fetched and stored on the main App.js file. User auth is not currently implemented, so this is OK now. Once that is done, page specific data will be loaded on demand
* future [feature/tech roadmap](https://trello.com/b/P9oCC8aK/simple-project-board)

## Application usage steps
1. Go to the form on the home page and enter a url, nickname, and contact email- then submit
2. For purposes of this demo, the check frequency is 1 min
3. An email alert will be send to you to check the change manually
4. Go to the dashboard to manage queries and view alert differences


[puppeteer]: <https://developers.google.com/web/tools/puppeteer>

[pixel-match]: <https://github.com/mapbox/pixelmatch>

[pngjs]: <https://www.npmjs.com/package/pngjs>

[Reach UI]: <https://reach.tech/>

[EmailJS]: <https://www.emailjs.com/>

[Sequelize]: <https://sequelize.org/>
