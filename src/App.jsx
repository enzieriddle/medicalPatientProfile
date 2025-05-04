import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
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
        //console.log(data);
        setUsersData(data)
        
    }).catch(function (error) {
        console.warn(error);
    });
  }, []);

    usersDataArray = Object.values(usersData);
    jessicaTaylor = Object.values(usersData).filter(user => user.name === 'Jessica Taylor');
    jessicaTaylor = jessicaTaylor[0];
    console.log(jessicaTaylor);

  const patientsList = usersDataArray.map((user) =>
    <li key={user.name}>
      <div>
        <img src={user.profile_picture} alt="user profile picture"></img>
        <span>{user.name}</span>
        <span>{user.gender}</span>
        <span>{user.age}</span>
        <img src="src/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg" alt="three horizontal dots"></img>
      </div>
    </li> 
);

  const diagnosisList = jessicaTaylor?.diagnostic_list.map((diagnosis,i) =>
    <li key={diagnosis.name}>
      <div>
        <span>{diagnosis.name}</span>
        <span>{diagnosis.description}</span>
        <span>{diagnosis.status}</span>
      </div>
    </li>
  );

  const labResults = jessicaTaylor?.lab_results.map((result,i) =>
    <li key={result}>
      <div>
        <span>{result}</span>
        <img src="src/assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg" alt="download icon" />
      </div>
    </li>
  );
  
  const months = [];

 /* const diagnosisHistory = jessicaTaylor?.diagnosis_history.map((history) => 
    console.log(history)
  ); */
  jessicaTaylor?.diagnosis_history.map((history) => 
    console.log(history.blood_pressure.systolic.value)
  ); 
  //console.log(diagnosisHistory?.month);


  
  return (
    <>
      <div className="layout">
        <div className="navigation">
          <img className="logo" src="./src/assets/TestLogo.svg" alt="logo"></img>

          <div className="overview">
            <img src="./src/assets/home_FILL0_wght300_GRAD0_opsz24.svg" alt="house icon"></img>
            <p>Overview</p>
          </div>
          <div className="patients">
            <img src="src/assets/group_FILL0_wght300_GRAD0_opsz24.svg" alt="patients icon"></img>
            <p>Patients</p>
          </div>
          <div className="schedule">
            <img src="./src/assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg" alt="calendar icon"></img>
            <p>Schedule</p>
          </div>
          <div className="message">
            <img src="src/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg" alt="chat bubble icon"></img>
            <p>Message</p>
          </div>
          <div className="transaction">
            <img src="src/assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg" alt="credit card icon"></img>
            <p>Transactions</p>
          </div>

          <div className="doc-info">
            <img className="doc-img" src="./src/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="senior woman doctor" />
            <p className="doc-name">Dr. Jose Simmons</p>
            <p className="doc-title">General Practitioner</p>
          </div>

          <div className="settings">
            <img className="gear" src="./src/assets/settings_FILL0_wght300_GRAD0_opsz24.svg" alt="gear icon"></img>
            <img className="vert-dots" src="src/assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg" alt="three vertical dots icon"></img>
          </div>
        </div>
        <div className="patients-list">
          <div className="patients-head">
            <h3>Patients</h3>
            <img src="./src/assets/search_FILL0_wght300_GRAD0_opsz24.svg" alt="spy glass icon" />
          </div>
          
          <ul> {patientsList}</ul>
        </div>
        <div className="diagnosis-history">
          <div>
            <p>Diagnosis History</p>
          </div>

          <div className="chart-bp">
            <div className="line-chart">
              <Line data={{
                labels: jessicaTaylor?.diagnosis_history.slice(0,6).map(history => history.month),
                datasets: [{
                  label: "Systolic",
                  data: jessicaTaylor?.diagnosis_history.slice(0,6).map((history) => history.blood_pressure.systolic.value)
                }, {
                  label: "Diastolic",
                  data: jessicaTaylor?.diagnosis_history.slice(0,6).map((history) => history.blood_pressure.diastolic.value)
                }
              ] 
              }} />
            </div>
            <div className="bp">
              <div>
                <p>{jessicaTaylor?.diagnosis_history[0]?.blood_pressure?.systolic?.value}</p>
                <img src="./src/assets/ArrowUp.svg" alt="up arrow icon"></img>
                <p>{jessicaTaylor?.diagnosis_history[0]?.blood_pressure?.systolic?.levels}</p>
              </div>

              <div>
                <p>{jessicaTaylor?.diagnosis_history[0]?.blood_pressure?.diastolic?.value}</p>
                <img src="./src/assets/ArrowDown.svg" alt="down arrow icon"></img>
                <p>{jessicaTaylor?.diagnosis_history[0]?.blood_pressure?.diastolic?.levels}</p>
              </div>
            </div>
            
          </div>
          
          <div className="diagnosis-history-ratings">
            <div className="resp-rate">
              <img height="80" width="80" src="./src/assets/respiratoryRate.svg"></img>
              <p>Respiratory Rate</p>
              <p>{jessicaTaylor?.diagnosis_history[0]?.respiratory_rate?.value } bpm</p>
              <p>{jessicaTaylor?.diagnosis_history[0]?.respiratory_rate?.levels }</p>
            </div>

            <div className="temp">
              <img height="80" width="80" src="./src/assets/temperature.svg"></img>
              <p>Temperature</p>
              <p>{jessicaTaylor?.diagnosis_history[0]?.temperature?.value } degrees</p>
              <p>{jessicaTaylor?.diagnosis_history[0]?.temperature?.levels }</p>
            </div>

            <div className="heart-rate">
              <img height="80" width="80" src="./src/assets/heartBPM.svg"></img>
              <p>Heart Rate</p>
              <p>{jessicaTaylor?.diagnosis_history[0]?.temperature?.value } bpm</p>
              <p>{jessicaTaylor?.diagnosis_history[0]?.temperature?.levels }</p>
            </div>
          </div>
         
        </div>
        
        <div className="patient-profile">
          <div>
            <div>
              <img src={jessicaTaylor?.profile_picture}></img>
            </div>
            <p>{jessicaTaylor?.name}</p>
            <div>
              <img height="40" width="40" src="./src/assets/birthIcon.svg"></img>
              <p>Date of Birth</p>
              <p>{jessicaTaylor?.date_of_birth}</p>
            </div>
            <div>
              <img height="40" width="40" src="./src/assets/FemaleIcon.svg"></img>
              <p>Gender</p>
              <p>{jessicaTaylor?.gender}</p>
            </div>
            
            <div>
              <img height="40" width="40" src="./src/assets/PhoneIcon.svg"></img>
              <p>Contact Info</p>
              <p>{jessicaTaylor?.phone_number}</p>
            </div>
            <div>
              <img height="40" width="40" src="./src/assets/PhoneIcon.svg"></img>
              <p>Emergency Contacts</p>
              <p>{jessicaTaylor?.emergency_contact}</p>
            </div>

            <div>
              <img height="40" width="40" src="src/assets/InsuranceIcon.svg"></img>
              <p>Insurance Provider</p>
              <p>{jessicaTaylor?.insurance_type}</p>
            </div>

            <div>
              <p>Show All Information</p>
            </div>
          </div>
        </div>

        <div className="diagnostic-list">
          <ul>
            {diagnosisList}
          </ul>
        </div>
        <div className="lab-results">
          <ul>
            {labResults}
          </ul>
        </div>
      </div>

      
    </>
  )
}

export default App
