/* eslint-disable import/prefer-default-export */
import * as base from '../../common/base-functions';

const elements = {
  breadcrumb: '.container-breadcrumbs',
  breadcrumbHome: '.container-breadcrumbs li:nth-child(1)',
  myAccountDropdown: '.my-account-dropdown',
  titlePage: '.__page-sub-header-copy .__page-sub-header-headline',
  subHeaderPage: '.__page-sub-header-copy .__page-sub-header-headline-description',
  labelModel: "#testDriveForm .form-group label[for='testDrive.productModel']",
  dropdownModel: '#select2-testDriveproductModel-container',
  infoPersonalTitle: '.__form-title:nth-child(4)',
  subHeaderInfoPersonal: '.info-personal .info',
  labelNamaLengkap: "#addnew-address label[for='autoServiceForm.firstName']",
  txtNamaLengkap: "#addnew-address input[name='firstName']",
  labelEmail: "#addnew-address label[for='service-email']",
  txtEmail: '#addnew-address #service-email',
  labelNoHp: "#addnew-address label[for='service-mobileNumber']",
  txtNoHp: '#service-mobileNumber',
  disclaimerNoHp: '.mobile_number .Please-note:nth-child(2)',
  infoDealerTitle: '.__form-title:nth-child(8)',
  labelOutlet: '#test-drivebranch .control-label ',
  dropdownOutlet: '#test-drivebranch #select2-branch-container',
  labelAlamatLengkap: "#test-driveaddress label[for='address-line1']",
  txtAlamatLengkap: '#test-driveaddress #address-line1',
  labelTanggal: '#test-drive-date .control-label ',
  txtTanggal: "#test-drive-date input[name='callDate']",
  labelJam: '.timeWrapper .control-label ',
  dropdownJam: '.timeWrapper .select2-selection--single',
  labelCatatan: '.__form-title:nth-child(11)',
  txtCatatan: '#notes',
  btnKirim: '#submittestdrive',
  footerUnduhDaihatsu: '.unduh-daihatsu',
};

export const verifyTestdrivePage = async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/dsoservice/test-drive');
  await base.waitElementVisible(elements.breadcrumb);
  await base.getStringText(elements.myAccountDropdown, 'Test Drive');
  await base.getStringText(elements.titlePage, 'Test Drive');
  await base.getStringText(elements.subHeaderPage, 'Daihatsu kini hadir sebagai Sahabat dan memberikan pelayanan terbaiknya. Silahkan mengisi form di bawah ini untuk melakukan Test Drive. Pihak kami akan menghubungi anda secepatnya.');
  await base.getStringText(elements.labelModel, 'Model');
  await base.waitElementVisible(elements.dropdownModel);
  await base.getStringText(elements.infoPersonalTitle, 'Informasi Personal');
  await base.scrollToElement(elements.infoDealerTitle);
  await base.getStringText(elements.subHeaderInfoPersonal, 'Harap isi email dan nomor handphone terlebih dahulu');
  await base.getStringText(elements.labelNamaLengkap, 'Nama Lengkap');
  await base.waitElementVisible(elements.txtNamaLengkap);
  await base.getStringText(elements.labelEmail);
  await base.waitElementVisible(elements.txtEmail);
  await base.getStringText(elements.labelNoHp, 'Nomor Handphone');
  await base.waitElementVisible(elements.txtNoHp);
  await base.getStringText(elements.disclaimerNoHp);
  await base.scrollToElement(elements.dropdownJam);
  await base.getStringText(elements.infoDealerTitle, 'Informasi Dealer');
  await base.getStringText(elements.labelOutlet, 'Outlet');
  await base.waitElementVisible(elements.dropdownOutlet);
  await base.getStringText(elements.labelAlamatLengkap, 'Alamat Lengkap');
  await base.waitElementVisible(elements.txtAlamatLengkap);
  await base.getStringText(elements.labelTanggal, 'Tanggal');
  await base.waitElementVisible(elements.txtTanggal);
  await base.getStringText(elements.labelJam, 'Jam');
  await base.scrollToElement(elements.footerUnduhDaihatsu);
  await base.waitElementVisible(elements.dropdownJam);
  await base.getStringText(elements.labelCatatan, 'Catatan');
  await base.waitElementVisible(elements.txtCatatan);
  await base.waitElementVisible(elements.btnKirim);
};
