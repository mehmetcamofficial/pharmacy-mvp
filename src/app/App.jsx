import BarcodeScanner from "../components/scanner/BarcodeScanner";

export default function App() {
  const handleScan = (code) => {
    console.log("PRODUCT ID:", code);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Pharmacy MVP</h1>

      <BarcodeScanner onScan={handleScan} />
    </div>
  );
}
