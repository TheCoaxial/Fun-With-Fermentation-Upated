const db = require("../models");

module.exports = function(app) {
    
    // GET ROUTES

    // User Data
    app.get("/api/user/:userId", (req, res) => {
        db.User
        .findAll({
            where: {
                id: req.params.userId
            }
        })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            if (err) {
                res.sendStatus(500);
                console.error(err);
            }
        });
    });

    // User Brews
    app.get("/api/user/:userId/brews", (req, res) => {
        db.Brew
        .findAll({
            where: {
                id: req.params.userId
            }
        })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            if (err) {
                res.sendStatus(500);
                console.error(err);
            }
        });
    });

    // Specific Brew
    app.get("/api/brew/:brewId", (req, res) => {
        db.Brew
        .findAll({
            where: {
                id: req.params.brewId
            }
        })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            if (err) {
                res.sendStatus(500);
                console.error(err);
            }
        });
    });

    // POST ROUTES

    // New Brew
    app.post("/api/:userId/newBrew", (req, res) => {
        db.Brew
        .create({
            name: req.body.brewName,
            description: req.body.description,
            ingredients: req.body.ingredients,
            UserId: req.params.userId
        })
        .then(newBrew => res.json(newBrew))
        .catch(err => {
            if (err) {
                res.sendStatus(500);
                console.error(err);
            }
        });
    });

    // New Comment
    app.post("/api/:userId/:brewId/newComment", (req, res) => {
        db.Comment
        .create({
            author: req.params.userId,
            BrewId: req.params.brewId,
            body: req.body.body
        })
        .then(newComment => res.json(newComment))
        .catch(err => {
            if (err) {
                res.sendStatus(500);
                console.error(err);
            }
        });
    });

}