import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

export default function BarcodeScanner({ onScan }) {
  const videoRef = useRef(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    let active = true;

    codeReader.decodeFromVideoDevice(
      undefined,
      videoRef.current,
      (res, err) => {
        if (res && active) {
          const text = res.getText();
          setResult(text);
          onScan?.(text);
        }
      }
    );

    return () => {
      active = false;
      codeReader.reset();
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>📦 Barcode Scanner</h2>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          width: "100%",
          maxWidth: 420,
          borderRadius: 12,
          border: "1px solid #333"
        }}
      />

      {result && <p>✔ {result}</p>}
    </div>
  );
}
