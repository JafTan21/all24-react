const { toast } = require('react-toastify');

const config = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}

const success = (msg) => {
    toast.success(msg, config);
}

const error = (msg) => {
    toast.error(msg, config);
}

const warn = (msg) => {
    toast.warn(msg, config);
}

module.exports = {
    success,
    error,
    warn
}

