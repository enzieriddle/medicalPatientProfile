import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

function DiagnosisHistory(props) {

  /*const chartOptions = {
    plugins: {
      legend: {
        position: 'top',
        labels:
          usePointStyle: true
        }
      }
    }*/

    return (
        <>
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
              <Line data={{
                labels: props.jessicaTaylor?.diagnosis_history.slice(0,6).map(history => history.month),
                datasets: [{
                  label: "Systolic",
                  data: props.jessicaTaylor?.diagnosis_history.slice(0,6).map((history) => history.blood_pressure.systolic.value),
                  tension: .3,
                  borderColor: '#E66FD2',
                  pointBackgroundColor: '#E66FD2',
                  pointRadius: 5
                }, {
                  label: "Diastolic",
                  data: props.jessicaTaylor?.diagnosis_history.slice(0,6).map((history) => history.blood_pressure.diastolic.value),
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
                <p>{props.jessicaTaylor?.diagnosis_history[0]?.blood_pressure?.systolic?.value}</p>
                <img src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490640/ArrowUp_cktxgd.svg" alt="up arrow icon"></img>
                <span>{props.jessicaTaylor?.diagnosis_history[0]?.blood_pressure?.systolic?.levels}</span>
              </div>

              <div className="diastolic">
                <p>{props.jessicaTaylor?.diagnosis_history[0]?.blood_pressure?.diastolic?.value}</p>
                <img src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490639/ArrowDown_xi4bbo.svg" alt="down arrow icon"></img>
                <span>{props.jessicaTaylor?.diagnosis_history[0]?.blood_pressure?.diastolic?.levels}</span>
              </div>
            </div>
          </div>
          </div>
          
          
          <div className="diagnosis-history-ratings">
            <div className="resp-rate">
              <img height="80" width="80" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490649/respiratoryRate_dsakqf.svg"></img>
              <p className="ratings-title">Respiratory Rate</p>
              <p className="ratings-value">{props.jessicaTaylor?.diagnosis_history[0]?.respiratory_rate?.value } bpm</p>
              <p>{props.jessicaTaylor?.diagnosis_history[0]?.respiratory_rate?.levels }</p>
            </div>

            <div className="temp">
              <img height="80" width="80" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490648/temperature_oydjh4.svg"></img>
              <p className="ratings-title">Temperature</p>
              <p className="ratings-value">{props.jessicaTaylor?.diagnosis_history[0]?.temperature?.value } °F</p>
              <p>{props.jessicaTaylor?.diagnosis_history[0]?.temperature?.levels }</p>
            </div>

            <div className="heart-rate">
              <img height="80" width="80" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490649/HeartBPM_mdxo1d.svg"></img>
              <p className="ratings-title">Heart Rate</p>
              <p className="ratings-value">{props.jessicaTaylor?.diagnosis_history[0]?.heart_rate?.value } bpm</p>
              <img className="heart-rate-down-arrow" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490639/ArrowDown_xi4bbo.svg" alt="down arrow icon"></img>
              <span>{props.jessicaTaylor?.diagnosis_history[0]?.heart_rate?.levels }</span>
            </div>
          </div>
         
        </div>
        </>
    )
}

export default DiagnosisHistory