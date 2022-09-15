import dbConnect from "../../../utils/dbConnect";
import Workout from "../../../models/workout";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
        try {
            const workouts = await Workout.find({});
            // console.log(workouts)
            res.status(200).json({ success: true, data: workouts });
        } catch (error) {
            res.status(400).json({ success: false, error: error });
        }
        break;
    case "POST":
        try {
            const workout = await Workout.create(req.body);
            res.status(201).json({ success: true, data: workout });
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