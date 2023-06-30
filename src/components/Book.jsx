import React, { useEffect, useState } from 'react';
import NavbarBookPage from './NavbarBookPage';



const Book = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [bookedServices, setBookedServices] = useState([]);

  const makeAppointment = (e) => {
    e.preventDefault();
    const appointment = { serviceName, date, time, email, name };
    console.log(appointment);
  
    fetch("https://understood-camp-production.up.railway.app/appointment/add", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(appointment),
    })
      .then((response) => {
        if (response.ok) {
          // Handle success
          console.log('Appointment added to the database.');
          // Clear the input fields after successful appointment
          setName('');
          setEmail('');
          setServiceName('');
          setDate('');
          setTime('');
          // Fetch the updated list of booked services
          fetchBookedServices();
        }
      })
      .catch((error) => {
        // Handle error
        console.log('An error occurred while adding the appointment.', error);
      });
  }
// get data from the database
const fetchBookedServices = () => {
  fetch("https://understood-camp-production.up.railway.app/appointment/getAll")
    .then((res) => res.json())
    .then((result) => {
      setBookedServices(result);
    });
};

useEffect(() => {
  fetchBookedServices();
}, []);

const cancelAppointment = (id) => {
  fetch(`https://understood-camp-production.up.railway.app/appointment/service/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  })
  .then((response) => {
    if (response.ok) {
      // Handle success
      console.log('Appointment canceled successfully.');
      // Perform any necessary updates to the bookedServices array or re-fetch the data
    } else {
      // Handle error
      console.log('Failed to cancel the appointment.');
    }
  })
  .catch((error) => {
    // Handle error
    console.log('An error occurred while canceling the appointment.', error);
  });
};
  return (
    <div>
      <NavbarBookPage/>
      <div class="container-fluid py-5 book-container">
        <div class="container py-5">
            <div class="row mx-0 justify-content-center text-center">
                <div class="col-lg-6">
                    <h6 class="d-inline-block bg-light text-primary text-uppercase py-1 px-2">Appointment</h6>
                    <h1 class="mb-5">Make An Appointment</h1>
                </div>
            </div>
            <div class="row  bg-appointment mx-0">
                <div class=" justify-content-start col-lg-6 py-5">
                    <div class="p-5 my-5" style={{background: "rgba(33, 30, 28, 0.7)"}}>
                        <h1 class="text-white text-center mb-4">Make Appointment</h1>
                        <form>
                            <div class="form-row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control bg-transparent p-4" placeholder="Your Name" required="required"
                                        value={name}
                                        onChange={(e)=>setName(e.target.value)}/>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control bg-transparent p-4" placeholder="Your Email" required="required"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <div class="date" id="date" data-target-input="nearest">
                                            <input type="date" class="form-control bg-transparent p-4 datetimepicker-input" placeholder="Select Date" data-target="#date" data-toggle="datetimepicker"
                                            value={date}
                                            onChange={(e)=>setDate(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <div class="time" id="time" data-target-input="nearest">
                                            <input type="time" class="form-control bg-transparent p-4 datetimepicker-input" placeholder="Select Time" data-target="#time" data-toggle="datetimepicker"
                                            value={time}
                                            onChange={(e)=>setTime(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <select class="custom-select bg-transparent px-4" style={{height: "47px"}}
                                        value={serviceName}
                                        onChange={(e)=>setServiceName(e.target.value)}
                                        >
                                            <option selected>Select A Service</option>
                                            <option value="Hair coloring">Hair coloring</option>
                                            <option value="Hair styling">Hair styling</option>
                                            <option value="Haircut">Haircut</option>
                                            <option value="Hair extensions">Hair extensions</option>
                                            <option value="Nail art">Nail art</option>
                                            <option value="Shampooing and conditioning">Shampooing and conditioning</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <button class="btn btn-primary btn-block" type="submit" style={{height: "47px"}}
                                    onClick={makeAppointment}>Make Appointment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class=" justify-content-start col-lg-6 py-5">
                    <div class="p-5 my-5" style={{background: "rgba(33, 30, 28, 0.7)"}}>
                        <h1 class="text-white text-center mb-4">Your Appointments</h1>
                        <div class="table-responsive">
                        {bookedServices.length === 0 ? (
                        <p>No service has been booked yet.</p>
                      ) : (

                        <table class="table">
                          <thead>
                            <tr>
                              <th>Service</th>
                              <th>Time</th>
                              <th>Date</th>
                              <th>Cancel</th>
                            </tr>
                          </thead>
                          <tbody>
                            {bookedServices.map(appointment => (
                              <tr>
                              <td>{appointment.serviceName}</td>
                              <td>{appointment.time}</td>
                              <td>{appointment.date}</td>
                              <td>
                                <button class="btn btn-danger" onClick={() => cancelAppointment(appointment.id)}>Cancel</button>
                              </td>
                            </tr>
                          ))} 
                            {/* <!-- Add more rows dynamically --> */}
                          </tbody>
                        </table>
                        )}
                      </div>             
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Book