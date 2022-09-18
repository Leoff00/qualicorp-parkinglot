import { resolver } from "@middlewares/ErrorHandler";
import { Router } from "express";
import { FindAllCarsParkingController } from "@controllers/FindAllCarsParkingController";
import { SaveCarParkingController } from "@controllers/SaveCarParkingController";
import { UpdateCarsParkingController } from "@controllers/UpdateCarsParkingController";
import { DeleteCarsParkingController } from "@controllers/DeleteCarsParkingController";

const router = Router();

router.get("/find", resolver(new FindAllCarsParkingController().handle));
router.post("/save", resolver(new SaveCarParkingController().handle));
router.put("/update/:user_id", resolver(new UpdateCarsParkingController().handle));
router.delete("/delete/:user_id", resolver(new DeleteCarsParkingController().handle));

export { router };
