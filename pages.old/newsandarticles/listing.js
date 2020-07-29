import * as base from '../../common/base-functions';

const elements = {
  banner: '.js-responsive-image.loaded',
  titleNews: '.col-lg-12.col-md-12:nth-child(1) .articles_head>h2',
  titleArticle: '.col-lg-12.col-md-12:nth-child(2) .articles_head>h2',
  btnLihatSemua: "a[href='/in/newsandarticles/category/listing?newscategoryCode=ALL&specialCategoryCode=BERITA-TERBARU']",
};

export const verifyNews= async () => {
  await base.assertUrlEquals('https://qa.astra-daihatsu.id/in/newsandarticles/listing');
  await base.expectVisible(elements.banner);
  await base.assertContainsText(elements.titleNews, 'Berita Terbaru');
  await base.assertContainsText(elements.titleArticle, 'Artikel Terbaru');
  await base.expectVisible(elements.btnLihatSemua);
};
