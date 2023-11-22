import React, { useState } from "react";

const MyComponent = () => {
  const [pdfData, setPdfData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Updated part of your React component
  const handleClick = async () => {
    const request = {
      projectId: "-NiiofuafHTp6i8LCKY1",
      environment: "development",
    };

    try {
      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPdfData(data.pdfBase64);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Error generating PDF");
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Generate PDF</button>
      {pdfData && <iframe src={`data:application/pdf;base64,${pdfData}`} />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default MyComponent;
