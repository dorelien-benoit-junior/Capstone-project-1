import EmployeeList from "../components/EmployeeList"
import { Profils } from "../data/Profils"
import EmployeeForm from "../components/EmployeeForm";
import Head from "../components/Head";


export default function Home() {

  return(
    <>
      <Head />
      <EmployeeForm />
      <div>
        <EmployeeList nom="Profils" items={Profils}/> 
      </div>
     </>
   )
}