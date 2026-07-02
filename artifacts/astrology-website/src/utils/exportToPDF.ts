import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function exportToPDF(data: any[], fileName: string) {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("Celestial Compass", 14, 20);

  doc.setFontSize(12);
  doc.text("Consultation Report", 14, 30);
  const exportDate = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  doc.setFontSize(10);
  doc.text(`Exported: ${exportDate}`, 14, 38);
  autoTable(doc, {
    startY: 45,
    head: [["ID", "Name", "Phone", "Category", "Status", "Date"]],
    body: data.map((item) => [
      item.id,
      item.name,
      item.phone,
      item.category.charAt(0).toUpperCase() + item.category.slice(1),
      item.status,
      new Date(item.createdAt).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    ]),
  });
  doc.save(`${fileName}.pdf`);
}
