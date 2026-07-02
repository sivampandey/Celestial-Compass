const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function getConsultations() {
  const response = await fetch(
    `${API_URL}/api/admin/consultations`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch consultations");
  }

  return response.json();
}

export async function deleteConsultation(id: number) {
  const response = await fetch(
    `${API_URL}/api/admin/consultations/${id}`,
    {
      method: "DELETE",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to delete consultation");
  }

  return response.json();
}

export async function updateConsultationStatus(
  id: number,
  status: string
) {
  const response = await fetch(
    `${API_URL}/api/admin/consultations/${id}/status`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update status");
  }

  return response.json();
}