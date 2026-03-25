import EmployeeList from "../components/EmployeeList"
import { Profils } from "../data/Profils"
export default function Home() {

  return(
    <>
   
   
    
   <div>
     <EmployeeList nom="Profils" items={Profils}/> 
   </div>
    
     </>
   )
}