
const url=require("../model/schema");
const shortid=require('shortid');


// controller ,create function to controll from here

class urlrouter{

    
    static GenerateNewShortUrl=async(req,res)=>{
    // const body=req.body;
    const shortId=shortid();
   const request=req.body.url.includes('http')
   
  
    console.log('chalta hai',request)
   if (request) {
    await url.create({
        shortId:shortId,
        redirectUrl:req.body.url,
        visitedHistory:[]

    })
    const shortLink=`/url/${shortId}`
    const shortLinkH=`/url/analytics/${shortId}`

res.render('short',{shortLink,shortLinkH,request,shortId})
   }else{
        
        // res.send({"status":"failed", "message":'Please enter a valid URL with http or https.',"url":`https://${req.body.url}`}); 

        const addUrl=`https://${req.body.url}`
        await url.create({
            shortId:shortId,
            redirectUrl:addUrl,
            visitedHistory:[]
    
        })
       const shortLink=`/url/${shortId}`
    const shortLinkH=`/url/analytics/${shortId}`
    
    res.render('short',{shortLink,shortLinkH,request,shortId})

   }
  
   
//     res.json({"message":"url has been shortened",
// "your short id is":`http://localhost:3000/${shortId}`}) 
// const shortLink=`http://localhost:3000/url/${shortId}`
// res.render('short',{shortLink})
console.log(shortId)
console.log(req.body.url)
}

static redirectPage= async (req, res) => {
    const shortId=req.params.shortid
    console.log(shortId)
    const entry=await url.findOneAndUpdate({shortId:shortId},{ $push:{visitedHistory:{timestamp:Date.now()}}})

       
   
    console.log(entry)
    console.log(entry.redirectUrl);
   res.redirect(entry.redirectUrl); 
}

static handleClicks=async(req,res)=>{
    const shortId=req.params.shortid
    console.log('id',shortId)
    let result=await url.findOne({shortId})
    console.log('handle',result.shortId)
    // return res.json({
    //     totalClicks:result.visitedHistory.length,
    //     visitedHistory:result.visitedHistory
    // })

// console.log(result.visitedHistory.length)
    res.render('history',{result})
}

static renderPage=async(req,res)=>{
    const redirectUrl=req.body.redirectUrl
    const entry=await url.findOne({redirectUrl})
    
    res.render('index',{})
}

}

module.exports=urlrouter;
