class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}

const users = [
  {
    id: 1,
    username: "user1",
    password: "$2a$12$f.c9bRonN5W3eQaRhuIy/.A9F3QPoGt2.Qri90BNvslsBeUlR9bCq" // password1
  }
]

export default users;