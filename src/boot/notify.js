// Notify.js
export default {
  install(app) {
    // Fungsi notif untuk menampilkan notifikasi menggunakan @kyvg/vue3-notification
    const notif = (title, text, type) => {
      app.config.globalProperties.$notify({
        title: title,
        text: text,
        type: type,
        position: "bottom right", // Menentukan posisi notifikasi
        duration: 2000, // Durasi tampilan notifikasi dalam milidetik (ms)
      });
    };

    // Fungsi notifikasi sukses
    const suksesNotif = (text) => {
      return notif("Sukses", text, "success");
    };

    // Fungsi notifikasi error
    const errNotif = (text) => {
      return notif("Error", text, "error");
    };

    // Fungsi notifikasi kesalahan umum
    const commonErrorNotif = () => {
      return notif("Error", "Terjadi Kesalahan Pada Server", "error");
    };

    // Fungsi notifikasi token kadaluarsa
    const tokenExpired = () => {
      return notif(
        "Token expired",
        "Sesi Anda telah berakhir. Silakan masuk kembali untuk melanjutkan.",
        "success"
      );
    };

    app.config.globalProperties.$suksesNotif = suksesNotif;
    app.config.globalProperties.$errNotif = errNotif;
    app.config.globalProperties.$commonErrorNotif = commonErrorNotif;
    app.config.globalProperties.$tokenExpired = tokenExpired;
  },
};
