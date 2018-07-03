var db = require('../db');

var Etudiant = {
    getetudiants: function(callback)
    {
        return db.query('SELECT * from t_etudiant', callback);
    },
    createetudiant: function (Etudiant, callback) {
        return db.query('Insert into t_etudiant(matricule, nom, prenom) values(?, ?, ?)',[Etudiant.matricule, Etudiant.nom, Etudiant.prenom], callback);
    }
}

module.exports = Etudiant;