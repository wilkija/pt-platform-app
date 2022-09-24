import dbConnect from "../../../utils/dbConnect";
import CalendarEntry from "../../../models/calendarEntry";

const handler = async (req, res) => {
  const { 
    method,
    query: { id },
         } = req;

  await dbConnect();

  switch (method) {
    case "GET":
        try {
            const entry = await CalendarEntry.find({ client: id }).populate('workout').exec();
            res.status(200).json({ success: true, data: entry });
        } catch (error) {
            res.status(400).json({ success: false, error: error });
        }
        break;
    case "DELETE":
        try {
            const entry = await CalendarEntry.findByIdAndDelete(id);
            res.status(200).json({ success: true, data: entry });
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