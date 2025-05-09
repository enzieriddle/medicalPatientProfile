function PatientProfile(props) {
    return (
        <div className="patient-profile">
          <div>
              <img className="patient-profile-pic" src={props.currentPatient?.profile_picture}></img>
            <p className="patient-profile-name">{props.currentPatient?.name}</p>
            <div className="patient-profile-desc">
              <img height="40" width="40" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490648/BirthIcon_zrdrnw.svg"></img>
              <div className="patient-profile-info">
                <p>Date of Birth</p>
                <p>{props.currentPatient?.date_of_birth}</p>
              </div>
            </div>
            <div className="patient-profile-desc">
              <img height="40" width="40" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490647/FemaleIcon_tij4os.svg"></img>
              <div className="patient-profile-info">
                <p>Gender</p>
                <p>{props.currentPatient?.gender}</p>
              </div>
            </div>
            
            <div className="patient-profile-desc">
              <img height="40" width="40" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490647/PhoneIcon_t45rrj.svg"></img>
              <div className="patient-profile-info">
                <p>Contact Info</p>
                <p>{props.currentPatient?.phone_number}</p>
              </div>
            </div>
            <div className="patient-profile-desc">
              <img height="40" width="40" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490647/PhoneIcon_t45rrj.svg"></img>
              <div className="patient-profile-info">
                <p>Emergency Contacts</p>
                <p>{props.currentPatient?.emergency_contact}</p>
              </div>
            </div>

            <div className="patient-profile-desc">
              <img height="40" width="40" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490646/InsuranceIcon_f1crwr.svg"></img>
              <div className="patient-profile-info">
                <p>Insurance Provider</p> 
                <p>{props.currentPatient?.insurance_type}</p>
              </div>
            </div>

              <p className="show-all-info">Show All Information</p>
          </div>
        </div>
    );
}

export default PatientProfile