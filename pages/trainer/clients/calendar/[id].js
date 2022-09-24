import { ensureAuth } from "../../../../utils/ensureAuth";
import Calendar from "../../../../components/workouts/Calendar";
import ScheduleWorkoutModal from '../../../../components/scheduleWorkoutModal';
import { useState } from "react";

export async function getServerSideProps(context) {
    const id = context.params.id;
    const clientRes = await fetch('http://localhost:3000/api/clients/' + id)
                            .then((res) => res.json());
    const client = await clientRes.data;
    const workoutsRes = await fetch('http://localhost:3000/api/workouts/')
                            .then((res) => res.json());
    const workouts = await workoutsRes.data;

    const entryRes = await fetch('http://localhost:3000/api/calendar/' + id)
                              .then((res) => res.json());
    const entries = await entryRes.data;
    // console.log(entries)


    return ensureAuth(context, (session) => {
        return {
          props: { client, workouts, entries, session }
        }
     })
}

const ClientWorkouts = ({ client, workouts, entries }) => {
  let [formDay, setFormDay] = useState(null)

  return ( 
      <>
        <div className="flex items-stretch justify-between">
          <h1 className="mb-5 ml-10 text-2xl font-bold">Workouts for { `${client.first_name} ${client.last_name}` }</h1> 
          <ScheduleWorkoutModal client={client} workouts={workouts} formDay={formDay}/>
        </div>
        <Calendar setFormDay={setFormDay} entries={entries}/>
      </>
   );
}
 
export default ClientWorkouts;