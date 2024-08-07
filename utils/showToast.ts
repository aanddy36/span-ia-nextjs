import { toast, ToastContent, ToastOptions, Slide, Id } from "react-toastify";

export const defaultToastOptions: ToastOptions = {
  position: "top-center",
  autoClose: 4000,
  /* hideProgressBar: true, */
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
  transition: Slide,
};

type ToastType = "success" | "error";

/**
 * Display toast
 *
 * @param {ToastType} type
 * @param {ToastContent} content
 * @param {ToastOptions} [options=defaultToastOption]
 * @return {Id}
 */
export const showToast = (
  type: ToastType,
  content: ToastContent,
  options: Partial<ToastOptions> = {}
): Id => {
  const optionsToApply = { ...defaultToastOptions, ...options };

  switch (type) {
    case "success":
      return toast.success(content, optionsToApply);
    default:
      return toast.error(content, optionsToApply);
  }
};
