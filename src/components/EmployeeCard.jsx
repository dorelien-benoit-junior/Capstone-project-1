export default function EmployeeCard({nom, poste, département, statut}){
    return(
        <div className="employee-card">
            <div className="employee-card-header">
                <h3>{nom}</h3>
                <span className={`status-badge status-${statut}`}>
                    {statut === 'actif' ? 'Actif' : statut === 'inactif' ? 'Inactif' : statut}
                </span>
            </div>
            <div className="employee-card-body">
                <p><strong>Poste:</strong> {poste}</p>
                <p><strong>Département:</strong> {département}</p>
            </div>
        </div>
    )
}