const log = require("../../global/console");
const productModel = require('../../models/product');




// GetAllProducts \\

exports.GetAllProducts = () => {

    return new Promise((resolve, reject) => {

        log.info("api request : get all products");



        productModel.find({}, (err, products) => {

            if (!products) {
                log.alert("not found products in DB, Error: " + err.message);
                reject({ success: false, message: "not found products in DB, Error: " + err.message });
            }

            else if (err) {
                log.error("error in find products in DB, Error: " + err.message);
                reject({ success: false, message: "error in found products in DB, Error: " + err.message });
            }

            else {
                log.msg("success to find products in DB");
                resolve({
                    success: true,
                    message: "success to find all maderfuckers products in DB",
                    products: products
                });
            }

        }).clone().catch((err) => {
            log.error("Failed to find all products in DB, Error: " + err.message);
            reject({ success: false, message: "Failed to find all products in DB, Error: " + err.message });
        });


    }).catch((err) => {
        log.error("Failed in get all products request, Error: " + err.message);
        return ({ success: false, message: "Failed in get all products request, Error: " + err.message });
    });
};



// GetProductsById \\

exports.GetProductsById = (id) => {

    return new Promise((resolve, reject) => {

        log.normal("api request : get product by id");

        meetingModel.findOne({_id:id}, (err, product) => {

            if (!product) {
                log.alert("not found product in DB, Error: " + err.message);
                reject({ success: false, message: "not found product in DB, Error: " + err.message });
            }

            else if (err) {
                log.error("error in find product in DB, Error: " + err.message);
                reject({ success: false, message: "error in found product in DB, Error: " + err.message });
            }

            else {
                log.msg("success to find product in DB");
                resolve({
                    success: true,
                    message: "success to find product in DB",
                    meetings: meetings
                });
            }

        }).clone().catch((err) => {
            log.error("Failed to find product in DB, Error: " + err.message);
            reject({ success: false, message: "Failed to find product in DB, Error: " + err.message });
        });

    }).catch((err) => {
        log.error("Failed to find product request, Error: " + err.message);
        return ({ success: false, message: "Failed to find product request, Error: " + err.message });
    });
};



// AddProduct \\

exports.AddProduct = (data) => {

    return new Promise((resolve, reject) => {

        log.normal("api request : add product");

        const newProduct = new productModel(data);

        newProduct.save((err, newOne) => {

            if (err) {
                log.error("error in add new product")
                reject({ success: false, message: "error in add new product" });
            }

            else {
                log.specialMsg("success to add new product");
                resolve({
                    success: true,
                    message: "success to add new product",
                    product: newOne
                });
            }

        });

    }).catch((err) => {
        log.error("Failed to delete meeting for admin request, Error: " + err.message);
        return ({ success: false, message: "Failed to delete meeting for admin request, Error: " + err.message });
    });
}



// UpdateProductDetails \\

exports.UpdateProductDetails = (data) => {

    return new Promise((resolve, reject) => {

        log.normal("api request : update product");

        productModel.findOneAndUpdate({ _id: data.product_id }, { name: data.name }, { new: true }, (err, updatedProduct) => {

            if (err) {
                log.error("error in update product in DB")
                reject({ success: false, message: "error update product in DB" });
            }

            else if (!updatedProduct) {
                log.error("not found product in DB to update");
                reject({ success: false, message: "not found product in DB to update" });
            }

            else {
                log.msg("success to update product");
                resolve({
                    success: true,
                    message: "success to update product",
                    product: updatedProduct
                })
            }

        }).clone().catch((err) => {
            log.error("Failed to update product in DB, Error: " + err.message);
            reject({ success: false, message: "Failed to update product in DB, Error: " + err.message });
        });
    }).catch((err) => {
        log.error("Failed to update product request, Error: " + err.message);
        return ({ success: false, message: "Failed to update product request, Error: " + err.message });
    });
}



// deleteProduct \\

exports.deleteProduct = (data) => {

    return new Promise((resolve, reject) => {

        log.normal("api request : delete product");

        productModel.findOneAndDelete({ _id: data.product_id }, (err) => {

            if (err) {
                log.error("error in delete product in DB")
                reject({ success: false, message: "error in delete product in DB" });
            }

            else {
                log.msg("success to delete product");
                resolve({
                    success: true,
                    message: "success to delete product"
                });
            }

        }).clone().catch((err) => {
            log.error("Failed to delete product in DB, Error: " + err.message);
            reject({ success: false, message: "Failed to delete product in DB, Error: " + err.message });
        });


    }).catch((err) => {
        log.error("Failed in delete product in DB request, Error: " + err.message);
        return ({ success: false, message: "Failed in delete product in DB request, Error: " + err.message });
    })
}