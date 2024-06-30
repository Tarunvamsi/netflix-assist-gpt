## NETFLIX GPT

- Create React App
- Configured Tailwind css

## Features Planning

- Login and SignUp page
- R outing

  - Sign up and sign in screen
    - Login Form
    - Form Validation (useRef hook)
  - After login --> redirect to browse page
  - Create signup user account - firebase
    - Whenever we sigin or sigup , fire base will give an access token , to verify the authentication
    - And UID

- Browse Page (After Authentication)
    -  Register for TMDB api 
     - Creatr app and get access token and api key
     - get data from TMDB now playing movies list API 
     - get data in browse page
  - Header
  - Main Movie
    - Background trailer playing
    - Movie title and Description
    - Movie suggestions
      - Movie List \* N
- Netflix GPT

  - Search bar
  - Movie Suggestions

- Formik Library--> forms for react application

- useRef hook --> to get the data entered from the input boxes
- Once user signed in / signup we will add the data to the redux store and then navigate to browse page

  - Because we need data anywhere in the app

- Bug1 : Even if the user is logged out - trying to access /browse --> user is able to access :::: we need to restrict

- Bug2 : After logged in , if user wants to access /login --> opening login page :::: we should redirect to browse page till user logs out ::: we need to redirect

- fix:: place auth api , in the central place , where it will be present every where in the app
- place it in the header , so that every time it will check for the auth change , so based on that it will be redirected accordingly

- Good practice: Unscbscribed to the onAuthStateChaneg callBack, because header will be changed more timed

- For Browse Movies - We use TMDB API to get the data

  - Open TMDB and Login
  - Open edit proile
  - Go to api section
    - Find api key and api access token

- ReactStrictMode -- > in local everything happens twice --> react does extra rendering to check inconsistency in rendering cycle'
  - This will only happens in the development phase
  - When we do the prod build, it wont happen



## Browse page planning

- Main Container
  - Video Background 
  - Video Title 
- Secomdary Container
  - Movie list * N
    - Many Cards * N
