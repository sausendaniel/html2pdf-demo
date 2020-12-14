function handlePDF() {
    const opt = {
        filename: "etiquetas.pdf",
        margin: 16,
        pagebreak: { mode: ["avoid-all", "css", "legacy"], after: [".PDF:nth-child(even)"] },
        html2canvas: { scale: 3 },
        jsPDF: { orientation: "landscape" }
    };
    const el = document.querySelector("#PDFs");
    html2pdf().set(opt).from(el).save();
}