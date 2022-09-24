import dbConnect from "../../../utils/dbConnect";
import CalendarEntry from "../../../models/calendarEntry";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
        try {
            const entries = await CalendarEntry.find({});
            // console.log(entries)
            res.status(200).json({ success: true, data: entries });
        } catch (error) {
            res.status(400).json({ success: false, error: error });
        }
        break;
    case "POST":
        try {
            const entry = await CalendarEntry.create(req.body);
            res.status(201).json({ success: true, data: entry });
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