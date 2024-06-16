# rn-assignment4-11297632

This is a React Native application that allows users to search for job listings. The app includes a login screen where users can enter their name and email, and a home screen that displays popular and featured job cards.

## Components

### `login`
The `login` component displays a form where users can enter their name and email. Upon pressing the login button, the user's name and email are passed to the `home` component.

### `home`
The `home` component displays the user's email and name, as well as two sections for popular and featured job cards. The job cards are rendered using the `popularJobs` and `featuredJobs` components.

### `popularJobs` and `FeaturedJobs`
The `popularJobs` and `FeaturedJobs` are reusable components that display job information such as the job title, company, location, and salary. It accepts props for card details and styles the card as shown in the provided UI mockup.

## Setup

1. Clone the repository: `git clone https://github.com/Steve2a/rn-assignment4-11297632.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Dependencies

- `react-navigation`: For navigation between screens
- `styled-components`: For styling React Native components

## Screenshots
![alt text](<Screenshot 2024-06-16 181214.png>)
![alt text](<Screenshot 2024-06-16 181321.png>)
![alt text](<Screenshot 2024-06-16 181702.png>)
![alt text](<Screenshot 2024-06-16 181744.png>)
![alt text](<Screenshot 2024-06-16 181803.png>)
![alt text](<Screenshot 2024-06-16 181825.png>)
![alt text](<Screenshot 2024-06-16 181852.png>)
