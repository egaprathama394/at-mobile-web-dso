import * as base from '../common/base-functions';

const elements = {
  dropdownTD: '#selected-nav-item',
  titleTD: '.heading.mob-heading.d-lg-none',
  textdescTD: '.text-description',
  formTD: '.__form-title',
  textmodelTD: '#addnew-address > div:nth-child(2) > div:nth-child(1) > div > label',
  modelTD: '#addnew-address > div:nth-child(2) > div:nth-child(1) > div > div',
  texttransTD: '#addnew-address > div:nth-child(2) > div:nth-child(2) > div > label.control-label',
  transTD: '#addnew-address > div:nth-child(2) > div:nth-child(2) > div > div > div > div > span > span.selection > span',
  textcityTD: '#addnew-address > div:nth-child(3) > div:nth-child(1) > div > label',
  cityTD: '#addnew-address > div:nth-child(3) > div:nth-child(1) > div > div > div > div > span > span.selection > span',
  textlocTD: '#addnew-address > div:nth-child(3) > div:nth-child(2) > div > label',
  locTD: '#addnew-address > div:nth-child(3) > div:nth-child(2) > div > div > div > div > span > span.selection > span',
  textdateTD: '#test-drive-date > div > label',
  dateTD: '#testDrive\\.preferredDate',
  texttimeTD: '.timeWrapper .control-label',
  timeTD: '#addnew-address > div.zigzag_container > div.zigzag_50.zigzag_right > div.timeWrapper span > span.selection > span',
  textinfoTD: '#addnew-address > div.info.Please-note.form-group.notice',
};

export default async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/dsoservice/test-drive');
  await base.assertContainsText(elements.dropdownTD, 'Test Drive');
  await base.assertContainsText(elements.titleTD, 'Test Drive');
  await base.assertContainsText(elements.textdescTD, 'Ingin mencoba Daihatsu idaman sebelum membelinya? Atur jadwal test drive dengan pilihan kendaraan yang Anda inginkan.');
  await base.assertContainsText(elements.formTD, 'Detail Mobil');
  await base.assertContainsText(elements.textmodelTD, 'Model*');
  await base.expectVisible(elements.modelTD);
  await base.assertContainsText(elements.texttransTD, 'Outlet*');
  await base.expectVisible(elements.transTD);
  await base.assertContainsText(elements.textdateTD, 'Tanggal*');
  await base.expectVisible(elements.dateTD);
  await base.assertContainsText(elements.texttimeTD, 'Jam*');
  await base.expectVisible(elements.timeTD);
  await base.assertContainsText(elements.textinfoTD, '');
};
