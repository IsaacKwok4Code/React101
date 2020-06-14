const activities = [{
    timestap: new Date().getTime(),
    text : "Ate lunch",
    user:{
        id : 1,
        name: 'Nate',
        avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments:[
        {from: 'Ari', text:'Me too!'}
    ]
  },{
    timestap: new Date().getTime(),
    text : "Woke up early for a day run.",
    user:{
      id : 2,
      name: 'Ari',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments:[
      {from: 'Nate', text:'Jealous!'}
    ]
  }];

export default activities;