function Navigation () {
    return(
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
    );
}

export default Navigation