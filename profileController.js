// profileController.js
// Import profile model
Profile = require('./profileModel');
// Handle index actions
exports.index = function (req, res) {
    Profile.get(function (err, profiles) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Profiles retrieved successfully",
            data: profiles
        });
    });
};

exports.search = function (req, res) {
        console.log(req.body.search);
        Profile.find({profilename : { '$regex' : req.body.search, '$options' : 'i' }}).exec(function(err, docs){
            res.json({
                message: docs[0]
            });

        })
};



// Handle create profile actions
exports.new = function (req, res) {
    let profile = new Profile();
    Profile.find({profilename : req.body.profilename}).exec(function(err, docs){
        if(docs.length){
            res.json({
                message: 'Profile already exists'
            });
            } else{
            profile.profilename = req.body.profilename;
            profile.save(function (err) {
                    res.json({
                        message: 'New profile created!',
                        data: profile
                    });
                });
            }
        })
};
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
// Handle delete profile
exports.delete = function (req, res) {
    Profile.remove({
        _id: req.params.profile_id
    }, function (err, profile) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Profile deleted'
        });
    });
};


