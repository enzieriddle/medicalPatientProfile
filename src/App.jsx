import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import PatientsList from './patientsList'
import Navigation from './navigation'
import DiagnosisHistory from './diagnosisHistory.jsx'
import PatientProfile from './patientProfile.jsx'
import DiagnosisList from './diagnosisList.jsx'

function App() {

 let jessicaTaylor = {};
 let usersDataArray = [];
 let [usersData, setUsersData] = useState({});

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
        //console.log(data);
        setUsersData(data)
        
    }).catch(function (error) {
        console.warn(error);
    });
  }, []);

    usersDataArray = Object.values(usersData);
    console.log(usersDataArray);
    jessicaTaylor = Object.values(usersData).filter(user => user.name === 'Jessica Taylor');
    jessicaTaylor = jessicaTaylor[0];
    //console.log(jessicaTaylor);

  

  
  return (
    <>
      <div className="layout">
        <Navigation></Navigation>
        <PatientsList usersDataArray={usersDataArray}></PatientsList>
        <DiagnosisHistory jessicaTaylor={jessicaTaylor}></DiagnosisHistory>
        <PatientProfile jessicaTaylor={jessicaTaylor}></PatientProfile>
        <DiagnosisList jessicaTaylor={jessicaTaylor} ></DiagnosisList>
        
 
        
      </div>

      
    </>
  )
}

export default App
