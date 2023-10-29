import { EmployeeCard, getSelectedEmployee } from "entities/Employee";
import { useSelector } from "react-redux";

const ProfilePage = () => {
    const employee = useSelector(getSelectedEmployee)
    return <div>
        <EmployeeCard employee={employee} />
    </div>;
};

export default ProfilePage;
