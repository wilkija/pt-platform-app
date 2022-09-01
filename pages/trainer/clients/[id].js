import { useRouter } from "next/router";
import { ensureAuth } from '../../../utils/ensureAuth';

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


const ClientDetails = ({ client }) => {
    const router = useRouter();
    // Handle the submit event on form submit.
    const handleUpdate = async (e) => {
        // Stop the form from submitting and refreshing the page.
        e.preventDefault();

        try {
            // Get data from the form.
            const data = {
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                height: e.target.height.value,
                weight: e.target.weight.value,
                birthday: e.target.birthday.value,
                gender: e.target.gender.value,
            };
            console.log(data)
    
            const JSONdata = JSON.stringify(data);
    
            // Send the form data to our API and get a response.
            const response = await fetch(`/api/clients/` + client._id, {
                // Body of the request is the JSON data we created above.
                body: JSONdata,
        
                // Tell the server we're sending JSON.
                headers: {
                'Content-Type': 'application/json',
                },
                // The method is PUT because we are sending data to be updated.
                method: 'PUT',
            })
    
            // Get the response data from server as JSON.
            // If server returns the name submitted, that means the form works.
            const result = await response.json();
            console.log(result);
    
            if (result.success) {
                alert(`${result.data.first_name} ${result.data.last_name} has been updated!`)
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    const handleDelete = async (e) => {
        // Stop the form from submitting and refreshing the page.
        e.preventDefault();

        try {
            // Get data from the form.
   
            // Send the form data to our API and get a response.
            const response = await fetch(`/api/clients/` + client._id, {
                // The method is DELETE because want to remove the user.
                method: 'DELETE',
            })
    
            // Get the response data from server as JSON.
            // If server returns the name submitted, that means the form works.
            const result = await response.json();
            console.log(result);
    
            if (result.success) {
                router.push('/trainer/clients')
                alert(`${result.data.first_name} ${result.data.last_name} has been deleted!`)
            }
        } catch (error) {
            console.log(error);
        }
        
    }
    
    return (
        <div>
            
            <form id="update_form" onSubmit={handleUpdate}>
                
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="first_name" id="first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={client.first_name} required="">
                        </input>
                        <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="last_name" id="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={client.last_name} required="">
                        </input>
                        <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={client.email} required="">
                        </input>
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={client.phone} required="">
                        </input>
                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                    </div>
                </div>

                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name="height" id="height" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={client.height} required="">
                        </input>
                        <label htmlFor="height" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Height (cm)</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name="weight" id="weight" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={client.weight} required="">
                        </input>
                        <label htmlFor="weight" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Weight (kg)</label>
                    </div>
                </div>

                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="date" name="birthday" id="birthday" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={new Date(client.birthday).toISOString().split('T')[0]} required="">
                        </input>
                        <label htmlFor="birthday" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Birthday</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="gender" id="gender" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={client.gender} required="">
                        </input>
                        <label htmlFor="gender" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
                    </div>
                </div>

            </form>
            <form id="delete_form" onSubmit={handleDelete} hidden></form>

            <div className="flex">
                <button type="submit" form="update_form" className="btn mr-2 bg-blue-700 hover:bg-white hover:text-black rounded-lg block text-white font-medium text-sm px-5 py-2.5 text-center">Submit Changes</button>
                <button type="submit" form="delete_form" className="btn mr-2 bg-red-700 hover:bg-white hover:text-black rounded-lg block text-white font-medium text-sm px-5 py-2.5 text-center">Delete Client</button>
            </div>

        </div>
    );
}

export default ClientDetails;