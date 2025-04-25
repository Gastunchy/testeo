import { Card } from "react-bootstrap";
import { Building } from "react-bootstrap-icons";

import "../css/Profile.css";

const Profile = ({user}) => {
    return (
        <Card className="position-absolute top-0 start-0 ms-4 shadow-lg card-profile">
          <Card.Body>
            <div className="d-flex flex-column align-items-center">
              <img
                src={user.photo || "src/assets/Contacto.png"}
                alt="Profile"
                className="rounded-circle mx-auto d-block card-profile-body"
              />
              <Card.Title className="w-100 mt-1 text-center">{user.email}</Card.Title>
              <Card.Text className="text-muted d-flex align-items-center">
                <Building className="me-2" /> {user.company}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
    );
};

export default Profile;