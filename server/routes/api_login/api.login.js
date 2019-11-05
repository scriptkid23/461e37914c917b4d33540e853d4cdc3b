var express = require('express');
var router = express.Router();



/* handle data from client */
router.post('/auth/login', function(req, res, next) {
  if(req.body.username === "83262" && req.body.password === "83262"){
      res.send({"alert": true});
    
  }else{
      res.send({"alert": false})
  }
});



module.exports = router;
