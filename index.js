"use strict";

const user1 = {
  id: 1,
  name: "Elon",
  age: 50,
};

const user2 = {
  id: 2,
  name: "Elen",
  age: 40,
};

const msgElon = ["has", "already", "been", "declared"];
const msgElen = ["Uncaught", "SyntaxError", "Unexpected", "Hi!"];

const usersMeassage = new Map();
usersMeassage.set(user1, msgElon);
usersMeassage.set(user2, msgElen);

function getMessage(user) {
  if (usersMeassage.has(user)) {
    usersMeassage.get(user).forEach((message) => {
      console.log(message);
    });
  }
  // return usersMeassage.get(user);
}

for (const key of usersMeassage.keys()) {
  console.log(key.name, 'says:')
  getMessage(key);
}

getMessage(user1)
