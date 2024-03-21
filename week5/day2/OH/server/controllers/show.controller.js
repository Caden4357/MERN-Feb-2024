import tvShows from "../data.js";

const showController = {
    getAllShows: (req, res) => {
        res.json(tvShows);
    },
    createShow: (req, res) => {
        res.json({message: "POST request"});
    }
}
export default showController;