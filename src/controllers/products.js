const model = require("../models/index");
const response = require("../helper/response")

const getAllProduct = async (req,res)=>{
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
module.exports={getAllProduct,createProduct, getmerk,getGroupModel,getModel}