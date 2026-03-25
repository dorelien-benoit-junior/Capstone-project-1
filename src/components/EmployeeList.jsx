import EmployeeCard from "./EmployeeCard";
export default function EmployeeList({nom, items, poste, département, statut}){
    return(<section>
      <div>
         <h2>{nom}</h2>
       <div className="media-container">
        {items.map((item)=>(
            <EmployeeCard
            key={item.id}
            nom={item.nom}
            poste={item.poste}
            département={item.département}
            statut={item.statut}
            />
        ) )}
        </div>
      </div>
 </section>)
}