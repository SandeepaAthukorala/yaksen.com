import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ArrowLeft, Sparkles, Shirt } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";

// Image data from the provided URLs
const imageData = {
  seamlessPatterns: [
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750386801/Whisk_d2e9266013_iuoojg.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750386797/Whisk_c11c5adc31_ckwygv.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750386786/Whisk_d8c4cb4a4d_1_uc5pui.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750386776/Whisk_106101191b_zrwivh.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750386774/Whisk_1a777824e2_obmy4x.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750386773/Whisk_d8421418aa_mls74c.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750386768/Whisk_07f770a44e_bntjew.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750386768/Whisk_1176a91775_axyh8l.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750386767/Whisk_1b5ebc888e_yasvjx.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750386765/Whisk_bba3dc3710_db676t.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750386765/Whisk_9a8766bd06_ifrxr9.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750386760/Whisk_3f7958ca49_jagveh.webp"
  ],
  conceptArts: [
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387543/Whisk_1e73ae30fa_a8enhv.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387534/Whisk_d6e54dff93_q0ywzi.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387515/Whisk_2b3ca9e644_zimfmb.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387511/Whisk_46750b5d1b_fkohkq.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387468/Whisk_41954d1fd8_uavq8q.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387452/Whisk_434dbebbd4_avnuav.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387445/Whisk_4b9e68f1bb_jqh8mz.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387429/Whisk_60656e184d_ywh67d.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387354/Whisk_66eaef884c_fip1hx.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387325/Whisk_699091c47e_z1u5sl.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387308/Whisk_690f85dbcd_ofg4nf.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387296/Whisk_94adccfff1_m7p8nk.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387244/Whisk_b21c189c63_u5r2cf.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387217/Whisk_9f1da0586c_usiwd7.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387217/Whisk_a6b5a6705b_a8up60.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387112/Whisk_25af8058dd_adaq2v.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387085/Whisk_0348e9c60f_yzdgov.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387080/Whisk_9e9fc1e01a_qji0oi.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387065/Whisk_b3c498a09a_mit0hi.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387038/Whisk_eaafda568a_tm2wry.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387033/Whisk_f19553064c_lz7zom.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387025/Whisk_8f7e99489e_can9pp.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387025/Whisk_72f3f0afac_tv5hct.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387024/Whisk_d367cd744c_jzrys5.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387006/Whisk_a5e5d1947a_dh8qg2.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750386998/Whisk_adb0cb169e_wsfhug.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750386985/Whisk_55645688f1_dz6oer.webp"
  ],
  aiInfluencer: [
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500331/freepik__yakira-woman-in-a-pastel-midi-skirt-with-soft-plea__15875_uogsmb.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500329/freepik__yakira-wearing-a-light-grey-shirt-dress-sitting-on__15842_cdgqmz.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500330/freepik__yakira-wearing-a-sea-green-boxy-shortsleeve-shirt-__15885_mszxws.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500329/freepik__yakira-wearing-a-light-grey-shirt-dress-sitting-on__15841_yrej06.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500325/freepik__yakira-in-a-natural-cotton-aline-skirt-hands-on-wa__15853_eztlrn.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500325/freepik__yakira-in-a-sleeveless-aqua-midi-frock-sitting-on-__15894_fxt2js.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500322/freepik__yakira-in-a-muted-green-widebrim-jungle-hat-standi__15935_mvkvuz.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500321/freepik__yakira-a-mixed-race-woman-in-a-cloud-white-buttonu__15716_myrjja.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500320/freepik__yakira-in-a-khaki-shirt-with-texture-detail-tucked__15761_tgak3j.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500319/freepik__yakira-a-caucasian-woman-in-a-relaxed-cream-cotton__15679_vurslp.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500325/freepik__yakira-in-a-rust-cropped-tietop-standing-by-old-cl__15865_wm7fj5.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500330/freepik__yakira-wearing-a-sea-green-boxy-shortsleeve-shirt-__15884_tvhc56.webp"
  ],
  apparelDesigns: [
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500340/__6_ngtx6w.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500340/__3_xhmyls.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500339/__4_dn3gcx.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500339/__21_xumscv.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500338/__14_bs5jan.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500338/__16_uelll3.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500338/__15_cvaqj3.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500337/__11_yqbmgi.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500337/__10_lhaxp5.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500337/__1_kqmh7v.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500339/__2_kwfc3i.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1748500340/__17_fmht2j.webp"
  ],
  fabricSimulations: [
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750351073/openart-image_SAE2evg-_1750335729524_raw_kate8f.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750351072/openart-image_osYIsYqA_1750335802145_raw_opcwp9.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750351072/openart-image_wTFKfqKR_1750335114084_raw_afbdqz.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750351072/openart-image_wjDcaJAf_1750336401371_raw_buhmnz.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750351072/openart-image_EDD1WeVD_1750335987354_raw_woypnp.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750351071/openart-image_JnY9NKju_1750336601270_raw_cihitq.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750351071/openart-image_6g-N2dLR_1750335526205_raw_am1vgt.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750351070/openart-image_CDYH0MxF_1750336246490_raw_pmjhxg.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750351070/openart-image_Bw0nDQ9y_1750336173653_raw_ejlvi4.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750351070/openart-image_AA7W4vvR_1750335048824_raw_k2fqrn.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750351070/openart-image_a-Y4OpdT_1750335191906_raw_d3ijpv.webp"
  ],
  customMockups: [
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387925/Whisk_42782b6848_cxz7fi.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387906/Whisk_66ac6fdaa1_fr6jem.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750387899/Whisk_756832f490_avby3p.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750389452/Whisk_2f454c38ae_qavvej.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750388681/Whisk_65c61ba2b9_f3szpo.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750388678/Whisk_6cbcbf4155_uzcbcn.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750388672/Whisk_760edb3c20_rjrmbx.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750388669/Whisk_5eeb0396d9_vonjyi.webp",
    "https://res.cloudinary.com/dpc7doi10/image/upload/v1750388662/Whisk_2cbb79189b_idg1hq.webp"
  ]
};

const sections = [
  {
    id: "seamless-patterns",
    title: "Seamless Pattern Designs",
    emoji: "🧵",
    description: "AI-generated seamless patterns for textile and fashion applications",
    images: imageData.seamlessPatterns
  },
  {
    id: "concept-arts",
    title: "Concept Arts",
    emoji: "🎨",
    description: "Creative concept art and model photography for fashion campaigns",
    images: imageData.conceptArts
  },
  {
    id: "ai-influencer",
    title: "AI Influencer Model Photography",
    emoji: "🧍",
    description: "Professional AI-generated model photography featuring Yakira",
    images: imageData.aiInfluencer
  },
  {
    id: "apparel-mockups",
    title: "Clean Apparel Mockups",
    emoji: "👕",
    description: "High-quality apparel designs and mockups for fashion brands",
    images: imageData.apparelDesigns
  },
  {
    id: "fabric-simulations",
    title: "Fabric Simulations",
    emoji: "🧶",
    description: "Realistic fabric textures and material simulations",
    images: imageData.fabricSimulations
  },
  {
    id: "graphic-designs",
    title: "Apparel Graphic Designs",
    emoji: "🖼️",
    description: "Custom mockups and graphic designs for apparel brands",
    images: imageData.customMockups
  }
];

interface LightboxProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, imageUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-4xl max-h-[90vh] p-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={imageUrl}
            alt="Lightbox view"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

interface ImageCardProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, onClick }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <motion.div
        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center"
      >
        <motion.div
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <ZoomIn className="w-8 h-8 text-white" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const GarmentApparelPage: React.FC = () => {
  const navigate = useNavigate();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <motion.div 
          className="container-custom"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors mb-8 group"
            variants={itemVariants}
            whileHover={{ x: -4 }}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </motion.button>

          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div 
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 5 }}
              >
                <Shirt className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-primary-500" />
              </motion.div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">
              Garment &
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 bg-clip-text text-transparent ml-3">
                Apparel
              </span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Discover our AI Design Lab's revolutionary solutions for the fashion industry. From seamless patterns to AI influencer photography, we're reshaping how fashion brands create and showcase their collections.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container-custom">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              className="mb-20 last:mb-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              {/* Section Header */}
              <motion.div 
                className="text-center mb-12"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-full mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl">{section.emoji}</span>
                  <span className="font-medium text-neutral-700 dark:text-neutral-300">
                    {section.title}
                  </span>
                </motion.div>
                <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                  {section.description}
                </p>
              </motion.div>

              {/* Images Grid */}
              <motion.div 
                className="mx-auto max-w-7xl"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex flex-wrap justify-center gap-6">
                  {section.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      variants={itemVariants}
                      transition={{ delay: imageIndex * 0.05 }}
                      className="w-full max-w-sm sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)]"
                    >
                      <ImageCard
                        src={image}
                        alt={`${section.title} ${imageIndex + 1}`}
                        onClick={() => openLightbox(image)}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <motion.div 
          className="container-custom text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Ready to Transform Your Brand?</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 dark:text-white mb-6">
            Let's Create Something
            <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent ml-3">
              Amazing
            </span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
            Ready to revolutionize your fashion brand with AI-powered design solutions? Let's discuss your project and bring your vision to life.
          </p>
          <motion.button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started Today</span>
            <Sparkles className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      <Footer />
      
      {/* Lightbox */}
      <Lightbox
        isOpen={!!lightboxImage}
        imageUrl={lightboxImage || ""}
        onClose={closeLightbox}
      />
    </div>
  );
};

export default GarmentApparelPage;