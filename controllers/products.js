const mongoose = require("mongoose");
const productModel = require("../models/products.js");

const allProduct = async (req, res) => {
  try {
    let { company, name, sort, select } = req.query;
    const queryObject = {};
    if (company) {
      queryObject.company = company;
    }
    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }
    console.log(queryObject);

    let apiData = productModel.find(queryObject);

    if (sort) {
      let sortFix = sort.split(",").join(" ");
      console.log(sortFix);
      apiData = apiData.sort(sortFix);
    }

    if (select) {
      //   let selectFix = select.replace(",", " ");
      let selectFix = select.split(",").join(" ");
      console.log(selectFix);
      apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 5;

    let skip = (page-1) * limit;

    apiData = apiData.skip(skip).limit(limit)
    
    const P_Details = await apiData;
    res.status(200).json({P_Details, nbHits: P_Details.length});
  } catch (error) {
    console.log(error.message);
  }
};

const allProductTesting = async (req, res) => {
  try {
    const P_Details = await productModel.find(req.query);
    console.log(req.query);
    res.status(200).json(P_Details);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { allProduct, allProductTesting };
