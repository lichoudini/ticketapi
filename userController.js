// profileController.js
// Import profile model
User = require('./userModel');
// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, user) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: user
        });
    });
};


exports.validate = function (req, res) {
        User.find({user : req.body.user, password : req.body.password}).exec(function(err, docs){
            res.json({
                message: docs[0]
            });
        });
};



// Handle create profile actions
exports.new = function (req, res) {
    let user = new User();
    User.find({user : req.body.user}).exec(function(err, docs){
        if(docs.length){
            res.json({
                message: 'User already exists'
            });
            } else{
            user.user = req.body.user;
            user.password = req.body.password;
            user.save(function (err) {
                    res.json({
                        message: 'New user created!',
                        data: user
                    });
                });
            }
        })
};

/*
// Handle view profile info
exports.view = function (req, res) {
    Profile.findById(req.params.profile_id, function (err, profile) {
        if (err)
            res.send(err);
        res.json({
            message: 'Profile details loading..',
            data: profile
        });
    });
};
// Handle update profile info
exports.update = function (req, res) {
Profile.findById(req.params.profile_id, function (err, profile) {
        if (err)
            res.send(err);
        profile.profileid = req.body.profileid ? req.body.profileid : profile.profileid;
        profile.profilename = req.body.profilename;
// save the profile and check for errors
        profile.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Profile Info updated',
                data: profile
            });
        });
    });
};
*/


exports.delete = function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, function (err, user) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'User deleted'
        });
    });
};

