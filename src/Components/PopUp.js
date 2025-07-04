import { toast } from "react-toastify";
import Link from "next/link";

export const showToast = (message, type = "success", myLink, path = "") => {
  const toastId = `${type}-${message}`;

  if (toast.isActive(toastId)) return;

  toast(
    <div>
      {message}{" "}
      {myLink && path && (
        <Link href={path} passHref>
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              textDecoration: "underline",
              cursor: "pointer",
              padding: 0,
              fontWeight: "bold",
            }}
            aria-label={`Go to ${myLink}`}
          >
            {myLink}
          </button>
        </Link>
      )}
    </div>,
    {
      toastId,
      type,
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    }
  );
};
