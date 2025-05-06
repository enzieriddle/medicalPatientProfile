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
    <li key={user.name} className={user.name == "Jessica Taylor" ? 'selected-patient': '' }> 
      <div className="patient-style">
        <img className="patient-img" src={user.profile_picture} alt="user profile picture"></img>
        <p className="patient-name">{user.name}</p>
        <div className="age-gender">
          <span>{user.gender}, </span>
          <span>{user.age}</span>  
        </div>  
        <img className="horiz-dots" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490641/more_horiz_FILL0_wght300_GRAD0_opsz24_fq86xk.svg" alt="three horizontal dots"></img>
      </div>  
    </li> 
);

  const diagnosisList = jessicaTaylor?.diagnostic_list.map((diagnosis,i) =>
    <li key={diagnosis.name}>
      <div className="list-layout">
        <p className="ll-name">{diagnosis.name}</p>
        <p className="ll-desc">{diagnosis.description}</p>
        <p className="ll-status">{diagnosis.status}</p>
      </div>
    </li>
  );

  const labResults = jessicaTaylor?.lab_results.map((result,i) =>
    <li className="result-li" key={result}>
      <div className="result-layout">
        <p className="result-name">{result}</p>
        <img className="result-dl-btn" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490639/download_FILL0_wght300_GRAD0_opsz24_1_gkte1k.svg" alt="download icon" />
      </div>
    </li> 
  );
  
  const months = [];

  const chartOptions = {
  plugins: {
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true
      }
    }
  }}

  
  return (
    <>
      <div className="layout">
        <div className="navigation">
          <img className="logo" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490646/TestLogo_vnqzed.svg" alt="logo"></img>

          <div className="overview">
            <img src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490645/home_FILL0_wght300_GRAD0_opsz24_tf8mfh.svg" alt="house icon"></img>
            <p>Overview</p> 
          </div>
          <div className="patients">
            <img src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490644/group_FILL0_wght300_GRAD0_opsz24_xk0nur.svg" alt="patients icon"></img>
            <p>Patients</p>
          </div>
          <div className="schedule">
            <img src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490644/calendar_today_FILL0_wght300_GRAD0_opsz24_mvdcbn.svg" alt="calendar icon"></img>
            <p>Schedule</p>
          </div>
          <div className="message">
            <img src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490643/chat_bubble_FILL0_wght300_GRAD0_opsz24_gkfh48.svg" alt="chat bubble icon"></img>
            <p>Message</p>
          </div>
          <div className="transaction">
            <img src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490643/credit_card_FILL0_wght300_GRAD0_opsz24_robsts.svg" alt="credit card icon"></img>
            <p>Transactions</p>
          </div>

          <div className="doc-info">
            <img className="doc-img" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490638/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc_fej7oe.png" alt="senior woman doctor" />
            <p className="doc-name">Dr. Jose Simmons</p>
            <p className="doc-title">General Practitioner</p>
          </div>

          <div className="settings">
            <img className="gear" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490641/settings_FILL0_wght300_GRAD0_opsz24_c8jclu.svg" alt="gear icon"></img>
            <img className="vert-dots" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490642/more_vert_FILL0_wght300_GRAD0_opsz24_nqefjx.svg" alt="three vertical dots icon"></img>
          </div>
        </div>
        <div className="patients-list">
          <div className="patients-head">
            <h3>Patients</h3> 
            <img src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490640/search_FILL0_wght300_GRAD0_opsz24_r62wto.svg" alt="spy glass icon" />
          </div> 
          
          <ul className="patients-list-ul"> {patientsList}</ul>
        </div>
        <div className="diagnosis-history">
          <h3>Diagnosis History</h3>

          <div className="chart-bp-background">
          <div className="bp-head">
              <p className="bp-head-title">Blood Pressure</p>
              <p className="date-range">Last 6 months</p>
              <img className="bp-head-arrow" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490638/expand_more_FILL0_wght300_GRAD0_opsz24_2x_ycnyhf.png" alt="down-arrow-icon"></img>
          </div>

          <div className="chart-bp"> 
            <div className="line-chart">
              <Line options={chartOptions} data={{
                labels: jessicaTaylor?.diagnosis_history.slice(0,6).map(history => history.month),
                datasets: [{
                  label: "Systolic",
                  data: jessicaTaylor?.diagnosis_history.slice(0,6).map((history) => history.blood_pressure.systolic.value),
                  tension: .3,
                  borderColor: '#E66FD2',
                  pointBackgroundColor: '#E66FD2',
                  pointRadius: 5
                }, {
                  label: "Diastolic",
                  data: jessicaTaylor?.diagnosis_history.slice(0,6).map((history) => history.blood_pressure.diastolic.value),
                  tension: .3,
                  borderColor: '#7E6CAB',
                  pointBackgroundColor: '#7E6CAB',
                  pointRadius: 5
                }
              ],
              options: {
                plugins: {
                    legend: { 
                        position: "right"
                    }
                  }
                }
              }} />
            </div>
            <div className="bp">
              <div className="systolic">
                <p>{jessicaTaylor?.diagnosis_history[0]?.blood_pressure?.systolic?.value}</p>
                <img src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490640/ArrowUp_cktxgd.svg" alt="up arrow icon"></img>
                <span>{jessicaTaylor?.diagnosis_history[0]?.blood_pressure?.systolic?.levels}</span>
              </div>

              <div className="diastolic">
                <p>{jessicaTaylor?.diagnosis_history[0]?.blood_pressure?.diastolic?.value}</p>
                <img src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490639/ArrowDown_xi4bbo.svg" alt="down arrow icon"></img>
                <span>{jessicaTaylor?.diagnosis_history[0]?.blood_pressure?.diastolic?.levels}</span>
              </div>
            </div>
          </div>
          </div>
          
          
          <div className="diagnosis-history-ratings">
            <div className="resp-rate">
              <img height="80" width="80" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490649/respiratoryRate_dsakqf.svg"></img>
              <p className="ratings-title">Respiratory Rate</p>
              <p className="ratings-value">{jessicaTaylor?.diagnosis_history[0]?.respiratory_rate?.value } bpm</p>
              <p>{jessicaTaylor?.diagnosis_history[0]?.respiratory_rate?.levels }</p>
            </div>

            <div className="temp">
              <img height="80" width="80" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490648/temperature_oydjh4.svg"></img>
              <p className="ratings-title">Temperature</p>
              <p className="ratings-value">{jessicaTaylor?.diagnosis_history[0]?.temperature?.value } °F</p>
              <p>{jessicaTaylor?.diagnosis_history[0]?.temperature?.levels }</p>
            </div>

            <div className="heart-rate">
              <img height="80" width="80" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490649/HeartBPM_mdxo1d.svg"></img>
              <p className="ratings-title">Heart Rate</p>
              <p className="ratings-value">{jessicaTaylor?.diagnosis_history[0]?.heart_rate?.value } bpm</p>
              <img className="heart-rate-down-arrow" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490639/ArrowDown_xi4bbo.svg" alt="down arrow icon"></img>
              <span>{jessicaTaylor?.diagnosis_history[0]?.heart_rate?.levels }</span>
            </div>
          </div>
         
        </div>
        
        <div className="patient-profile">
          <div>
              <img className="patient-profile-pic" src={jessicaTaylor?.profile_picture}></img>
            <p className="patient-profile-name">{jessicaTaylor?.name}</p>
            <div className="patient-profile-desc">
              <img height="40" width="40" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490648/BirthIcon_zrdrnw.svg"></img>
              <div className="patient-profile-info">
                <p>Date of Birth</p>
                <p>{jessicaTaylor?.date_of_birth}</p>
              </div>
            </div>
            <div className="patient-profile-desc">
              <img height="40" width="40" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490647/FemaleIcon_tij4os.svg"></img>
              <div className="patient-profile-info">
                <p>Gender</p>
                <p>{jessicaTaylor?.gender}</p>
              </div>
            </div>
            
            <div className="patient-profile-desc">
              <img height="40" width="40" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490647/PhoneIcon_t45rrj.svg"></img>
              <div className="patient-profile-info">
                <p>Contact Info</p>
                <p>{jessicaTaylor?.phone_number}</p>
              </div>
            </div>
            <div className="patient-profile-desc">
              <img height="40" width="40" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490647/PhoneIcon_t45rrj.svg"></img>
              <div className="patient-profile-info">
                <p>Emergency Contacts</p>
                <p>{jessicaTaylor?.emergency_contact}</p>
              </div>
            </div>

            <div className="patient-profile-desc">
              <img height="40" width="40" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490646/InsuranceIcon_f1crwr.svg"></img>
              <div className="patient-profile-info">
                <p>Insurance Provider</p> 
                <p>{jessicaTaylor?.insurance_type}</p>
              </div>
            </div>

              <p className="show-all-info">Show All Information</p>
          </div>
        </div>
 
        <div className="diagnostic-list">
          <h3>Diagnosis List</h3>
          <div className="list-header">
            <p className="problem-diag">Problem/Diagnosis</p>
            <p className="list-desc">Description</p>
            <p className="list-status">Status</p>
          </div>
          <ul>
            {diagnosisList}
          </ul>
        </div>
        <div className="lab-results">
          <h3>Lab Results</h3>
          <ul>
            {labResults}
          </ul>
        </div>
      </div>

      
    </>
  )
}

export default App
