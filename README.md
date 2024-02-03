# Ecommerce (React) Coding Assessment

## Overview

I am pleased to announce the completion of my recent assignment, which focused on developing a comprehensive e-commerce web application. This project was designed to showcase my skills in web development, particularly in creating responsive and user-friendly interfaces, implementing essential e-commerce functionalities, and ensuring a seamless user experience.

### Key Features Implemented
User Authentication: Implemented a secure login and registration system allowing users to create and access their accounts. This feature includes validation checks to ensure data integrity and security.

Product Display and Management: Developed functionalities to display products dynamically on the home page. Users can view detailed information about each product, including descriptions, prices, and ratings, through a well-organized product detail page.

Cart Functionality: Integrated a cart system where users can add products, adjust quantities, and view their cart's total cost. This feature enhances the shopping experience by allowing users to manage their selections effectively.

Favorites List: Added the ability for users to mark products as favorites, creating a personalized list of items they are interested in. This functionality encourages user engagement and return visits.

Responsive Design: Ensured the application is fully responsive, providing an optimal browsing experience across various devices and screen sizes. This was achieved by using modern CSS frameworks and best practices in responsive design.

Backend Integration: Utilized a mock JSON server to simulate backend functionalities, including fetching data for users, products, orders, and favorites. This approach allowed for the development and testing of frontend interactions in a realistic environment.







## Development Setup

- Clone this repo
- `npm install` - To install the dependencies
- ` json-server --watch db.json --port 3000` - To start the JSON server
- `npm start` - To start the react app

## This project's user interface should like this.

### Login/Register page

<img width="1512" alt="Screenshot 2022-07-24 at 10 44 13 AM" src="screenshots\signup page.png">

### Signup Successfull pop up window page
<img width="1512" alt="Screenshot 2022-07-24 at 10 44 13 AM" src="screenshots\signup popup notification.png">



### Home page

<img width="1512" alt="Screenshot 2022-07-24 at 10 45 58 AM" src="screenshots\products home page.png">

### Product detail page

<img width="675" alt="Screenshot 2022-07-24 at 10 53 17 AM" src="screenshots\detail product.png">

### Added Successfully to Cart
<img width="675" alt="Screenshot 2022-07-24 at 10 53 17 AM" src="screenshots\added succesfully to card.png">


### Cart page

<img width="1415" alt="Screenshot 2022-07-24 at 10 50 18 AM" src="screenshots\cart page.png">

### Remove Item From Cart

<img width="1472" alt="Screenshot 2022-07-24 at 10 51 16 AM" src="screenshots\item removed from cart.png">

### Order Receipt Page

<img width="1472" alt="Screenshot 2022-07-24 at 10 51 16 AM" src="screenshots\order reciept page.png">

### Order Placed Successfully
<img width="1472" alt="Screenshot 2022-07-24 at 10 51 16 AM" src="screenshots\confirmed order popup.png">



## API Usage

API can be launched using npm run server.
| Endpoint | Result |
|------------------------------|-----------------------------------------------------|
| /users | Lists all available users |
| /products | Lists all available products |
| /orders | Lists all available orders  
| /favourites | Lists all available favourites

Refer - [JSON sever](https://www.npmjs.com/package/json-server) docs for more information

## Bonus

- Feel free to add functionality (not mandatory)
- Use redux/context for state management
- Well explained readme (screenshot etc)

---
