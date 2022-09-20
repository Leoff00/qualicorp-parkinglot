import { handler } from "@middlewares/ErrorHandler";
import { Router } from "express";
import { FindAllCarsParkingController } from "@controllers/FindAllCarsParkingController";
import { SaveCarParkingController } from "@controllers/SaveCarParkingController";
import { UpdateCarsParkingController } from "@controllers/UpdateCarsParkingController";
import { DeleteCarsParkingController } from "@controllers/DeleteCarsParkingController";

const router = Router();

router.get("/find", handler(new FindAllCarsParkingController().handle));
router.post("/save", handler(new SaveCarParkingController().handle));
router.put("/update/:user_id", handler(new UpdateCarsParkingController().handle));
router.delete("/delete/:user_id", handler(new DeleteCarsParkingController().handle));

export { router };
