import dbConnect from "../../../utils/dbConnect";
import Exercise from "../../../models/exercise";

const handler = async (req, res) => {
  const { 
    method,
    query: { id },
         } = req;

  await dbConnect();

  switch (method) {
    case "GET":
        try {
            const exercise = await Exercise.findById(id);
            res.status(200).json({ success: true, data: exercise });
        } catch (error) {
            res.status(400).json({ success: false, error: error });
        }
        break;
    case "PUT":
        try {
            const exercise = await Exercise.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json({ success: true, data: exercise });
        } catch (error) {
            res.status(400).json({ success: false, error: error });
        }
        break;
    case "DELETE":
        try {
            const exercise = await Exercise.findByIdAndDelete(id);
            res.status(200).json({ success: true, data: exercise });
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