import { useState } from "react";
import EmployeeList from "../components/EmployeeList";
import { Profils } from "../data/Profils";
import EmployeeForm from "../components/EmployeeForm";
import Head from "../components/Head";

export default function Home() {
  const [profiles, setProfiles] = useState(Profils);

  const addEmployee = (newEmployee) => {
    const nextId = profiles.length > 0 ? Math.max(...profiles.map((p) => p.id)) + 1 : 1;
    setProfiles((prev) => [...prev, { id: nextId, ...newEmployee }]);
  };

  return (
    <>
      <Head />
      <EmployeeForm onAdd={addEmployee} />
      <div>
        <EmployeeList nom="Profils" items={profiles} />
      </div>
    </>
  );
}