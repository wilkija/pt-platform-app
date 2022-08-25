import dbConnect from "../../../utils/dbConnect";
import Client from "../../../models/client";

const handler = async (req, res) => {
  const { 
    method,
    query: { id },
         } = req;

  await dbConnect();

  switch (method) {
    case "GET":
        try {
            const client = await Client.findById(id);
            res.status(200).json({ success: true, data: client });
        } catch (error) {
            res.status(400).json({ success: false, error: error });
        }
        break;
    case "PUT":
        try {
            const client = await Client.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json({ success: true, data: client });
        } catch (error) {
            res.status(400).json({ success: false, error: error });
        }
        break;
    case "DELETE":
        try {
            const client = await Client.findByIdAndDelete(id);
            res.status(200).json({ success: true, data: client });
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