import mongoose from 'mongoose'
import config from './config.js'
;(async () => {
  try {
    const db = await mongoose.connect(config.mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`Database connect : ${db.connection.name}`)
  } catch (error) {
    console.log(error)
  }
})()
