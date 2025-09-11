//seraching for data in mongo db
use Praduman


//this query will return all the objects with rating equal to 3.5
db.items.find({price:"200"})
db.items.find({price:{$gt:200}}) //greater than 200
db.items.find({price:{$gte:200}})

//And condition
db.items.find({price:{$gt:200} ,rate:{$gt:555}}) //AND condition
db.items.find({$and:[{price:{$gt:200}},{rate:{$gt:555}}]}) //AND condition
 
//OR condition
db.items.find({$or:[{price:{$gt:200}},{rate:{$gt:555}}]}) //OR condition