const Taco = require('../models/Taco');

module.exports = tacosController = {

    home: function(req, res, next) {
        res.render('index', {title:"Taco vs Piroshki"});
    },

    index: function(req, res, next) {
        res.render('tacos/index', { tacos: Taco.getAllTacos() });
    },

    new: function(req, res, next) {
        res.render('tacos/new');
    },

    create: function(req, res, next) {
        let data = req.body;
        Taco.addTaco(data.tacoName, data.tacoProtein, data.tacoGarnish);
        res.redirect('/tacos');
    },

    show: function(req, res, next) {
        res.render('tacos/show', {taco: Taco.getTaco(req.params.id), id: req.params.id});
    },

    edit: function(req, res,  next) {
        // send the populated update form
        taco = Taco.getTaco(req.params.id);
        res.render('tacos/edit', {taco: taco, id: req.params.id});
    },

    update: function(req, res, next) {
        let data = req.body;
        Taco.updateTaco(req.params.id, data.tacoName, data.tacoProtein, data.tacoGarnish);
        res.redirect(`/tacos/${req.params.id}`);
    },

    destroy: function(req, res, next) {
        Taco.deleteTaco(req.params.id);
        res.redirect('/tacos')
    }
}
