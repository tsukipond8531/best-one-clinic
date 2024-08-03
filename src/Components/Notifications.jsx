import Swal from "sweetalert2";
import '../App.css'
export const successNotification = (msg) => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: msg,
        showConfirmButton: true,
        timer: 3000,
        customClass : {
            title : "successClass",
        }
        
    });
}
export const ErrorNotification = (msg) => {
    Swal.fire({
        position: "center",
        icon: "error",
        title: msg,
        showConfirmButton: true,
        timer: 3000,
        ustomClass : {
            title : "successClass",
        }
    });
}