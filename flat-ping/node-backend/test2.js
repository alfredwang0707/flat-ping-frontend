const puppeteer = require('puppeteer');
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../../../flat-ping-rails-backend/flat-ping/db/development.sqlite3'
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
    const queries = await Query.findAll({ where: {
      status: "active"
    }});
    
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

        } 
      }
    
    }


    
    console.log('results', JSON.stringify(queries));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
testConnection();
const getLatestScreenshot = async function(url, path) {
  const browser1 = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page2 = await browser1.newPage();
  await page2.goto(url);
  await page2.screenshot({path: `../public/${path}` });
  
  await browser1.close();
}
