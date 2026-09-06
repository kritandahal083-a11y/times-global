"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#060709",
          color: "#f4f6f8",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: 480, textAlign: "center" }}>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "0.875rem",
              letterSpacing: "0.15em",
              color: "#e5484d",
              marginBottom: "1rem",
            }}
          >
            SYSTEM ERROR
          </p>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 600,
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#9aa4b0",
              marginTop: "1.25rem",
              lineHeight: 1.6,
            }}
          >
            The page failed to load. Our team has been notified.
          </p>
          <button
            onClick={() => reset()}
            style={{
              marginTop: "2rem",
              padding: "0.75rem 1.5rem",
              background: "linear-gradient(180deg, #f05a5f, #e5484d)",
              color: "#fff",
              border: "none",
              borderRadius: "0.5rem",
              fontWeight: 600,
              fontSize: "0.925rem",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
