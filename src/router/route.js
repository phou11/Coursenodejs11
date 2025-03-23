import express from "express";
import AuthController from "../controller/auth.controller.js";
import { auth } from "../middleware/Auth.js";
import BannerController from "../controller/banner.controller.js";
import CategoryController from "../controller/category.controller.js";
import ProductController from "../controller/product.controller.js";
import AddressController from "../controller/address.controller.js";
import orderController from "../controller/order.controller.js";
const router = express.Router();
//---------auth--------
router.get("/user/getAll", auth, AuthController.getAll);
router.get("/user/getOne/:uuid", AuthController.getOne);
router.post("/user/login", AuthController.login);
router.post("/user/register", AuthController.register);
router.put("/user/forget", AuthController.forgotPassword);
router.put("/user/changePassword", auth, AuthController.changePassword);
router.put("/user/refreshToken", AuthController.refreshToken);
//---------banner--------
router.post("/banner/insert", auth, BannerController.insert);
router.get("/banner/getAll", BannerController.getAll);
router.get("/banner/getOne/:bUuid", BannerController.getOne);
router.put("/banner/update/:bUuid", auth, BannerController.updateBanner);
router.delete("/banner/delete/:bUuid", auth, BannerController.deleteBanner);
//---------category--------
router.post("/category/insert", auth, CategoryController.insert);
router.get("/category/getAll", CategoryController.getAll);
router.get("/category/getOne/:cUuid", CategoryController.getOne);
router.put("/category/update/:cUuid", auth, CategoryController.updateCategory);
router.delete("/category/delete/:cUuid", auth, CategoryController.deleteCategory);
//---------product--------
router.post("/product/insert", auth, ProductController.insert);
router.get("/product/getAll", ProductController.getAll);
router.get("/product/getOne/:pUuid", ProductController.getOne);
router.get("/product/getBy/:categoryID", ProductController.getByCategory);
router.put("/product/update/:pUuid", auth, ProductController.updateProduct);
router.delete("/product/delete/:pUuid", auth, ProductController.deleteProduct);
//---------address--------
router.post("/address/insert", auth, AddressController.insert);
router.get("/address/getAll", auth,AddressController.getAll);
router.get("/address/getOne/:aUuid",auth, AddressController.getOne);
router.get("/address/getBy/:user_id",auth, AddressController.getByuser);
router.put("/address/update/:aUuid", auth, AddressController.updateAddress);
router.delete("/address/delete/:aUuid", auth, AddressController.deleteAddress);
//---------order--------
router.post("/order/insert", auth, orderController.insert);
router.get("/order/getAll", auth,orderController.getAll);
router.get("/order/getOne/:oUuid",auth, orderController.getOne);
router.get("/order/getBy/:userID",auth, orderController.getBy);
router.post("/order/getBystatus/:userID",auth, orderController.getByStatus);
router.put("/order/updatestatus/:oUuid", auth, orderController.UpdateOrderStatus);
router.put("/order/update/:oUuid", auth, orderController.UpdateOrder);
router.delete("/order/delete/:oUuid", auth, orderController.deleteOrder);
export default router;