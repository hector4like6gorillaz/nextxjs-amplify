import { toast } from "react-toastify";

export const notifyToast = (
  prase: string,
  type: "error" | "warning" | "success"
) => toast[type](prase);
