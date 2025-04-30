document.addEventListener("DOMContentLoaded", function() {
    // Función para descargar el CV como PDF
    const downloadBtn = document.getElementById("downloadBtn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            doc.setFontSize(14);
        doc.text("Experiencia Laboral", 10, 20);

        doc.setFontSize(12);

        // Club Deportivo CRP
        doc.text("Auxiliar & Instructor de Natación", 10, 30);
        doc.text("Club Deportivo CRP", 10, 36);
        doc.text("Inicio: Octubre 2021", 10, 42);
        doc.text("Terminación: Agosto 2023", 10, 48);
        doc.text("Responsabilidades:", 10, 56);
        doc.text("• Enseñar técnicas de natación, estilos y reglas de seguridad en el agua.", 12, 64);
        doc.text("• Identificar técnicas incorrectas y corregir a los estudiantes.", 12, 72);
        doc.text("• Planificar clases considerando habilidades y progresión.", 12, 80);
        doc.text("• Evaluar el progreso y ajustar programas de enseñanza.", 12, 88);
        doc.text("• Ayudar a nadadores experimentados a mejorar sus habilidades.", 12, 96);

        // Salto a nueva sección
        doc.text(" ", 10, 104);

        // Iconltrans
        doc.text("Auxiliar de Bodega", 10, 112);
        doc.text("Iconltrans", 10, 118);
        doc.text("Inicio: Agosto 2023", 10, 124);
        doc.text("Terminación: Noviembre 2023", 10, 130);
        doc.text("Responsabilidades:", 10, 138);
        doc.text("• Recibir, clasificar y separar la mercancía.", 12, 146);
        doc.text("• Atender la separación, organización y empaque de órdenes.", 12, 154);
        doc.text("• Organizar, empacar y rotular cajas para envío.", 12, 162);
        doc.text("• Cumplir con buenas prácticas de manufactura.", 12, 170);
        doc.text("• Garantizar la integridad de los productos almacenados.", 12, 178);

            // Descargar el archivo PDF
            doc.save("Mi_CV.pdf");
        });
    }

    // Función para enviar el mensaje del formulario "Hablemos"
    const enviarBtn = document.getElementById("enviarMensaje");
    if (enviarBtn) {
        enviarBtn.addEventListener("click", function () {
            const mensaje = document.getElementById("mensaje").value.trim();

            if (mensaje === "") {
                alert("Por favor escribe un mensaje antes de enviar.");
                return;
            }

            const email = "Fabianandres-100@hotmail.com"; // <-- PON aquí tu correo real

            const subject = encodeURIComponent("Nuevo mensaje desde tu CV");
            const body = encodeURIComponent(mensaje);

            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        });
    }
});
