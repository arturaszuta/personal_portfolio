const projects = {
  yummi: {
    title: 'Yummi',
    stack: ['NodeJS/Express', 'EJS', 'PostgreSQL', 'Semantic-UI', 'Twilio API'],
    description: 'Yummi is a client/restaurant portal for ordering food for pickup. The client creates and account, can browse local restaurants and check out their menus, add items to cart(including modifiers for allergies or preferences) and place the orders. The restaurant receives the orders via their own portal where they can be accepted or rejected. Client then gets a notification with estimated preparation time via text message. Clients/restaurants can also see their previous order history for basic analytics.',
    screenshots: []
  },
  artsee: {
    title: 'Artsee',
    stack: ['React-Native', 'Expo', 'Ruby on Rails', 'PostgreSQL', 'MongoDB'],
    description: 'Artsee is a native app(works with both Android and IOS devices) which helps users share and explore street art(graffiti). Users can explore art pieces based on their location or the general image feed. The images can be liked, bookmarked or commented on - the users can then see their liked or bookmarked images in their profile page. Users can also take pictures with a camera built in the app and upload them to the main database. The images undergo AWS Rekogntion analysis and are only uploaded if the AWS confidence that the image is graffiti is above 30%.',
    screenshots: []
  },
  scheduler: {
    title: 'Interview Scheduler',
    stack: ['React', 'WebSockets', 'NodeJS/Express'],
    description: 'Interview scheduler for students/mentors based on a work week. The person in charge of the scheduling can select different time slots for the day, select interviewer and enter students name. The interviews can be edited/deleted afterwards.',
    screenshots: []
  },
  tweeter: {

  },
  tinyapp: {

  }



}

export default projects;