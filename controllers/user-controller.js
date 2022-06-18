const { User } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    // get  single user
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            // .populate(
            //     {
            //         path: 'thoughts',
            //         select: '-__v'
            //     }
            // )
            .select('-__v')
            .then(dbUserData => {
                if(!dbUserData) {
                    res.status(404).json({ message: 'There is no user with that id!' });
                    return;
                };
                
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    // post a user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    }
};

module.exports = userController;