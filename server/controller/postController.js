import posts from '../model/postModel.js';

export const getAllPosts = (req, res) => {
  res.send(posts);
}

export const getPostById = (req, res) => {
  const id = req.params.id;
  const post = posts.find(post => post.id === Number(id));
  res.send(post);
}

export const createPost = (req, res) => {
  const {
    title,
    description,
    area,
    station,
    images,
    rent,
    minimumStay,
    availableFrom,
    typeOfRoom,
  } = req.body;

  try {
    const newPostId = Math.floor(Math.random() * 1000);
    const userName = req.cookies.username;
    const formatTime = new Date(availableFrom).toLocaleDateString();

    const newPost = {
      id: newPostId,
      username: userName,
      title,
      description,
      area,
      station,
      images: [images],
      rent,
      minimumStay,
      availableFrom: formatTime,
      typeOfRoom,
    };

    posts.push(newPost);
    res.send(200).send('Post created successfully');
  } catch (error) {
   res.send(500).send('Internal server error'); 
  }
}

export const updatePost = async (req, res) => {
  const {
    id,
    title,
    description,
    area,
    station,
    images,
    rent,
    minimumStay,
    availableFrom,
    typeOfRoom,
  } = req.body;

  try {
    const postIndex = posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
      return res.status(404).send('Post not found');
    }
    // const post = posts.find(post => post.id === id);
    // if (!post) {
    //   return res.status(404).send('Post not found');
    // }

    const formatTime = new Date(availableFrom).toLocaleDateString();
    const updatedPost = {
      id,
      username: posts[postIndex].username, 
      title: title || posts[postIndex].title,
      description: description || posts[postIndex].description,
      area: area || posts[postIndex].area,
      station: station || posts[postIndex].station,
      images: [images] || [posts[postIndex].images],
      rent: rent || posts[postIndex].rent,
      minimumStay: minimumStay || posts[postIndex].minimumStay,
      availableFrom: formatTime,
      typeOfRoom: typeOfRoom || posts[postIndex].typeOfRoom,
    };


    // const formatTime = new Date(availableFrom).toLocaleDateString();
    // const updatedPost = {
    //   id: post.id,
    //   username: post.username,
    //   title: title || post.title,
    //   description: description || post.description,
    //   area: area || post.area,
    //   station: station || post.station,
    //   images: [images] || [post.images],
    //   rent: rent || post.rent,
    //   minimumStay: minimumStay || post.minimumStay,
    //   availableFrom: formatTime,
    //   typeOfRoom: typeOfRoom || post.typeOfRoom,
    // };

    // const index = posts.findIndex(post => post.id === id);
    // posts[index] = updatedPost
    const updatedPosts = [...posts];
    updatedPosts[postIndex] = updatedPost;
    return res.status(200).send('Post updated successfully');    
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};

export const deletePost = (req, res) => {
  const id = req.params.id;
  const postIndex = posts.findIndex(post => post.id === Number(id));

  if(postIndex !== -1) {
    posts.splice(postIndex, 1);
    res.send(200).send('Post deleted successfully');
  } else {
    res.send(404).send('Post not found');
  }
}