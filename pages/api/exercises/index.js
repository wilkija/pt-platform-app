import dbConnect from "../../../utils/dbConnect";
import Exercise from "../../../models/exercise";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
        try {
            const exercises = await Exercise.find({});
            res.status(200).json({ success: true, data: exercises });
        } catch (error) {
            res.status(400).json({ success: false, error: error });
        }
        break;
    case "POST":
        try {
            const exercise = await Exercise.create(req.body);
            res.status(201).json({ success: true, data: exercise });
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