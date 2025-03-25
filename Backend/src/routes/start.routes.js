const express = require("express");
const router = express.Router();

router.get("/connect", (req, res)=>{
    setTimeout(() => {
        res.status(200)
    }, 2000);
})

module.exports=router;