import * as footer from '../pages/footer';
// import * as testDrive from '../pages/dsoservice/test-drive';

const { When, Then } = require('cucumber');

Then(/^a guest can see Footer at Home page$/, async () => {
  await footer.verifyFooter();
});

Then(/^a guest can see content menu Astra Daihatsu on Footer$/, async () => {
  await footer.verifyContentMenuAstraDaihatsu();
});

Then(/^a guest can see content menu Otomotif on Footer$/, async () => {
  await footer.verifyContentMenuOtomotif();
});

Then(/^a guest can see content menu Purna Jual on Footer$/, async () => {
  await footer.verifyContentMenuPurnaJual();
});

Then(/^a guest can see content menu Ikuti Kami on Twitter$/, async () => {
  await footer.verifyContentIkutiKamiTwitter();
});

Then(/^a guest can see content menu Ikuti Kami on Facebook$/, async () => {
  await footer.verifyContentIkutiKamiFacebook();
});


Then(/^a guest can access all page in menu Astra Daihatsu$/, async () => {
  await footer.verifyPageTentangAstraDaihatsu();
  await footer.verifyPagePanduanPembelian();
  await footer.verifyPageKebijakanPrivasi();
  await footer.verifyPageSyaratdanKetentuanPenggunaan();
});

Then(/^a guest can access all page in menu Otomotif$/, async () => {
  await footer.verifyPagePromo();
  await footer.verifyPageMobilBaru();
  await footer.verifyPageBerita();
  await footer.verifyPageDaftarHarga();
});

When(/^a guest try to access Cara Kerja Page through Menu Astra Daihatsu on footer$/, async () => {
  await footer.verifyPageCaraKerja();
});

When(/^a guest try to access Tentang Astra Daihatsu Page through Menu Astra Daihatsu on footer$/, async () => {
  await footer.verifyPageTentangAstraDaihatsu();
});

When(/^a guest try to access Panduan Pembelian Page through Menu Astra Daihatsu on footer$/, async () => {
  await footer.verifyPagePanduanPembelian();
});

When(/^a guest try to access Kebijakan Privasi Page through Menu Astra Daihatsu on footer$/, async () => {
  await footer.verifyPageKebijakanPrivasi();
});

When(/^a guest try to access Syarat & Ketentuan Penggunaan Page through Menu Astra Daihatsu on footer$/, async () => {
  await footer.verifyPageSyaratdanKetentuanPenggunaan();
});

When(/^a guest try to access Promo Page through Menu Otomotif on footer$/, async () => {
  await footer.verifyPagePromo();
});

When(/^a guest try to access Mobil Baru Page through Menu Otomotif on footer$/, async () => {
  await footer.verifyPageMobilBaru();
});

When(/^a guest try to access Berita Page through Menu Otomotif on footer$/, async () => {
  await footer.verifyPageBerita();
});

When(/^a guest try to access Daftar Harga through Menu Otomotif on footer$/, async () => {
  await footer.verifyPageDaftarHarga();
});

When(/^a guest try to access Perawatan Berkala Page through Menu Purna Jual on footer$/, async () => {
  await footer.verifyPagePerawatanBerkala();
});

When(/^a guest try to access Bodi Dan Cat Page through Menu Purna Jual on footer$/, async () => {
  await footer.verifyPageBodiDanCat();
});

When(/^a guest try to access ERA 24 Jam Page through Menu Purna Jual on footer$/, async () => {
  await footer.verifyPageERA24Jam();
});

When(/^a guest try to access Suku Cadang Page through Menu Purna Jual on footer$/, async () => {
  await footer.verifyPageSukuCadang();
});

When(/^a guest try to access Mobil Service Page through Menu Purna Jual on footer$/, async () => {
  await footer.verifyPageMobileService();
});

When(/^a guest try to access Service Super Cepat Page through Menu Purna Jual on footer$/, async () => {
  await footer.verifyPageServiceSuperCepat();
});

When(/^a guest try to access Part 24 Jam Page through Menu Purna Jual on footer$/, async () => {
  await footer.verifyPagePart24Jam();
});

When(/^a guest try to access Happy Kontrak Service Page through Menu Purna Jual on footer$/, async () => {
  await footer.verifyPageHappyKontrakService();
});

// footer 9

When(/^a guest try to access Test Drive Page through Menu Quick Links on footer$/, async () => {
  await footer.verifyPageTestDrive();
});

When(/^a guest try to access Booking Service Page through Menu Quick Links on footer$/, async () => {
  await footer.verifyPageBookingService();
});

When(/^a guest try to access Kalkulator Kredit Page through Menu Quick Links on footer$/, async () => {
  await footer.verifyPageKalkulator();
});

When(/^a guest try to access Lokasi Outlet Page through Menu Quick Links on footer$/, async () => {
  await footer.verifyPageLokasi();
});
