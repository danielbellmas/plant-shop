let plants;

export default class PlantsDAO {
  static async injectDB(conn) {
    if (plants) {
      return;
    }
    try {
      plants = await conn.db(process.env.PLANTS_NS).collection("plant list");
    } catch (error) {
      console.error(
        `Unable to establish a collection handle in PlantsDAO: ${error}`
      );
    }
  }

  static async getPlants({
    filters = null,
    page = 0,
    plantsPerPage = 12,
  } = {}) {
    let query;
    if (filters) {
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } };
      }
      // else if ("price" in filters) {
      //     query = { price: { $eq: filters["price"] } };
      //   }
    }

    let cursor;
    try {
      cursor = await plants.find(query);
    } catch (error) {
      console.error(`Unable to issue find command, ${error}`);
      return { plantsList: [], totalNumPlants: 0 };
    }

    const displayCursor = cursor
      .limit(plantsPerPage)
      .skip(plantsPerPage * page);
    try {
      const plantsList = await displayCursor.toArray();
      const totalNumPlants = await plants.countDocuments(query);
      return { plantsList, totalNumPlants };
    } catch (error) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${error}`
      );
      return { plantsList: [], totalNumPlants: 0 };
    }
  }
}
