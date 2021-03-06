const handleProfile = (req, res, db) => {
    const { id } = req.params;
    db.select('*').from('users')
        .where({ id })
        .then(user => {
            if (user.length) {
                res.json(user[0]);
            } else {
                res.status(400).json('Not Found');
            }
        })
        .catch(err => res.status(400).json('Error getting user'));
    // database.users.forEach(user => {
    //     if (user.id === id) {
    //         return res.json(user);
    //     }
    // })
    // if (!found) {
    //     res.status(400).json('Not Found');
    // }
}

module.exports = {
    handleProfile: handleProfile
}