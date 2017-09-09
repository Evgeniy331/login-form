const router = require("express").Router();

const registeredUsers =  require("../../data/mockData").registeredUsers;

router.post("/login", (req, res, next) => {

    let isFound = false;

    registeredUsers.forEach( user => {
        
        if (req.body.login === user.login 
            && req.body.password === user.password && !isFound) {
                
                isFound = true;

                setTimeout( () => {
                    res.send({
                        "Auth":"Logged",
                        "Language":"EN"
                    });
                }, 1000);

        }
    });

    if (!isFound) {
        setTimeout( () => {
            res.send({"Auth":"Denied"});
        }, 1000);
    }

});

module.exports = router;