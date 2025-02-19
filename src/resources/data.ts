export interface Slide {
  image: string;
}

export const slides: Slide[] = [
  {
    image: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877197/02_rgwjvt.webp'
  },
  {
    image: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877196/21_ifjjwy.webp'
  },
  {
    image: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877194/20_hpiiz7.webp'
  },
  {
    image: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877160/09_dyyqrk.webp'
  },
  {
    image: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877159/17_qe8tup.webp'
  },
  {
    image: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739534306/1_g6ftg5.webp'
  },
  {
    image: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739534305/6_jdeuf8.webp'
  },
  {
    image: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739534305/2_ntf6y1.webp'
  },
  {
    image: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739534304/7_rnwbrv.webp'
  },
  {
    image: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739534304/4_ji9w1j.webp'
  },
  {
    image: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739534302/3_tyz2se.webp'
  },
  {
    image: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739534299/5_zryi9i.webp'
  }
];


export interface ImageData {
  url: string; 
}

export const loading: ImageData[] = [
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877196/03_fgqv82.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877196/18_qe9n9f.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877192/14_ijgdnu.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877187/01_qyh9ze.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877184/06_pz8ilk.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877183/04_hs9jb9.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877180/05_rovxb8.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877177/16_fktacz.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877177/07_ehvgnr.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877177/15_sth5cr.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877171/08_qqscpq.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877171/10_t3faqx.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739877166/13_w1tsln.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739535014/19_qsgp0s.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739535013/07_j1bb3o.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739535011/15_ngxjcd.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739535010/16_agiaqy.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739534940/14_enekq7.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739534935/01_nduf6v.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739534934/03_yy7fnd.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739534934/03_yy7fnd.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739534932/10_wtjs0r.webp' },
  { url: 'https://res.cloudinary.com/das8wrfd1/image/upload/v1739534306/8_xpbcvy.webp' }
];

window.onload = () => {

  const preloadImages = (images: { image: string }[] | { url: string }[]) => {
    images.forEach(item => {
      const img = new Image();
      const imageUrl = (item as { image: string }).image || (item as { url: string }).url;
      img.src = imageUrl;
    });
  };
  

  preloadImages(slides);

  preloadImages(loading);
};
