var db = require('../db');

var Note = {
    getnotes: function(callback)
    {
        return db.query('SELECT t_note.valeur as note, t_matiere.libelle as lib, t_matiere.coefficient as coef, t_etudiant.nom as nom, t_etudiant.prenom as pren, t_etudiant.matricule as mat  FROM t_note, t_matiere, t_etudiant WHERE t_note.id_etudiant = t_etudiant.id_etudiant AND t_note.id_matiere = t_matiere.id_matire', callback);
    },
    createnote: function (Note, callback) {
        created = new Date();
        return db.query('Insert into t_note(valeur, date_creation, id_matiere, id_etudiant) values(?, ?, ?, ?)',[Note.valeur, created, Note.id_matiere, Note.id_etudiant], callback);
    }
}

module.exports = Note;