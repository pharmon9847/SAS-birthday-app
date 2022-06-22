# SAS-birthday-app

*OVERVIEW*
  The goal for this app was to create a UI that allows users to enter new employees and then be able to dynamically see all the employees that have         birthdays in a given month. The app should allow for some user input of some kind.

*END RESULT*
  A web app was created which allows a user to enter a new employee. This new employee can then be filtered by their birth month. All employees in the     employee object are filtered and only the employees that match the selected month are shown in the list.

*THE JOURNEY*
  - I began by researching possible stacks I could use.
  - I have used Angular in the past, in particular as I was developing Custom Controls for Visual Investigator 10.8
  - Knowing that the team I was talking to used React, I decided to work with a MERN stack.
  - I have used MongoDB in the past and I am using a MongoDB Atlas database for a website that is currently live: http://www.nc-beer-map.com/
  - In preparation for utilizing the full stack, I spent some time working through this tutorial: https://www.mongodb.com/languages/mern-stack-tutorial
  - I visited the site: https://www.mockaroo.com/ to produce dummy records in the form of .csv files that I could upload into MongoDB collections in          order to populate the app that I built with the tutorial I previously mentioned
  - When I successfully completed the backend prep, I set my sights on learning React
  - I spent most of last week going through different parts of a Udemy course on React
  - After several trial runs, I got my birthday app where I wanted it as far as the React side
  - All of my attempts to connect my React app to a backend failed
  - Rather than waste more time, I hard coded more employees into the React app 

*TESTING*
  - Testing is new to me and therefore an unfamiliar area
  - I have never built anything to the scale that it needed to be tested besides the manual testing done with a development server up and running
  - This React app was tested manually
  - Based on the small size of the app and the limited functionality, no unit tests or integration tests were done. Also no end-to-end test were done
  - I constantly pushed my code to my Github repo so that as I manually tested and broke my app, I could revert back to my last working version
 
 *CHALLENGES*
  - Don't boil the ocean!
  - My biggest challenge was remaining on task and producing small deliverables
  - Learning new technologies, frameworks and methodologies in a small timeframe is very challenging and keeping focus is of upmost importance
  
  
  *IMPROVEMENTS*
  - The biggest improvement would be to connect a database in order to store new data and retrieve old data. Hard coding employees into the code was my       last resort, but one I had to use to make the app functional
  - I would also like to improve the UI by adding different filters, for position and city, for example
