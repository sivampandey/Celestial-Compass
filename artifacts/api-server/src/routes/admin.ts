import { Router } from "express";
import { db, consultations } from "@workspace/db";
import { eq, desc } from "drizzle-orm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  JWT_SECRET,
} from "../config/auth";
import { verifyAdmin } from "../middleware/auth";

const router = Router();

router.post("/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email !== ADMIN_EMAIL) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const passwordMatch = await bcrypt.compare(
  password,
  ADMIN_PASSWORD,
);

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        email: ADMIN_EMAIL,
      },
      JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    return res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
});

router.use("/admin", verifyAdmin);

/**
 * GET /api/admin/consultations
 */
router.get("/admin/consultations", async (_req, res) => {
  try {
    const data = await db
      .select()
      .from(consultations)
      .orderBy(desc(consultations.createdAt));

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch consultations",
    });
  }
});

router.patch("/admin/consultations/:id/status", async (req, res) => {
  try {
    const { status } = req.body;

    await db
      .update(consultations)
      .set({ status })
      .where(eq(consultations.id, Number(req.params.id)));

    return res.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to update status",
    });
  }
});

/**
 * DELETE /api/admin/consultations/:id
 */
router.delete("/admin/consultations/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    await db
      .delete(consultations)
      .where(eq(consultations.id, id));

    return res.json({
      success: true,
      message: "Consultation deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete consultation",
    });
  }
});

export default router;