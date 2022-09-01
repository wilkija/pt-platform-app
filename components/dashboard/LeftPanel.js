import StatsCard from "./StatsCard";
import Image from "next/image";

const LeftPanel = () => {
    const today = new Date();
    const dayOfWeek = today.toLocaleString(
        'default', {weekday: 'long'}
    );
    const month = today.toLocaleString(
        'default', {month: 'long'}
    )
    const day = today.getDate();
    
    return ( 
        <>
            <h3 className="text-lg">{dayOfWeek}</h3>
            <h2 className="font-bold text-2xl">{`${month} ${day}`}</h2>
            <StatsCard />
        </>
     );
}
 
export default LeftPanel;