import { useParams } from 'react-router';
import fakeData from '../../fakeData/fakeData3.json'
import './DoctorDetails.css'
const DoctorDetails = () => {
  const { key } = useParams();
  // const result = fakeData.find(doctor=>doctor.id===key) find function is not working
  const doctor = {
    id: fakeData[key - 1].id,
    title: fakeData[key - 1].title,
    name: fakeData[key - 1].name,
    img: fakeData[key - 1].docImg,
    time: fakeData[key - 1].time,
    fee: fakeData[key - 1].fee,
  }
  const { img, name, title, time, fee } = doctor;

  //console.log(doctor)    
  return (
    <div class="card m-5 p-3 doctorCard"  >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={img}
            alt="..."
            class="img-fluid"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Title: {title}</li>
              <li class="list-group-item">Fee: {fee}</li>
              <li class="list-group-item">Time: {time}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;