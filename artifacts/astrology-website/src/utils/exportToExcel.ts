import * as XLSX from "xlsx";

export function exportToExcel(data: any[], fileName: string) {
  const formattedData = data.map((item) => ({
    ID: item.id,
    Name: item.name,
    "Phone Number": item.phone,
    Email: item.email || "N/A",
    Category: item.category,
    Message: item.message,
    Status: item.status,
    "Consultation Date": new Date(item.createdAt).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }),
  }));

  const worksheet = XLSX.utils.json_to_sheet(formattedData);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Consultations",
  );

  XLSX.writeFile(workbook, `${fileName}.xlsx`);
}