export const site = {
  name: "Corti Hearing Clinic",
  tagline: "Effortless Hearing Starts Here",
  description:
    "Corti Hearing Clinic provides professional advice and high-quality solutions for people experiencing a hearing-related issue. Clinics in Frazer Town, Vijayanagar, and Tumkur.",
  since: 2006,
  years: 20,
  whatsapp: "919844091018",
  whatsappUrl: "https://api.whatsapp.com/send?phone=919844091018",
  phones: {
    primary: { display: "+91 98440 91018", tel: "+919844091018" },
    secondary: { display: "+91 97385 20754", tel: "+919738520754" },
    tumkur: { display: "+91 98864 83257", tel: "+919886483257" },
  },
  social: {
    instagram: "https://www.instagram.com/cortihearing/",
    facebook:
      "https://www.facebook.com/people/CORTI-HEARING-CLINIC/100057782764653/",
  },
  hours: "Monday to Saturday, 10:00 AM – 6:30 PM",
  hoursShort: "Mon–Sat · 10:00 AM – 6:30 PM",
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/hearing-loss", label: "Hearing Loss" },
  { to: "/hearing-aids", label: "Hearing Aids" },
  { to: "/hearing-test", label: "Hearing Test" },
  { to: "/testimonials", label: "Testimonials" },
] as const;

export const locations = [
  {
    id: "frazer-town",
    name: "Frazer Town",
    kind: "Headquarters",
    address:
      "No 114, Tawakkal Chambers, MM Road, Frazer Town, Pulikeshi Nagar, Bengaluru, Karnataka 560005",
    shortAddress: "No 114, Tawakkal Chambers, MM Road, Frazer Town, Pulikeshi Nagar, Bengaluru",
    hours: site.hours,
    phones: [site.phones.primary, site.phones.secondary],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.542742172928!2d77.61249!3d13.001072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16f05e956165%3A0x63d1dc96cb47af74!2sCorti%20hearing%20clinic!5e0!3m2!1sen!2sin!4v1680116572284!5m2!1sen!2sin",
    mapsUrl: "https://maps.google.com/?q=Corti+Hearing+Clinic+Frazer+Town+Bengaluru",
  },
  {
    id: "vijayanagar",
    name: "Vijayanagar",
    kind: "Branch",
    address:
      "No 117/14-8, 8th Main, 19th Cross, M C Road, Near Water Tank, CHBS Layout, Stage 2, Vijayanagar, Bengaluru, Karnataka 560040",
    shortAddress: "CHBS Layout, Stage 2, Vijayanagar, Bengaluru",
    hours: site.hours,
    phones: [site.phones.primary, site.phones.secondary],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9731440873015!2d77.5371299!3d12.973569500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ddd11777057%3A0x60af0e0edbe27475!2sCorti%20Hearing%20Clinic!5e0!3m2!1sen!2sin!4v1680116646561!5m2!1sen!2sin",
    mapsUrl: "https://maps.google.com/?q=Corti+Hearing+Clinic+Vijayanagar+Bengaluru",
  },
  {
    id: "tumkur",
    name: "Tumkur",
    kind: "Branch",
    address:
      "No 2284, Shop no. 1 & 2, 1st Cross, M.G. Road, Ward No. 18, Tumkur, Karnataka 572101",
    shortAddress: "1st Cross, M.G. Road, Tumkur",
    hours: site.hours,
    phones: [site.phones.tumkur, site.phones.primary],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.1730774025946!2d77.1054375!3d13.3395075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02c286394142d%3A0x39490b6d4ed84ff9!2sCorti%20Hearing%20Clinic!5e0!3m2!1sen!2sin!4v1680116693217!5m2!1sen!2sin",
    mapsUrl: "https://maps.google.com/?q=Corti+Hearing+Clinic+Tumkur",
  },
] as const;

export const stats = [
  { value: "1 Lakh+", label: "Customers served" },
  { value: "3", label: "Clinics with easy access" },
  { value: "20 yrs", label: "Pioneers since 2006" },
  { value: "Top brands", label: "Genuine warranty" },
] as const;

export const hearingSigns = [
  {
    img: "/images/abtimg-1.png",
    text: "Prefer higher volume on television or radio",
  },
  {
    img: "/images/abtimg-2.png",
    text: "Difficulty understanding conversation over the telephone",
  },
  {
    img: "/images/abtimg-3.png",
    text: "Struggle to hear conversations in a group or noisy place",
  },
] as const;

export const checkSteps = [
  {
    icon: "/images/hearloss_icon1.png",
    text: "Visit a Corti Hearing Clinic near you",
  },
  {
    icon: "/images/hearloss_icon2.png",
    text: "Tell us about your hearing concerns",
  },
  {
    icon: "/images/hearloss_icon3.png",
    text: "Take a quick, painless hearing examination",
  },
  {
    icon: "/images/hearloss_icon4.png",
    text: "Choose from a wide range of intelligent, smart hearing aids",
  },
] as const;

export const services = [
  {
    title: "Hearing Test",
    img: "/images/hearingtest.png",
    to: "/hearing-test",
  },
  {
    title: "Accessories",
    img: "/images/accessories.png",
    to: "/hearing-aids",
  },
  {
    title: "Therapy & Assessments",
    img: "/images/therapy.png",
    to: "/hearing-test",
  },
] as const;

export const promises = [
  { title: "Awareness", img: "/images/awarness_img.png" },
  { title: "Acceptability", img: "/images/acceptability_img.png" },
  { title: "Accessibility", img: "/images/accessibility_img.png" },
  { title: "Assurance", img: "/images/assurance_img.png" },
] as const;

export const brands = [
  { name: "Widex", img: "/images/widex.png" },
  { name: "Signia", img: "/images/signia.png" },
  { name: "Phonak", img: "/images/phonak.png" },
  { name: "Starkey", img: "/images/starkey.png" },
] as const;

export const testimonials = [
  {
    name: "Sandeep B",
    img: "/images/testimonials/client-1.png",
    quote:
      "Had a very nice experience consulting the Audiologist here. They were able to provide a very competitive pricing for the Oticon hearing device. Due to personal circumstance I was not able to buy the device and they were kind enough to cancel the order without any questions asked.",
  },
  {
    name: "Mini George",
    img: "/images/testimonials/client-2.png",
    quote:
      "After my bitter experience from a hearing aid clinic in JP Nagar we were hunting for a genuine service-oriented clinic and I am happy to have found Corti, which suits my need. I got my instrument exchanged for a better price and assured of batteries for a regular supply at a competitive price. Good service with almost zero waiting and on-time appointments. Professionals. Respect. Thanks.",
  },
  {
    name: "Ajayan Nair",
    img: "/images/testimonials/client-3.png",
    quote: "They sell and service hearing aids of various makes.",
  },
] as const;

export const values = [
  {
    title: "Enthusiasm",
    body: "We care deeply about our patients and love the work we do.",
  },
  {
    title: "Teamwork",
    body: "We work together as a team with a loving family spirit to achieve our shared mission.",
  },
  {
    title: "Innovation",
    body: "We embrace and drive positive change within ourselves and our practice.",
  },
  {
    title: "Compassion",
    body: "Our success allows us to have a broader impact on our communities, the profession of audiology, and the global hearing-loss community.",
  },
] as const;

export const aboutHighlights = [
  {
    title: "20 years of experience",
    img: "/images/about/experiance.png",
    body: "Corti offers a whole range of services, making us a one-stop clinic for hearing assistance. Whether you need a hearing check-up, hearing aids, or accessories, you get personalised attention and a solution for your hearing needs.",
  },
  {
    title: "Best service",
    img: "/images/about/bst-service.png",
    body: "We don’t just sell you hearing aids — we create a relationship. After your purchase you are always welcome to visit us, even for small issues with your hearing aids.",
  },
  {
    title: "Latest technology",
    img: "/images/about/technology.png",
    body: "Making sure you get the best is our goal. We only sell hearing aids from the world’s leading brands. In all centres Corti provides Pure Tone Audiometry, Impedance Audiometry, BERA, OAE, and all special tests.",
  },
] as const;

export const hearingAidTypes = [
  { title: "Behind-The-Ear (BTE)", img: "/images/hearingaid/bte.png" },
  { title: "Receiver-In-Canal (RIC)", img: "/images/hearingaid/ric.png" },
  { title: "In-The-Ear (ITE)", img: "/images/hearingaid/ite.png" },
  { title: "In-The-Canal (ITC)", img: "/images/hearingaid/itc.jpg" },
] as const;

export const hearingTests = [
  {
    code: "PTA",
    title: "Pure-Tone Audiometry",
    img: "/images/hearingtest/pta.png",
    body: "Pure-tone audiometry is the main hearing test used to identify hearing threshold levels of an individual, enabling determination of the degree, type and configuration of a hearing loss and thus providing a basis for diagnosis and management.",
  },
  {
    code: "OAE",
    title: "Otoacoustic Emissions",
    img: "/images/hearingtest/oae.png",
    body: "Otoacoustic emissions hearing tests are usually performed on newborn babies to detect deafness. The test can also partially estimate hearing sensitivity and test for functional hearing loss — a condition where you have symptoms of hearing loss but there is nothing actually wrong with your hearing.",
  },
  {
    code: "BERA",
    title: "Brainstem Evoked Response Audiometry",
    img: "/images/hearingtest/bera.png",
    body: "BERA is an objective neurophysiological method for evaluating the hearing threshold and diagnosing retrocochlear lesions. The auditory brainstem response (ABR) test tells us how the inner ear (cochlea) and the brain pathways for hearing are working. It is used with children or others who cannot complete a typical hearing screening.",
  },
  {
    code: "VEMP",
    title: "Vestibular Evoked Myogenic Potential",
    img: "/images/hearingtest/vemp.png",
    body: "VEMP is a vestibular function test performed by stimulating one ear with repetitive pulse or click sound stimulation and then measuring surface EMG responses over selected muscles, averaging the reaction of the muscle electrical activity associated with each sound click or pulse.",
  },
  {
    code: "ECochG",
    title: "Electrocochleography",
    img: "/images/hearingtest/ecochg.png",
    body: "Electrocochleography (ECochG) is a measurement of stimulus-related electrical potentials, which include the cochlear microphonics (CM), summating potentials (SP), and compound action potentials (AP) of the auditory nerve. This is an ideal test for the diagnosis of Meniere’s disease.",
  },
  {
    code: "IMP",
    title: "Impedance Audiometry",
    img: "/images/hearingtest/imp.png",
    body: "Impedance or immittance audiometry (tympanometry) is an objective test that helps understand the status of the eardrum and middle ear, the three tiny bones of the middle ear, Eustachian tube function, the two middle-ear muscles, cochlear function, and the reflex pathways of hearing involving the facial nerve, vestibulocochlear nerve, and the auditory brainstem.",
  },
] as const;

export const therapies = ["Speech Therapy", "Tinnitus Assessment"] as const;

export const faqs = [
  {
    q: "How long does a hearing test take?",
    a: "A standard pure-tone audiometry session is quick and painless — typically 20 to 40 minutes. Special tests such as BERA or OAE may take a little longer. Walk in or book ahead so we can keep waiting close to zero.",
  },
  {
    q: "Which hearing aid brands do you carry?",
    a: "We dispense and service Widex, Signia, Phonak, Starkey, and Oticon, among others. Your audiologist will match a brand and style to your hearing loss, lifestyle, and budget — with a genuine warranty.",
  },
  {
    q: "Do you offer after-sales service?",
    a: "Yes. We don’t just sell hearing aids — we create a relationship. You are welcome back for fine-tuning, batteries, accessories, and small repairs at any of our three clinics.",
  },
  {
    q: "Where are your clinics?",
    a: "Headquarters at Frazer Town, Bengaluru, with branches in Vijayanagar and Tumkur. All three are equipped with international-standard diagnostic equipment and NOAH Link technology.",
  },
] as const;
