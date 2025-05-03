import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
        console.log(data);
        setUsersData(data)
        
    }).catch(function (error) {
        console.warn(error);
    });
  }, []);

    usersDataArray = Object.values(usersData);
    jessicaTaylor = Object.values(usersData).filter(user => user.name === 'Jessica Taylor')
    console.log(jessicaTaylor);

  const listItems = usersDataArray.map((user) =>
    <li key={user.name}>
      <div>
        <img src={user.profile_picture}></img>
        <span>{user.name}</span>
        <span>{user.gender}</span>
        <span>{user.age}</span>
      </div>
      
      
      </li> 
);

  
  return (
    <>
      <div className="layout">
      <div className="patients-list">
        <ul> {listItems}</ul>
      </div>
      <div className="diagnosis-history">
        <div>
          <p>{jessicaTaylor?.name}</p>
        </div>

        <div>
          <p>{jessicaTaylor[0]?.diagnosis_history[0]?.blood_pressure?.systolic?.value}</p>
          <p>{jessicaTaylor[0]?.diagnosis_history[0]?.blood_pressure?.systolic?.levels}</p>
        </div>

        <div>
          <p>{jessicaTaylor[0]?.diagnosis_history[0]?.blood_pressure?.diastolic?.value}</p>
          <p>{jessicaTaylor[0]?.diagnosis_history[0]?.blood_pressure?.diastolic?.levels}</p>
        </div>

        <div>
          <img height="80" width="80" src="./src/assets/respiratoryRate.svg"></img>
          <p>Respiratory Rate</p>
          <p>{jessicaTaylor[0]?.diagnosis_history[0]?.respiratory_rate?.value } bpm</p>
          <p>{jessicaTaylor[0]?.diagnosis_history[0]?.respiratory_rate?.levels }</p>
        </div>

        <div>
          <img height="80" width="80" src="./src/assets/temperature.svg"></img>
          <p>Temperature</p>
          <p>{jessicaTaylor[0]?.diagnosis_history[0]?.temperature?.value } degrees</p>
          <p>{jessicaTaylor[0]?.diagnosis_history[0]?.temperature?.levels }</p>
        </div>

        <div>
          <img height="80" width="80" src="./src/assets/heartBPM.svg"></img>
          <p>Heart Rate</p>
          <p>{jessicaTaylor[0]?.diagnosis_history[0]?.temperature?.value } bpm</p>
          <p>{jessicaTaylor[0]?.diagnosis_history[0]?.temperature?.levels }</p>
        </div>
      </div>
      
      <div className="patient-profile">
        <div>
          <div>
            <img src={jessicaTaylor[0]?.profile_picture}></img>
          </div>
          <div>
            <img height="40" width="40" src="./src/assets/FemaleIcon.svg"></img>
            <p>{jessicaTaylor[0]?.gender}</p>
          </div>
          <div>
            <img height="40" width="40" src="./src/assets/birthIcon.svg"></img>
            <p>{jessicaTaylor[0]?.date_of_birth}</p>
          </div>
          <div>
            <img height="40" width="40" src="./src/assets/PhoneIcon.svg"></img>
            <p>{jessicaTaylor[0]?.phone_number}</p>
          </div>
          <div>
            <img height="40" width="40" src="./src/assets/PhoneIcon.svg"></img>
            <p>{jessicaTaylor[0]?.emergency_contact}</p>
          </div>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default App
