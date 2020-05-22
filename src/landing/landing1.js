import React from "react";
import "./landing1.css";

const Landing1 = () => {
  return (
    <div className="landing1">
      <landing>
        <div className="landing1_text">
          <h1>Quality Service</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architectoeaque ipsa quae
            ab illo inventore.
          </p>
          <div className="landing1_links">
            <a href="#" id="view_services">
              View Services
            </a>
            <a href="#" id="make_appointment">
              Make Appointment
            </a>
          </div>
        </div>
        <div>
          <i class="fas fa-arrow-alt-circle-down"></i>
        </div>
      </landing>
    </div>
  );
};

export default Landing1;
