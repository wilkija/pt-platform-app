// import dbConnect from "../../../utils/dbConnect";
// import Workout from "../../../models/workout";
// const express = require("express");

// const main = async () => {    
//     await dbConnect();
//     const app = express();
//     app.use(express.json());
//     app.use(
//         express.urlencoded({
//         extended: true,
//         })
//     );
  
//     // autocomplete index (ie - more efficient, less effective)
//     app.get("/search", async (req, res) => {
//         try {
//         let results;
//         if (req.query.workout) {
//             results = await Workout.aggregate([
//             {
//                 $search: {
//                 index: "autocomplete",
//                 autocomplete: {
//                     query: req.query.workout,
//                     path: "title",
//                     fuzzy: {
//                     maxEdits: 1,
//                     },
//                     tokenOrder: "sequential",
//                 },
//                 },
//             },
//             {
//                 $project: {
//                     _id: 1,
//                     title: 1,
//                     type: 1,
//                     body: 1,
//                     exercises: 1,
//                     score: { $meta: "searchScore" },
//                 },
//             },
//             {
//                 $limit: 10,
//             },
//             ]);
//             if (results) return res.send(results);
//         }
//         res.send([]);
//         } catch (error) {
//         console.log(error);
//         res.send([]);
//         }
//     });

//     app.listen(3001, () => console.log("listening on 3001"));
// };