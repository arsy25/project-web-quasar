import { boot } from "quasar/wrappers";
import { Notify } from "quasar";

const notif = (message, jenis) => {
    return Notify.create({
        message: message,
        color: jenis,
        timeout: 2000,
        actions: [{ icon: "close", color: "white" }],
    });
};

export default boot(async ({ app }) => {
    app.config.globalProperties.$successNotif = (msg) => {
        notif(msg, "positive");
    };
    app.config.globalProperties.$commonErrorNotif = () => {
        notif("TERJADI KESALAHAN CEK KONEKSI INTERNET ANDA", "negative");
    };
    app.config.globalProperties.$errorNotif = (msg) => {
        notif(msg, "negative");
    };
    app.config.globalProperties.$errorServer = (err) => {
        if (err.response) {
            return notif(err.response.data.message, "negative");
        }
        return notif("terjadi kesalahan pada server", "negative");
    };
});
export { notif };