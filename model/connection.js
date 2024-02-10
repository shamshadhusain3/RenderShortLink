const mongoose=require('mongoose');


const conn =mongoose.connect('mongodb+srv://husainshamshad68:shamshad123@shortlinkcluster.tcjfc9x.mongodb.net/?retryWrites=true&w=majority').then(()=>{

console.log( "Mongodb connected successfully"); 

}).catch((err)=>{
    console.error("Error connecting to Mongodb", err);
});



// module.exports=conn