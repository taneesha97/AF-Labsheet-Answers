//------------------Lab 3-------------------------------
//1,2,3
db.user.insert({
    
   "name" : "John",
   "dateOfBirth" : "1990-01-01T00:00:00Z",
    "subjects": ["Application frameworks", "Computer architecture"]
    
    
 })
 
 db.user.find() 
 //4 - find by name
 db.user.find({name : "John"})
 
 
 //5
 db.user.find({_id : ObjectId("604df649dee049a01f07743e")})
 db.getCollection('user').find({"_id" : ObjectId("604df649dee049a01f07743e")})
 
 //6
 db.user.update({name : ("John")} , {$addToSet : {subjects: "Distributed computing"}});
 
 //7 -  Add the 2 document to the same collection.
 db.user.insertMany([
 {
    "name": "Smith",
    "dateOfBirth": "1990-01-15T00:00:00Z",
    "subjects": ["Application frameworks", "Computer architecture"],
    "isActive": true
},
{
    "name": "Jane",
    "dateOfBirth": "1990-02-15T00:00:00Z",
    "subjects": ["Application frameworks", "Computer architecture"],
    "isActive": false
}
 
]);

db.user.find({name:"Smith"}, {isActive: "true"}, {$addToSet: "Distibuted Computing"})

//8 = Update the first document ‘isActive’ to false
db.getCollection('user').updateOne({}, {$set: {"isActive" : false}})

//9 = Remove the first document created.
db.user.deleteOne({})
db.getCollection('user').deleteOne({});

