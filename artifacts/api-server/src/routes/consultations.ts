import { Router } from "express";
import { z } from "zod";
import { db } from "@workspace/db";
import { consultations } from "@workspace/db";

const router = Router();

const consultationSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number"),
  email: z.string().trim().email().optional().or(z.literal("")),
  category: z.string().trim().min(2).max(100),
  message: z.string().trim().min(0).max(5000),
});

router.post("/consultations", async (req, res) => {
  try {
    const data = consultationSchema.parse(req.body);

    await db.insert(consultations).values({
      name: data.name,
      phone: data.phone,
      email: data.email,
      category: data.category,
      message: data.message,
    });

    return res.status(201).json({
      success: true,
      message: "Consultation submitted successfully",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.flatten().fieldErrors,
      });
    }

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;