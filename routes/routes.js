
// import {GenerateNewShortUrl} from '../controller'
const {Router}=require("express")
const router=Router()
const urlrouter=require('../controller/controller')


router.get('/',urlrouter.renderPage)

router.get('/:shortid',urlrouter.redirectPage)

router.post('/',urlrouter.GenerateNewShortUrl)


router.get('/analytics/:shortid',urlrouter.handleClicks)


module.exports=router
