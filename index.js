"use strict";

function User(fname, sname, age, isMale, email, isSubscribing = false) {
  this.fname = fname;
  this.sname = sname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribing = isSubscribing;
}

function UserPrototype() {
  this.getFullName = function () {
    return `${this.fname} ${this.sname}`;
  };
}

User.prototype = new UserPrototype();

const createRandomUsers = function (amount = 1) {
  const db = [];
  for (let i = 0; i < amount; i++) {
    const user = new User(
      `Name${i}`,
      `Sname${i}`,
      Math.floor(Math.random() * (80 - 20)) + 20,
      Math.random() > 0.5,
      `email${i}@gmail.com`
    );
    db.push(user);
  }
  return db;
};

const users = createRandomUsers(15);
console.table(users);

/* получить массив полных имен пользователей, используя метод map*/

const newUsers = users.map(function (user) {
  return user.getFullName();
});
console.table(users);

/* получить массив пользователей, старше 65, используя filter*/

const newOldUsers = users.filter(function (user) {
  return user.age > OLD_AGE;
});
console.table(newOldUsers);

/* получить массив female, используя filter*/

const newFemaleUsers = users.filter(function (user) {
  return user.isMale === false;
});
console.table(newFemaleUsers);

/* зарандомить подписку у пользователя, используя forEach*/

users.forEach(function (user) {
  user.isSubscribing = Math.random() > 0.5;
});
console.table(users);

/* получить массив бабушек с подпиской*/

const oldFemaleUsersWithSubscribing = users
  .filter(function (user) {
    return user.isMale ===false;
  })
  .filter(function (user) {
    return user.age > OLD_AGE;
  })
  .filter(function (user) {
    return user.isSubscribing;
  });
console.table(oldFemaleUsersWithSubscribing);