import PlantsDAO from "../dao/plantsDAO.js";

export default class PlantsController {
  static async apiGetPlants(req, res, next) {
    const plantsPerPage = req.query.plantsPerPage
      ? parseInt(req.query.plantsPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.name) {
      filters.name = req.query.name;
    }

    const { plantsList, totalNumPlants } = await PlantsDAO.getPlants({
      filters,
      page,
      plantsPerPage,
    });

    let response = {
      plants: plantsList,
      page: page,
      filters: filters,
      entries_per_page: plantsPerPage,
      total_results: totalNumPlants,
    };
    res.json(response);
  }
}
