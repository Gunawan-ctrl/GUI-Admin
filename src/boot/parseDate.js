const listMonth = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export default {
  install(app, options) {
    app.config.globalProperties.$parseDate = (date) => {
      let respon;
      if (!date) {
        respon = {
          date: "-",
          dateLocal: "-",
          fullDate: "-",
          maxEnd: "-",
          timeStap: "-",
        };
      } else {
        const newDate = new Date(date);
        const month = "" + (newDate.getMonth() + 1);
        const tgl = "" + newDate.getDate();
        const year = newDate.getFullYear();
        const full = `${tgl} ${listMonth[month - 1]} ${year}`;
        respon = {
          dateLocal: [
            year,
            `${month < 10 ? `0${month}` : month}`,
            `${tgl < 10 ? `0${tgl}` : tgl}`,
          ].join("/"),
          fullDate: full,
          maxEnd: year - month - newDate.getDate(),
          timeStap: `${full} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`,
        };
      }
      return respon;
    };
  },
};
