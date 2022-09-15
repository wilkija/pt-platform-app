import dbConnect from "../../../utils/dbConnect";
import Workout from "../../../models/workout";

const handler = async (req, res) => {
  const { 
    method,
    query: { id },
         } = req;

  await dbConnect();

  switch (method) {
    case "GET":
        try {
            const workout = await Workout.findById(id);
            // console.log(workout)
            res.status(200).json({ success: true, data: workout });
        } catch (error) {
            res.status(400).json({ success: false, error: error });
        }
        break;
    case "PUT":
        try {
            const workout = await Workout.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json({ success: true, data: workout });
        } catch (error) {
            res.status(400).json({ success: false, error: error });
        }
        break;
    case "DELETE":
        try {
            const workout = await Workout.findByIdAndDelete(id);
            res.status(200).json({ success: true, data: workout });
        } catch (error) {
            res.status(400).json({ success: false, error: error });
        }
        break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default handler;