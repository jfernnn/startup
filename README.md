# Study Buddy Finder

## Elavator Pitch

Finding the perfect study partner has never been easier! Study Buddy Finder is your go-to platform for connecting with fellow students, reserving study rooms at BYU and UVU libraries, and collaborating on your coursework. With features like real-time chat, class-specific groups, and seamless library integration, Study Buddy Finder makes studying fun and productive. Join the community and level up your study game!

## Design
![image](https://github.com/jfernnn/startup/assets/18669390/48388895-e63f-435d-98fb-52593f0deb08)


## Key Features

- User Authentication: Users can create accounts and log in securely. After logging in, their names will be displayed.

- User Profiles: Each user has a profile with information about their classes and subjects of interest.

- Real-Time Chat: Users can engage in real-time chat with other members to discuss study topics, ask questions, and form study groups.

- Class/Subject Groups: Users can join or create groups based on the classes or subjects they are studying, making it easy to find like-minded study partners.

- Library Integration: The application connects to BYU and UVU library websites, allowing users to check study room availability.

- Search for Study Buddies: Users can search for potential study partners based on class, subject, or location (library).


## Technologies

- **HTML** - Develop structured HTML templates for login and user profile pages.
Incorporate hyperlinks to seamlessly connect with library websites for study room reservations.
- **CSS** -Apply CSS to create an aesthetically pleasing and responsive user interface.
Focus on effective use of whitespace, color palettes, and contrast to enhance the overall design.
- **JavaScript** -Use JavaScript to enable user login, dynamic content rendering, and communication with backend APIs.
- **Service** - Establish a  backend service with endpoints that allow:
  - User registration and authentication
  - Retrieving study room information
  - Real time chatting
- **DB** - Utilize a database to store and manage user profiles, chat records, study group data, and library study room details.
- **Login** - Implement user registration and authentication mechanisms with a focus on secure credential storage. Also, make it so certain features are only available to authenticated users.
- **WebSocket** - Each user will be able to chat with each other in real time.
- **React** - Utilize the React framework for improved component-based organization and dynamic user interfaces.

## HTML Deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML Pages** - 8 HTML pages that do the following: show login page, show profile page with user info, find other users or groups, book a study room, create a group, view groups the user is a part of, an about page, and view others profiles.

- **Links** - Links to all the pages are in the header, logining in automatically redirects user to their profile, book a study room page has links to BYU and UVU library, and profile page has links to all the users friends profiles.

- **Text** - Every group with the groups members is in text, the about page is in text, the users profile page has each of their groups and friends in text.

- **Images** - An image of a lonely studier is on the index page, included using a link to the wikipedia page.

- **Login** - Input box for username and password with a login button to login to profile.

- **Database** - All profiles are stored in the database as well as groups and friends of each user.

- **WebSocket** - Added friends are displayed in realtime on the profile page, added groups and users in similar groups is also listed on profile page.

## CSS Deliverables

For this deliverable I added CSS to make my website pretty

- **Header, footer, and main content body**

- **Application elements** - Used good contrast and whitespace, elements that should be center of the screen are

- **Application text content** - Consistent fonts with text size matching what it represents

- **Responsive to window resizing** - My website changes according to different window sizes, looks good at any size

- **Nav bar** - Used bootstrap to create a minimalist and pleasing navigation bar

- **Submit buttons** - Used bootstrap to create visually pleasing buttons that fit in with my website design

## JavaScript Deliverables

For this deliverable I added JavaScript capabilities to create and sign in a user, create study groups, and add buddies and groups

- **Register** - Added the ability to register a user which is saved in local storage

- **Login** - Added the ability to log in with an existing username and password. User must exist in local storage to log in

- **Create groups** - A logged in user is able to create a new study group in local storage

- **Add buddies** - Each user object has a collection of buddies. Created users can be searched by username and added to buddy list

- **Add groups** - Groups that have been created can be searched by group name and joined

- **Messages** - The ability to message others has not been added yet but JavaScript logic is implemented to make messages appear every 5 seconds to show how it will look

- **View group/buddy pages** - From the users profile page, buddies and groups can be clicked on the view their pages

## Service Deliverables

For this deliverable I added backend endpoints that receive messages and return sent messages

- **Node.js/Express HTTP service** - done!
- **Static middleware for frontend** - done!
- **Calls to third party endpoints** - I made a call to a Chuck Norris joke API to print a joke on the log in page
- **Backend service endpoints** - Endpoints for messaging.
- **Frontend calls service endpoints** - I did this using the fetch function.

## DB deliverable

For this deliverable I stored the users and the groups in the database.

- **MongoDB Atlas database created** - done!
- **Endpoints for data** - Six endpoints now query, add, and update the data in Mongo.
- **Stores data in MongoDB** - Users and group objects are stored in the database
- **Update data in MongoDB** - Users buddy list and group members are updated in the database.
- **Display items from MongoDB** - All user and group info is queried from the database and displayed.

## Login deliverable

For this deliverable I made registering an account secure and restricted functionality if not logged in.

- **User registration** - Securely creates a new account in the database.
- **Password hashing** - Only stores the hashed password in mongo. 
- **Creates cookies** - Creates and associates cookies with logged in user.
- **Existing user** - Can create groups, add friends, and add existing groups.
- **Use MongoDB to store credentials** - Stores both users and groups.
- **Restricts functionality** - Users can only access site features if they are logged in.
- **Frontend and backend** - All functionality works on both front and back end.
- **Messaging errors** - Messaging other users still needs some work.

## WebSocket deliverable

For this deliverable I used webSocket to update the way you message other users.

- **Backend listens for WebSocket connection** - done!
- **Frontend makes WebSocket connection** - done!
- **Data sent over WebSocket connection** - done!
- **WebSocket data displayed** - Messages are displayed in real time on your own and others profiles.
- **Messages stored** - Messages are also saved to the database so they persist.