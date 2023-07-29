const { Product, Category, Brand, Color, ProductInfo, ProductColor } = require('../models/models')
const ApiError = require('../error/ApiError')
const sequelize = require('sequelize')
const { Op } = require('sequelize')
const uuid = require('uuid')
const path = require('path')

class ProductController {

  async create(req, res, next) {
    try {
      let { name, volume, weight, country, price, rate, quantity, code, categoryId, brandId, title, description, colorIds } = req.body;
      const img = req.files.img;

      let imgName = uuid.v4() + '.' + img.mimetype.split('/')[1];
      img.mv(path.resolve(__dirname, '..', 'static', imgName));

      const product = await Product.create({
        name,
        volume,
        weight,
        country,
        price,
        rate,
        quantity,
        code,
        img: imgName,
        categoryId,
        brandId
      });

      const productInfo = await ProductInfo.create({
        title,
        description,
      });

      await product.setInfo(productInfo);

      let productColorIds = colorIds.split(",").map(Number);
      //Harkavor e MAP anel HAYK

      if (productColorIds && productColorIds.length > 0) {
        const colors = await Color.findAll({ where: { id: productColorIds } });
        // Use the map method to create an array of objects, where each object represents a new record in the product_colors table
        const newProductColors = colors.map((color) => {
          return {
            productId: product.id, // Replace <PRODUCT_ID> with the ID of the product you want to add the color to
            colorId: color.id
          };
        });

        // Use the ProductColor model to bulk create new records in the product_colors table
        await ProductColor.bulkCreate(newProductColors);

        console.log(`All colors have been added to the product.`);
      }
      console.log(`PRODUCT ALELUYA`);
      return res.json({ product });

    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    let { categoryId, brandId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 1000;
    let offset = limit * page - limit;
    let products;
    const includeArray = [
      {
        model: Category,
        attributes: ['name'],
        where: categoryId ? { id: categoryId } : {},
      },
      {
        model: Brand,
        attributes: ['name'],
        where: brandId ? { id: brandId } : {},
      },
      {
        model: ProductInfo,
        as: 'info',
      },
      {
        model: Color,
        attributes: ['name'],
        through: { attributes: [] },
      },
    ];

    products = await Product.findAndCountAll({
      include: includeArray,
      limit,
      offset,
    });



    return res.json(products);
  }

  async getOne(req, res, next) {
    const { id } = req.params;
    try {
      const product = await Product.findOne({
        where: { id },
        include: [
          { model: ProductInfo, as: 'info' },
          { model: Color, through: ProductColor, as: 'colors' } // Use 'colors' as the alias
        ],
      });
      if (!product) {
        throw new Error(`Product with id ${id} not found`);
      }
      return res.json(product);
    } catch (error) {
      console.log(error)
      // next(ApiError.notFound(error.message));
    }
  }

  async update(req, res) {

    const { id } = req.params
    try {
      const { name, volume, weight, country, price, rate, quantity, code, categoryId, brandId } = req.body
      const product = await Product.update(
        { name, volume, weight, country, price, rate, quantity, code, categoryId, brandId },
        { where: { id } }
      )
      return res.json({ product })
    } catch (error) {
      next(ApiError.badRequest(error.message))
    }
  }

  async delete(req, res) {
    const { id } = req.params
    const product = await Product.destroy({ where: { id } })
    return res.json(`Product with id ${id} has been deleted`)
  }
}

module.exports = new ProductController()