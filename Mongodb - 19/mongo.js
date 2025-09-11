// Inserting data in mongo db
show dbs
use Praduman

db.items.insertOne({name:"abcd",
rate:123,pty:133,producer:"xyz"})

db.items.insertMany([{name:"abcd",
    rate:123,pty:133,producer:"xyz"},{name:"microsoft",
    rate:343,pty:223,producer:"xyz"},{name:"google",
    rate:563,pty:333,producer:"xyz",}])



db.items.insertMany([{name:"abcd",
    rate:123,pty:133,producer:"xyz",price:100},{name:"microsoft",
    rate:343,pty:223,producer:"xyz",price:200},{name:"google",
    rate:563,pty:333,producer:"xyz",isbig:true,price:300}])
    


    