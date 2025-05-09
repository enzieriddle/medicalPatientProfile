function DiagnosisList (props) {

  // Map each diagnosis in the array of diagnosis to a list item
  const diagnosisList = props.currentPatient?.diagnostic_list.map((diagnosis,i) =>
    <li key={props.currentPatient.name + i}>
      <div className="list-layout">
        <p className="ll-name">{diagnosis.name}</p>
        <p className="ll-desc">{diagnosis.description}</p>
        <p className="ll-status">{diagnosis.status}</p>
      </div>
    </li>
  );

  // Map each lab result in the array of results to a list item
  const labResults = props.currentPatient?.lab_results.map((result,i) =>
    <li className="result-li" key={result}>
      <div className="result-layout">
        <p className="result-name">{result}</p>
        <img className="result-dl-btn" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490639/download_FILL0_wght300_GRAD0_opsz24_1_gkte1k.svg" alt="download icon" />
      </div>
    </li> 
  );

    return (
      <>
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
        </>
    )
}

export default DiagnosisList