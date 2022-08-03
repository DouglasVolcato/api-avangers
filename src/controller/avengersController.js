import avangersMock from "../../mocks/avengers.js";

class AvengersController {
  async getAll(req, res) {
    const avengers = avangersMock;

    return res.status(200).json(avengers);
  }

  async getOneById(req, res) {
    const { id } = req.params;

    const avengers = avangersMock;

    const avenger = avengers.find((avenger) => id == avenger.id);

    if (!avenger) {
      return res.status(404).json({ message: "Avenger not found" });
    }

    return res.status(200).json(avenger);
  }
}

export default new AvengersController();
