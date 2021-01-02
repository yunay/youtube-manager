import { toast, ToastOptions } from "react-toastify";

export const Helpers = {

    text: {
        truncateString: (str: string, length: number) => {

            return str && str.length > length ? str.slice(0, length) + "..." : str
        },
    
        addLeadingZero: (str: string, length: number) => {
    
            return str && str.length < length ? `0${str}` : str;
        }
    },
    notify: (text:string, type:"success" | "error" | "warning")=>{
        let props:ToastOptions = { position: "top-right", autoClose: 5000, closeOnClick: true, draggable: true };

        switch(type){
            case "success": toast.success(text, props); break;
            case "warning": toast.warning(text, props); break;
            case "error": toast.error(text, props); break;
        }
    }
}