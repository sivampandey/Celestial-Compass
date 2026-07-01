import { Router } from "express";
import { db, consultations } from "@workspace/db";
import { desc } from "drizzle-orm";

const router = Router();

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

export default router;