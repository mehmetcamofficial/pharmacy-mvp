import { useEffect, useRef, useState } from "react";

export default function CameraView() {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" }
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        setError("Camera access denied or not supported");
        console.error(err);
      }
    };

    startCamera();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Camera Scanner</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          width: "100%",
          maxWidth: 400,
          borderRadius: 12,
          border: "1px solid #333"
        }}
      />
    </div>
  );
}
