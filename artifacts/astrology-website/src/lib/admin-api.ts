const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

function getAuthHeaders() {
  const token = localStorage.getItem("adminToken");

  return {
    Authorization: `Bearer ${token}`,
  };
}

function handleUnauthorized(response: Response) {
  if (response.status === 401) {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
    throw new Error("Session expired");
  }
}

export async function getConsultations() {
  const response = await fetch(`${API_URL}/api/admin/consultations`, {
    headers: getAuthHeaders(),
  });

  handleUnauthorized(response);

  if (!response.ok) {
    throw new Error("Failed to fetch consultations");
  }

  return response.json();
}

export async function deleteConsultation(id: number) {
  const response = await fetch(`${API_URL}/api/admin/consultations/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  handleUnauthorized(response);

  if (!response.ok) {
    throw new Error("Failed to fetch consultations");
  }

  return response.json();
}

export async function updateConsultationStatus(id: number, status: string) {
  const response = await fetch(
    `${API_URL}/api/admin/consultations/${id}/status`,
    {
      method: "PATCH",
      headers: {
        ...getAuthHeaders(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    },
  );

  handleUnauthorized(response);

  if (!response.ok) {
    throw new Error("Failed to fetch consultations");
  }

  return response.json();
}
