import React from 'react';
import './EmployeeForm.css';

const EmployeeForm = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const employee = {
      nom: formData.get('nom'),
      poste: formData.get('poste'),
      département: formData.get('département'),
      statut: formData.get('statut'),
    };

    onAdd(employee);
    e.target.reset();
  };

  return (
    <div className="employee-form-container">
        <h1>Gestion des Employés</h1>

        <div className="form-sections">
            <form onSubmit={handleSubmit}>
                <h2>➕ Ajouter un employé</h2>

                <div className="form-group">
                    <label htmlFor="nom">Nom:</label>
                    <input
                    type="text"
                    id="nom"
                    name="nom"
                    placeholder="Entrez le nom de l'employé"
                    required />
                </div>

                <div className="form-group">
                    <label htmlFor="poste">Poste:</label>
                    <input
                    type="text"
                    id="poste"
                    name="poste"
                    placeholder="Entrez le poste occupé"
                    required />
                </div>

                <div className="form-group">
                    <label htmlFor="département">Département:</label>
                    <input
                    type="text"
                    id="département"
                    name="département"
                    placeholder="Entrez le département"
                    required />
                </div>

                <div className="form-group">
                    <label htmlFor="statut">Statut:</label>
                    <select id="statut" name="statut" required>
                        <option value="">Sélectionnez un statut</option>
                        <option value="actif">✅ Actif</option>
                        <option value="inactif">❌ Inactif</option>
                        {/* <option value="congé">En congé</option>
                        <option value="formation">En formation</option> */}
                    </select>
                </div>

                <button type="submit">Ajouter l'employé</button>
            </form>
        </div>
    </div>
  )
}

export default EmployeeForm