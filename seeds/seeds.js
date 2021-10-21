const sequelize = require( '../config/connection' );
const { User, BlogPost, Comment  } = require('../models');

const userData = require('./userData.json');
const blogpostData= require('./blogpostData.json');
const commentData = require('./commentData.json')

// const seedDatabase = async () => {
//   await sequelize.sync({force:true});

//   await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true
//   });
//     await BlogPost.bulkCreate(blogpostData);

//     await Comment.bulkCreate(commentData);
  

//   process.exit(0);
// };
const seedDatabase=async()=>{
  try{
    await sequelize.sync({force:true})
  } catch (error){
    console.log(error)
  }
  try{
    await User.bulkCreate(userData,{
      individualHooks:true,
      returning:true
    })
    // await BlogPost.bulkCreate(blogpostData);

    // await Comment.bulkCreate(commentData);
  }catch (error){
    console.log(error)
  }
  process.exit(0);
}
seedDatabase();