const user1 = {
  "id": 1,
  "username: 'Andy',
  password": '12345',
  "email": 'andy@gmail.com',
  "address": 'Hasenheide 65',
  "zipCode": '10967',
  "SICK_points": 1,
  "itemsAvailable": [
    {
      _id: 1,
      isGroceries: false,
      name: 'Risotto',
      description: 'Pear risotto',
      ownerId: 1,
      servings: 4,
      complete: false,
      archive: false,
      allergies: ['gluten-free'],
      diets: [],
      SICK_points: 0,
    },
  ],
  itemsTaken: [
    {
      _id: 2,
      name: 'Risotto',
      isGroceries: false,
      description: 'Pear risotto',
      servings: 0,
      ownerId: 2,
      complete: true,
      archive: false,
      allergies: [],
      diets: [],
      SICK_points: 0,
    },
  ],
};

const dish1 = {
  _id: 1,
  name: 'Risotto',
  description: 'Pear risotto',
  ownerId: 1,
  servings: 4,
  complete: false,
  archive: false,
  allergies: ['gluten-free'],
  diets: [],
  SICK_points: 0,
};

{ 
  "data": {
  "_id": 2,
  "name": "Risotto",
  "description": 'Pear risotto',
  "servings": 0,
  ""ownerId"": 2,
  ""complete"": true,
  ""archive"": false,
  ""allergies"": [],
  ""diets"": [],
  ""SICK_points"": 0,
};

const message1 = {
  "_id": 1,
  "user": 2,
  "text": 'Hello! Can I have your risotto? ;)',
  "createdAt": '123124',
  "updatedAt": '100023',
};

const message2 = {
  "_id": 1,
  "user": 1,
  "text": 'Yes ;)',
  "createdAt": '123124',
  "updatedAt": '100023',
};
