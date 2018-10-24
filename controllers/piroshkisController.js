const Piroshki = require('../models/Piroshki');

module.exports = piroshkiController = {
    
    index: function(req, res, next) {
        res.render('piroshkis/index', {piroshkis: Piroshki.getAllPiroshkis()});
    },

    new: function(req, res, next) {
        res.render('piroshkis/new');
    },
    
    create: function(req, res, next) {
        let data = req.body;
        Piroshki.addPiroshki(data.piroshkiName, data.piroshkiFilling, data.piroshkiSize);
        res.redirect('/piroshkis');
    },

    show: function(req, res, next) {
        res.render('piroshkis/show', {piroshki: Piroshki.getPiroshki(req.params.id), id: req.params.id});
    },

    edit: function(req, res, next) {
        piroshki = Piroshki.getPiroshki(req.params.id);
        res.render('piroshkis/edit', {piroshki: piroshki, id: req.params.id});
    },
    
    update: function(req, res, next) {
        let data = req.body;
        Piroshki.updatePiroshki(req.params.id, data.piroshkiName, data.piroshkiFilling, data.piroshkiSize);
        res.redirect(`/piroshkis/${req.params.id}`);
    },

    destroy: function(req, res, next) {
        Piroshki.deletePiroshki(req.params.id);
        res.redirect('/piroshkis')
    }
}