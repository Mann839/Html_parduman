show dbs
use Praduman
show collections

//updating items in mongo db
db.items.find()
db.items.updateOne({name:"microsoft"},{$set:{price:4}}) //updateOne will update the first matching document
db.items.updateMany({name:"microsoft"},{$set:{price:5}}) //updateMany will update all the matching document