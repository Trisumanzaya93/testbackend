const model = require("../models/index");
const response = require("../helper/response");
const { Op } = require("sequelize");
const pagination = require("../helper/pagination");

const getAllProduct = async (req,res)=>{
    const { per_page, page,brand_id,group_model_id,model_id } = req.query;
    const where = {};
    const whereOr = [];
    const limit = parseInt(per_page ?? 10);
    const offset = parseInt((page ?? 1) * limit) - limit;
  
    if (brand_id) {
        whereOr.push(
          {
            brand_id: {
              [Op.like]: `%${brand_id}%`,
            },
          }
        )
      }
      if (group_model_id) {
        whereOr.push(
          {
            group_model_id: {
              [Op.like]: `%${group_model_id}%`,
            },
          }
        )
      }
      if (model_id) {
        whereOr.push(
          {
            model_id: {
              [Op.like]: `%${model_id}%`,
            },
          }
        )
      }
      if (whereOr.length !== 0) where[Op.or] = whereOr;
    try {
        const result = await model.products.findAll({
            where,
              include: [
                {
                  model: model.merk,
                  attributes:["brand"],
                  as: "merk",
                },
                {
                    model: model.models,
                    attributes:["model"],
                    as: "models",
                },
                {
                    model: model.group_models,
                    attributes:["grup_model"],
                    as: "group_models",
                },
              ]
        })
        const totalPage= await model.products.findAndCountAll()
        return pagination(res, req, {
            data: result,
            total: totalPage.count,
            status: 200,
            message: "get product succes",
            limit,
            offset,
            query: req.query,
          });
    } catch (error) {
        return response(res,{
            status:500,
            message:"terjadi error",
            error
        })
    }
}

const getProductById = async (req,res)=>{
    try {
        const result = await model.products.findOne({
            where: {
                id: 1,
              },
              include: [
                {
                  model: model.merk,
                  attributes:["brand"],
                  as: "merk",
                },
                {
                    model: model.models,
                    attributes:["model"],
                    as: "models",
                },
                {
                    model: model.group_models,
                    attributes:["grup_model"],
                    as: "group_models",
                },
              ]
        })
        return response(res,{
            status:200,
            message:"mantaappp",
            data:result
        })
    } catch (error) {
        return response(res,{
            status:500,
            message:"terjadi error",
            error
        })
    }
}

const getmerk =async (req,res)=>{
    try {
        const result = await model.merk.findAll()
        
        return response(res,{
            status:200,
            message:"mantaappp",
            data:result
        })
    } catch (error) {
        return response(res,{
            status:500,
            message:"terjadi error",
            error
        })
    }
}
const getGroupModel =async (req,res)=>{
    try {

        const result = await model.group_models.findAll()
        
        return response(res,{
            status:200,
            message:"mantaappp",
            data:result
        })
    } catch (error) {
        return response(res,{
            status:500,
            message:"terjadi error",
            error
        })
    }
}

const getModel =async (req,res)=>{
    try {

        const result = await model.models.findAll()
        
        return response(res,{
            status:200,
            message:"mantaappp",
            data:result
        })
    } catch (error) {
        return response(res,{
            status:500,
            message:"terjadi error",
            error
        })
    }
}

const createProduct =async (req,res)=>{
    try {
        const image = req.file;
        if (!image) {
          return response(res, { status: 500, message: "image harus ada" });
        }
        const body = req.body;
        const newBody = {
          ...body,
          image: image.path,
        };
    
        const result = await model.products.create(newBody);
        return response(res,{
            status:200,
            message:"mantaappp",
            data:result
        })
    } catch (error) {
        return response(res,{
            status:500,
            message:"terjadi error",
            error
        })
    }
    }
module.exports={getAllProduct,createProduct, getmerk,getGroupModel,getModel,getProductById}