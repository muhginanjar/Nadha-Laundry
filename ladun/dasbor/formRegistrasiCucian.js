const kartuLaundry = 'kartuLaundry';

$(document).ready(function() {
  $(".js-example-basic-single").select2();
});
 
var divFormRegistrasiCucian = new Vue({
  el: "#divFormRegistrasiCucian",
  data: {},
  methods: {
    simpanRegistrasi: function() {
      let pelanggan = document.getElementById("txtPelanggan").value;
      let kodeRegistrasi = document.getElementById("txtKode").innerHTML;

      if (pelanggan === "none") {
        pilihPelanggan();
      } else {
        $.post(
          "kartuLaundry/prosesRegistrasiCucian",
          { pelanggan: pelanggan, kodeRegistrasi: kodeRegistrasi },
          function(data) {
            let obj = JSON.parse(data);
            renderMenu(kartuLaundry);
            divJudul.judulForm = "Kartu Laundry";
          }
        );
      }
    }
  }
});

function pilihPelanggan() {
  iziToast.warning({
    title: "Pilih pelanggan!!",
    message: "Harap pilih pelanggan!!",
    position: "topCenter",
    timeout: 1000,
    pauseOnHover: false,
    onClosed: function() {
      // $('#btnSimpan').removeClass('disabled');
    }
  });
}
