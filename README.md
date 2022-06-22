# SAS-birthday-app

*OVERVIEW*
  - The goal for this app was to create a UI that allows users to enter new employees and then be able to dynamically see all the employees that have         birthdays in a given month. 
  - The app should allow for some user input of some kind.

*END RESULT*
  - A web app was created which allows a user to enter a new employee. 
  - This new employee can then be filtered by their birth month. 
  - All employees in the employee object are filtered and only the employees that match the selected month are shown in the list.

*THE JOURNEY*
  - I began by researching possible stacks I could use.
  - I have used Angular in the past, in particular as I was developing Custom Controls for Visual Investigator 10.8.
  - Knowing that the team I was talking to used React, I decided to work with a MERN stack.
  - I have used MongoDB in the past and I am using a MongoDB Atlas database for a website that is currently live: http://www.nc-beer-map.com/
  - In preparation for utilizing the full stack, I spent some time working through this tutorial: https://www.mongodb.com/languages/mern-stack-tutorial
  - I visited the site: https://www.mockaroo.com/ to produce dummy records in the form of .csv files that I could upload into MongoDB collections in          order to populate the app that I built with the tutorial I previously mentioned.
  - Once I had downloaded the dummy records as a .csv file, I uploaded it into an excel spreadsheet to view and make necessary changes to the data.
  - When my data was in the correct form and labeled correctly, I uploaded the data to my MongoDB Atlas collection via MongoDB Compass
  - With all my data living in the cloud database, I was ready to tackle the frontend part of the stack.
  - I now set my sights on learning React.
  - I spent most of last week going through different parts of a Udemy course on React.
  - My goal was to gain a working knowledge of components and how they communicated to each other.
  - Much like Angular, I knew that the React app I was going to build would be comprised of many small building blocks.
  - I used my whiteboard to map out how I wanted my app to look and how I should go about connecting the components.
  - After several trial runs, I got my birthday app where I wanted it as far as the React side.
  - All of my attempts to connect my React app to a backend failed.
  - Rather than waste more time, I hard coded more employees into the React app.
  - After manually testing the app and verifying that it functioned in the way I built it, I ran the build script to prepare the app for production.
  - With the build folder pushed to my repo, I used AWS Amplify to deploy my app.

*TESTING*
  - Testing is new to me and therefore an unfamiliar area.
  - I have never built anything to the scale that it needed to be tested besides the manual testing done with a development server up and running.
  - This React app was tested manually.
  - Based on the small size of the app and the limited functionality, no unit tests or integration tests were done. Also no end-to-end test were done.
  - I constantly pushed my code to my Github repo so that as I manually tested and broke my app, I could revert back to my last working version.
  - Given more time to learn testing, I would have written tests for my components and the functions within them to verify that they behaved as they          should.
 
 *CHALLENGES*
  - Don't boil the ocean!
  - Dont' boil the ocean!
  - Don't boil the ocean!
  - I kept telling myself this so that I could stay on task and work on the small deliverable at hand.
  - Learning new technologies, frameworks and methodologies in a small timeframe is very challenging and keeping focus is of upmost importance.
  - I had a host of small challenges throughout this process.
  - One challenge in particular that caused much headache, many trips to Stack Overflow and countless breaking of my app was the date element.
  - I found that when using a date picker in my employee form, the date that was displayed in the employee record was always one day earlier than the         date that was chosen in the picker. This has to do with GMT and how that translates within the date picker.
  - Attempts to convert the month from digits to it's actual name proved difficult. Using .getMonth() didn't produce the desired outcome.
  - My work-around was to have the user input the birth month as the actual name of the month, rather than digits. Afterall, as the creator of the form,     I have complete control of how I want the data entered and in what form. If I want the month to be in letter form, and if it makes writing my code       easier, then that is a choice I can make.
  - The other big challenge was testing of the app. Having never written tests before, I didn't allot myself the needed time to learn about them and         implement them in my app. I know they're of vital importance, and going forward they will be a big part of apps I create.
  
  
  *IMPROVEMENTS*
  - One improvement that I wanted to make and in the end did make was deploying the app so that I could share it with others. Having the only working         version of my app living on my local machine was not an acceptable option. When I was in the Data Analytics bootcamp, the teachers never touched on       deployment. All our projects and everything we built all lived on our individual machines. I wanted to show people the things I had built. I wanted       to include my projects on my portfolio so others could see. This is one of the big reasons why I began to teach myself about software development and     full stack development. I wanted to take local projects and host them in the cloud.
  - All that being said, the biggest improvement to me app would be to connect a database in order to store new data and retrieve old data. Hard coding       employees into the code was my last resort, but one I had to use to make the app functional.
  - I would also like to improve the UI by adding different filters, for position and city, for example.
  - As far as scalability, adding components and growing the overall size and file structure of the app would mean I would need to look into the hosting     parameters and make sure that I was able to host the app effeciently.
