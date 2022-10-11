import dbConnect from "../../../utils/dbConnect";
import Client from "../../../models/client";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();
  

  switch (method) {
    case "GET":
        try {
            const clients = await Client.find({});
            res.status(200).json({ success: true, data: clients });
        } catch (error) {
            res.status(400).json({ success: false, error: error });
        }
        break;
    case "POST":
        try {
            const client = await Client.create(req.body);
            res.status(201).json({ success: true, data: client });
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