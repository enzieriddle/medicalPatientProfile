function PatientsList(props) {
    let userName= ""

    // Map each patient in array of patients to a list item
    const patientsList = props.usersDataArray.map((user, i) =>
        <li onClick={() => props.handlePatientListClick(user.name, user.name+i)} key={user.name} id={user.name + i} className=""> 
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

    return(
        <div className="patients-list">
          <div className="patients-head">
            <h3>Patients</h3> 
            <img src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490640/search_FILL0_wght300_GRAD0_opsz24_r62wto.svg" alt="spy glass icon" />
          </div> 
          
          <ul className="patients-list-ul"> {patientsList}</ul>
        </div>
    );
}

export default PatientsList

