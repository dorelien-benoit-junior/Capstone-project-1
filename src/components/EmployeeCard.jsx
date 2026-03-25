export default function EmployeeCard({nom, poste, département, statut}){
    return(
        <>
        <div>
            <h3>{nom}</h3>
            <p>Poste:{poste}</p>
            <p>Département:{département}</p>
            <p>Statut:{statut}</p>
        </div>
        </>
    )
}