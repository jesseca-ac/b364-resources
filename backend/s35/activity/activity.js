
async function addOneFunc(db) {
   await (db.rooms.insertOne({
       name: "single",
       accommodates: 2,
       price: 1000,
       description: "A simple room with all the basic necessities",
       rooms_available: 10,
       isAvailable: false
   }));

   return(db);

};


async function addManyFunc(db) {
   await (db.rooms.insertMany([
       {
           name: "double",
           accommodates: 3,
           price: 2000,
           description: "A room fit for a small family going on a vacation",
           rooms_available: 5,
           isAvailable: false
       },
       {
           name: "queen",
           accommodates: 4,
           price: 4000,
           description: "A room with a queen sized bed perfect for a simple getaway",
           rooms_available: 15,
           isAvailable: false
       }
   ]));

   return(db);

};


async function findRoom(db) {
    return await (
        db.rooms.findOne({ name: "double" })
    );
};


function updateOneFunc(db) {
    db.rooms.updateOne(
        { name: "queen" },
        {
            $set : {
                rooms_available: 0
            }
        }
    )
};




function deleteManyFunc(db) {
    db.rooms.deleteMany({
        rooms_available: 0
    })
};



async function findName(db) {
    return await(db.rooms.find({ 
        $or: [
            { name: { $regex: 's', $options: 'i' } },
            { name: { $regex: 't', $options: 'i' } }
        ]
    }, { name: 1, name: 1, _id: 0 }));

};



async function findAccom(db) {
    return await (db.rooms.find({ 
            $and: [
                { accommodates: { $gt: 2 } },
                { price: { $lte: 7000 } }
            ]
        }));

};



async function findNamePrice(db) {
    return await (db.rooms.find({ 
            $and: [
                { name: { $regex: 'd', $options: 'i' } },
                { price: { $gte: 2000 } }
            ]
        }, { name: 1, price: 1, _id: 0 }));
};


try{
    module.exports = {
        addOneFunc,
        addManyFunc,
        updateOneFunc,
        findRoom,
        deleteManyFunc,
        findName,
        findAccom,
        findNamePrice
    };
} catch(err){

};

