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

- HTML Pages - 8 HTML pages that do the following: show login page, show profile page with user info, find other users or groups, book a study room, create a group, view groups the user is a part of, an about page, and view others profiles.

- Links - Links to all the pages are in the header, logining in automatically redirects user to their profile, book a study room page has links to BYU and UVU library, and profile page has links to all the users friends profiles.

- Text - Every group with the groups members is in text, the about page is in text, the users profile page has each of their groups and friends in text.

- Images - An image of a lonely studier is on the index page, included using a link to the wikipedia page.

- Login - Input box for username and password with a login button to login to profile.

- Database - All profiles are stored in the database as well as groups and friends of each user.

- WebSocket - Added friends are displayed in realtime on the profile page, added groups and users in similar groups is also listed on profile page.