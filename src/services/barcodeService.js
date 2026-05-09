import { BrowserMultiFormatReader } from "@zxing/library";

const reader = new BrowserMultiFormatReader();

export const startBarcodeScanner = (videoElement, onResult) => {
  reader.decodeFromVideoDevice(
    undefined,
    videoElement,
    (result, err) => {
      if (result) {
        onResult(result.getText()); // 📦 barcode value
      }
    }
  );
};

export const stopScanner = () => {
  reader.reset();
};
