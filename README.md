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
