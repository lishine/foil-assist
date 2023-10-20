import Link from "next/link";

export default function Custom404() {
  return (
    <div
      style={{
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "1.5rem",
      }}
    >
      <h1>
        <Link href="/" style={{ fontStyle: "italic" }}>
          Back to Home Page
        </Link>
      </h1>
      <h2>Page Not Found</h2>
    </div>
  );
}
