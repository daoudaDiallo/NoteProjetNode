var db = require('../db');

var Matiere = {
    getmatieres: function (callback) {
        return db.query('SELECT * from t_matiere', callback);
    },
    creatematiere: function (Matiere, callback) {
        return db.query('Insert into t_matiere(libelle, coefficient) values(?, ?)', [Matiere.libelle, Matiere.coefficient], callback);
    },
    deletematiere: function (Matiere, callback) {
        return db.query('DELETE from t_matiere WHERE id = ?', [Matiere.id], callback);
    }
}

module.exports = Matiere;