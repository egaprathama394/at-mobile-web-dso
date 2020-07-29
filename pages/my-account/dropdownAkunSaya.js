/* eslint-disable import/prefer-default-export */
import * as base from '../../common/base-functions';

const elements = {
  menuDetailSaya: '.mob-account-nav li:nth-child(1) .account_nav_title',
  menuEditInformasiPribadi: ".mob-account-nav a[href='/in/my-account/update-profile']",
  menuAsetSaya: '.mob-account-nav li:nth-child(2) .account_nav_title',
  menuKendaraanSaya: ".mob-account-nav a[href='/in/myAsset/my-vehicles']",
  menuUpdateKendaraanSaya: ".mob-account-nav a[href='/in/myAsset/update-vehicles']",
  menuRiwayatService: ".mob-account-nav a[href='/in/my-account/service-order-history']",
  menuRiwayatPemesanan: ".mob-account-nav a[href='/in/my-account/orders']",
  menuWishlist: ".mob-account-nav a[href='/in/wishlist/getWishlist']",
  menuRiwayatHubKami: ".mob-account-nav a[href='/in/my-account/history-contact-us']",
};

export const verifyDropdownAkunSaya = async () => {
  await base.waitElementVisible(elements.menuDetailSaya);
  await base.waitElementVisible(elements.menuEditInformasiPribadi);
  await base.waitElementVisible(elements.menuAsetSaya);
  await base.waitElementVisible(elements.menuKendaraanSaya);
  await base.waitElementVisible(elements.menuRiwayatService);
  await base.waitElementVisible(elements.menuRiwayatPemesanan);
  await base.waitElementVisible(elements.menuWishlist);
  await base.waitElementVisible(elements.menuRiwayatHubKami);
};

export const clickWishlist = async () => {
  await base.scrollToElement(elements.menuRiwayatHubKami);
  await base.clickElement(elements.menuWishlist);
};
