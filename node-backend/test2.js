const puppeteer = require('puppeteer');
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');
const { Sequelize, DataTypes } = require('sequelize');
const fetch = require('node-fetch');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../../../flat-ping-rails-backend/flat-ping/db/development.sqlite3'
})
// if there is no old image, save the image file name to the query
// Simple UPDATE queries 
// query.imageName = "1-20210206181930"
// filePath = "../images/"
// actualFileName = filePath + query.imageName + ".jpg"
// newFileName = `${query.id}-${Date.now()}`
// save new picture to newFileName, if different, save newFileName into query;
// `images/${query.id}-${time}.jpg`
// time = Date.now() // 1612653638960


//establish model & relationships
const User = sequelize.define('User',{ 
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  created_at: DataTypes.TIME,
  updated_at: DataTypes.TIME
  }, {
  timestamps: false,
})

const Query = sequelize.define('Query', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  url: DataTypes.STRING,
  name: DataTypes.STRING,
  status: DataTypes.STRING,
  user_id: DataTypes.INTEGER,
  last_image: DataTypes.STRING,
  created_at: DataTypes.TIME,
  updated_at: DataTypes.TIME
}, {
  timestamps: false
})

User.hasMany(Query, {
  foreignKey: 'user_id'
});
Query.belongsTo(User, {
  foreignKey: 'user_id'
});

const Alter = sequelize.define('Alter', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  oldImagePath: DataTypes.STRING,
  newImagePath: DataTypes.STRING,
  diffImagePath: DataTypes.STRING,
  query_id: DataTypes.INTEGER,
  created_at: DataTypes.TIME,
  updated_at: DataTypes.TIME
}, {
  timestamps: false
})

// /******************// testing connection to table alter works /***************************

// const testConnection2 = async() => {
//   try {
//     await sequelize.authenticate()
//     console.log('connection success')
//     const Alters = await Alter.findAll()
      
//     await Alter.update({ oldImagePath: "testing alter path"}, { where: {
//       id: 1
//     }})
//   } 
//   catch (error) {
//         console.error('Unable to connect to the database:', error)
//       }
      
// }
// testConnection2()


/* ************************************************ */



const testConnection = async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const queries = await Query.findAll({
      where: {
        status: "active"
      },
      include: User
    });
    
    // await Query.update({ name: "testing google"}, { where: {
    //   id: 1
    // }})

    for (const query of queries) {
      const time = Date.now();
      const imagePath = `images/${query.id}-${time}.png` // 'images/1-123.jpg'
      const diffImagePath = `images/${query.id}-diff-${time}.png`
      await getLatestScreenshot(query.url, imagePath);
      if (!query.last_image){
        await Query.update({ last_image: imagePath}, { where: {
          id: query.id
          //last_image should be updated
        }}) 
      } else {
        const oldImage = PNG.sync.read(fs.readFileSync(`../public/${query.last_image}`))
        const {width, height} = oldImage
        const imageDiff = new PNG({width, height})
        const newImage = PNG.sync.read(fs.readFileSync(`../public/${imagePath}`))
        
        const pixelDifference = pixelmatch(oldImage.data, newImage.data, imageDiff.data, width, height, {threshold: 0.1})
        
        if ( pixelDifference > 0) {
          //if > 0 send alert
          console.log("difference!")

          fs.writeFileSync(`../public/${diffImagePath}`, PNG.sync.write(imageDiff))
        // await sequelize.authenticate()
        // console.log('connection success')
        // const Alters = await Alter.findAll()

          await Alter.create({
            query_id : query.id,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            oldImagePath: query.last_image,
            newImagePath: imagePath,
            diffImagePath: diffImagePath
            
          }, {
            timestamps: false
          })
          
          var emailData = {
            service_id: 'service_3444ry9',
            template_id: 'template_kygf2vn',
            user_id: 'user_uSdC48xNgCDYxIKKNtYFr',
            template_params: {
              name: query.User.name,
              email: query.User.email
            }
          };
          
          await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify(emailData),
            headers: { 'Content-Type': 'application/json' },
          })
          .then(res => {
            console.log('success emailing to ', query.User.email)
          })
          .catch(err => {
            console.log('error emailing', err)
          })
        } 
      }
    
    }


    
    console.log('results', JSON.stringify(queries));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

setInterval(() => {
  testConnection();
}, 60000)

const getLatestScreenshot = async function(url, path) {
  const browser1 = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page2 = await browser1.newPage();
  await page2.goto(url);
  await page2.screenshot({path: `../public/${path}` });
  
  await browser1.close();
}

