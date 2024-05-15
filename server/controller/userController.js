import users from "../model/userModel.js";
import posts from '../model/postModel.js';
import bcrypt from 'bcrypt';

export const checkLoggedIn = (req, res) => {
  const username = req.cookies.username
  if(username) {
    res.status(200).json({
      username,
      loggedIn: true
    })
  } else {
    res.status(401).json({
      loggedIn: false,
      message: "user is not logged in"
    })
  }
}

export const signup = async (req, res) => {
  const { username, password } = req.body

  try {
    const user = users.find(user => user.username === username)
    if(user) {
      return res.status(409).send('The username is already taken')  
    } else {
      const userId = Math.floor(Math.random() * 1000)
      const hashedPassword = await bcrypt.hash(password, 12)
      const newUser = {
        id: userId,
        username,
        password: hashedPassword
      }

      users.push(newUser)
      
      // Set cookie for new user
      res.cookie('username', username, {
        maxAge: 60000 * 60 * 24 // expires in 1 day
      })

      // Send response with user data
      res.json({
        username: username,
        loggedIn: true
      })
    }
  } catch (error) {
    res.status(500).send('Internal server error')
  }
}

export const login = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username)
  if(!user) {
    return res.status(404).send({ message: 'User not found' })
  } else {
    const passwordMatch = await bcrypt.compare(password, user.password)
    if(passwordMatch) {
      res.cookie('username', username, {
        maxAge: 60000 * 60 * 24 
      })
      res.json({
        username,
        loggedIn: true
      })
    } else {
      res.status(401).send({ message: 'Incorrect password' })
    }
  }
}

export const logout = (req, res) => {
  res.clearCookie('username').json({
    username: '',
    loggedIn: false
  })
}

export const getPostsByUsername = (req, res) => {
  const username = req.cookies.username;
  const userPosts = posts.filter(post => post.username === username);
  res.send(userPosts);
}