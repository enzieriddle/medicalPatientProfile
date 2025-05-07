function PatientProfile(props) {
    return (
        <div className="patient-profile">
          <div>
              <img className="patient-profile-pic" src={props.jessicaTaylor?.profile_picture}></img>
            <p className="patient-profile-name">{props.jessicaTaylor?.name}</p>
            <div className="patient-profile-desc">
              <img height="40" width="40" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490648/BirthIcon_zrdrnw.svg"></img>
              <div className="patient-profile-info">
                <p>Date of Birth</p>
                <p>{props.jessicaTaylor?.date_of_birth}</p>
              </div>
            </div>
            <div className="patient-profile-desc">
              <img height="40" width="40" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490647/FemaleIcon_tij4os.svg"></img>
              <div className="patient-profile-info">
                <p>Gender</p>
                <p>{props.jessicaTaylor?.gender}</p>
              </div>
            </div>
            
            <div className="patient-profile-desc">
              <img height="40" width="40" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490647/PhoneIcon_t45rrj.svg"></img>
              <div className="patient-profile-info">
                <p>Contact Info</p>
                <p>{props.jessicaTaylor?.phone_number}</p>
              </div>
            </div>
            <div className="patient-profile-desc">
              <img height="40" width="40" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490647/PhoneIcon_t45rrj.svg"></img>
              <div className="patient-profile-info">
                <p>Emergency Contacts</p>
                <p>{props.jessicaTaylor?.emergency_contact}</p>
              </div>
            </div>

            <div className="patient-profile-desc">
              <img height="40" width="40" src="https://res.cloudinary.com/dtmhzk9kx/image/upload/v1746490646/InsuranceIcon_f1crwr.svg"></img>
              <div className="patient-profile-info">
                <p>Insurance Provider</p> 
                <p>{props.jessicaTaylor?.insurance_type}</p>
              </div>
            </div>

              <p className="show-all-info">Show All Information</p>
          </div>
        </div>
    );
}

export default PatientProfile