import React from 'react'
import './EmployeeForm.css';
import { useState } from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeForm = () => {
  const [employees, setEmployees] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const employee = {
      nom: formData.get('nom'),
      poste: formData.get('poste'),
      département: formData.get('département'),
      statut: formData.get('statut')
    };
    setEmployees([...employees, employee]);
    e.target.reset();
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nom">Nom:</label>
            <input 
            type="text" 
            id="nom" 
            name="nom" 
            required />

            <label htmlFor="poste">Poste:</label>
            <input 
            type="text" 
            id="poste" 
            name="poste" 
            required />

            <label htmlFor="département">Département:</label>
            <input 
            type="text" 
            id="département" 
            name="département" 
            required />

            <label htmlFor="statut">Statut:</label>
            <select id="statut" name="statut" required>
                <option value="">Sélectionnez un statut</option>
                <option value="actif">Actif</option>
                <option value="inactif">Inactif</option>
                {/* <option value="congé">En congé</option>
                <option value="formation">En formation</option> */}
            </select>

            <button type="submit">Ajouter l'employé</button>
        </form>

        <div className="employees-list">
            <h2>Employés ajoutés:</h2>
            {employees.length === 0 ? (
                <p>Aucun employé ajouté pour le moment.</p>
            ) : (
                employees.map((employee, index) => (
                    <EmployeeCard 
                        key={index}
                        nom={employee.nom}
                        poste={employee.poste}
                        département={employee.département}
                        statut={employee.statut}
                    />
                ))
            )}
        </div>

    </div>
  )
}

export default EmployeeForm