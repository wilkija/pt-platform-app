import { ensureAuth } from "../../../../utils/ensureAuth";
import Calendar from "../../../../components/workouts/Calendar";
import ScheduleWorkoutModal from '../../../../components/scheduleWorkoutModal';

export async function getServerSideProps(context) {
    const id = context.params.id;
    const res = await fetch('http://localhost:3000/api/clients/' + id)
                            .then((res) => res.json());
    const data = await res.data;

    return ensureAuth(context, (session) => {
        return {
          props: { client: data, session }
        }
     })
}

const ClientWorkouts = ({ client }) => {
  return ( 
      <>
        <div className="flex items-stretch justify-between">
          <h1 className="mb-5 ml-10 text-2xl font-bold">Workouts for { `${client.first_name} ${client.last_name}` }</h1> 
          <ScheduleWorkoutModal />
        </div>
        <Calendar />
      </>
   );
}
 
export default ClientWorkouts;