import Swal from "sweetalert2";

export const successNotification = (msg) => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: msg,
        showConfirmButton: true,
        timer: 3000
        
    });
}
export const ErrorNotification = (msg) => {
    Swal.fire({
        position: "center",
        icon: "error",
        title: msg,
        showConfirmButton: true,
        timer: 3000
    });
}