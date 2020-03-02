import { Component } from '@angular/core';

@Component({
  selector: 'my-profile',
  template: `
  <div id = "container">
  <img src = {{person.avatar}}>
  <h1>Welcome {{title}}</h1>
  <h2>My name is {{person.firstname}} {{person.lastname}}</h2> 
  <h3> Age: {{person.age}}</h3>
  <h2> Address : </h2> 
  <ul><li>Street: {{person.address.street}}</li>
   <li>City: {{person.address.city}}</li>
   <li>Country: {{person.address.country}}</li>
  </ul>
  <h5>Description: </h5>
  <ul>{{person.description}}</ul>
  <h6>Hobbit: </h6>
  <ul>{{person.hobbit}}</ul>
  <h4>My Friend:</h4>
  <ul>
  <li *ngFor="let friend of person.friends"> Name:{{friend.name}}, Age:{{friend.age}}</li>
  </ul> 
  </div>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Profile';
  person = {
    firstname: 'Như Huyền',
    lastname: 'Nguyễn',
    avatar: 'https://i.pinimg.com/originals/27/b4/30/27b430fe94664a4d339d0599ed5b364e.jpg',
    description: 'xinh gái, dễ thương!',
    hobbit:'xem phim, ăn đồ ngọt !',
    age: '25',
    address: {
      street: 'Quỳnh phụ, Quỳnh Côi',
      city: 'Thái Bình',
      country: 'Viet Nam'
    },
    friends: [
      {name: 'Chinh', age: 24},
      {name: 'Yến', age: 24},
      {name: 'Crush', age: 0}
    ]
  }
}
  