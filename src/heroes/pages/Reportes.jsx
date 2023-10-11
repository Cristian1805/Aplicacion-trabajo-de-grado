import React from 'react'

export const Reportes = () => {
  return (
    <div>Reportes</div>
  )
}


// import React from 'react';
// import { Button } from 'react-bootstrap';
// import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'column', 
//     margin: 10,
//   },
//   section: {
//     margin: 10,
//   },
// });

// const Reportes = ({ data }) => {
//   const exportToPDF = () => {
//     // Crear un nuevo PDF usando react-pdf
//     const MyDocument = (
//       <Document>
//         <Page size="A4" style={styles.page}>
//           <View style={styles.section}>
//             <Text>Fruit Inventory Report</Text>
//           </View>
//           <View style={styles.section}>
//             {data.map((fruit, index) => (
//               <Text key={index}>
//                 {fruit.name}: {fruit.quantity} {fruit.unit}
//               </Text>
//             ))}
//           </View>
//         </Page>
//       </Document>
//     );

//     // Abrir una ventana con el PDF generado
//     const pdfBlob = PDFViewer.renderToBlob(MyDocument);
//     const blobUrl = URL.createObjectURL(pdfBlob);
//     window.open(blobUrl);
//   };

//   return (
//     <div>
//       <h2>Fruit Inventory Report</h2>
//       <Button variant="primary" onClick={exportToPDF}>
//         Exportar a PDF
//       </Button>
//       {data.map((fruit, index) => (
//         <div key={index}>
//           {fruit.name}: {fruit.quantity} {fruit.unit}
//         </div>
//       )}
//     </div>
//   );
// }; 

// export default Reportes;
