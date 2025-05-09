import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import PatientsList from './patientsList'
import Navigation from './navigation'
import DiagnosisHistory from './diagnosisHistory.jsx'
import PatientProfile from './patientProfile.jsx'
import DiagnosisList from './diagnosisList.jsx'

function App() {

 let usersDataArray = [];
 let [usersData, setUsersData] = useState({});

  // Fetch patient data with auth
  useEffect( (username='coalition', password='skills-test') => {
    let auth = btoa(`${username}:${password}`);

    fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
        headers: {
            'Authorization': `Basic ${auth}`
        }
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
    }).then(function (data) {
        console.log(data);
        setUsersData(data)
        
    }).catch(function (error) {
        console.warn(error);
    });
  }, []); 

    // Turn fetched data into array
    usersDataArray = Object.values(usersData);

    // Set the current clicked patient
    const [currentPatient, setCurrentPatient] = useState(usersData[0]);
    // Set the previous clicked patient 
    const [prevPatient, setPrevPatient] = useState("");

    // Handle clicks on list of patients
    function handlePatientListClick(patient, idName) {
      setCurrentPatient(usersDataArray.find((user) => user.name == patient));

      // Highlight the current patient in list with class name
      let currentClick = document.getElementById(idName);
      currentClick.className += "selected-patient";

      // Remove previous clicked patient class name
      if (document.getElementById(prevPatient)) {
        document.getElementById(prevPatient).classList.remove("selected-patient");
      }
      setPrevPatient(idName)
    } 
  
  return (
    <>
      <p></p>
      <div className="layout">
        <Navigation></Navigation>
        <PatientsList handlePatientListClick={handlePatientListClick} usersDataArray={usersDataArray}></PatientsList>
        <DiagnosisHistory currentPatient={currentPatient}></DiagnosisHistory>
        <PatientProfile currentPatient={currentPatient}></PatientProfile>
        <DiagnosisList currentPatient={currentPatient} ></DiagnosisList>
        
      </div>

      
    </>
  )
}

export default App


