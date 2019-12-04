/*
import* as  sequelize from 'Sequelize' 
 var sequelize = new Sequelize('danishdb', 'danish', 'danish', {
        host: 'localhost',
        dialect: 'sqlite',
        pool: {
          max: 5,
          min: 0,
          idle: 10000
        },
      
        // SQLite only
        //storage: 'path/to/database.sqlite'
      });
 
 var User = sequelize.define('user', {
   username: Sequelize.STRING,
   password: Sequelize.STRING,
 });
 
 sequelize
 .sync(
     {force:true}
 )
 .then(function() {
    User.create({
     username: 'danish',
     password: 'danish'
   });
 })
 */