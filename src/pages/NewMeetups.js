import NewMeetupForm from "../components/meetups/NewMeetup";
import { useNavigate } from "react-router";
function NewMeetups(){
    const navigate=useNavigate()
    function addMeetup(meetupdata){
        fetch("https://react-49783-default-rtdb.firebaseio.com/meetups.json",{
            method:"POST",
            body:JSON.stringify(meetupdata),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(()=>{
            navigate('/')
        })
    }
    return<div>
        <h1>Add New Meet up</h1>
        <NewMeetupForm onAddMeetups={addMeetup}/>
    </div>
}
export default NewMeetups;