show dbs
use Praduman
show collections

db.items.find({price:200})

//Deleting items form the Mongo Database
db.items.deleteOne({price:200})

db.items.find({price:200})

//deletOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteMany({price:100})
