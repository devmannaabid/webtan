document.getElementById("downloadPdfBtn").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Table Data Report", 14, 20); // Title

    // Generate columns by excluding "Actions"
    const table = document.getElementById("dataTable");
    const columns = Array.from(table.querySelectorAll("th"))
        .map(th => th.innerText)
        .filter(text => text.trim().toLowerCase() !== "actions"); // remove Actions column

    doc.autoTable({
        head: [columns],
        body: Array.from(table.querySelectorAll("tr")).slice(1).map(tr => {
            return Array.from(tr.querySelectorAll("td"))
                .map(td => td.innerText)
                .filter((_, i) => table.querySelectorAll("th")[i].innerText.trim().toLowerCase() !== "actions");
        }),
        startY: 30,
        styles: { fontSize: 10 },
        headStyles: { fillColor: [41, 128, 185], textColor: 255 },
        alternateRowStyles: { fillColor: [245, 245, 245] },
        theme: "grid"
    });

    doc.save("table_report.pdf");
});
