import { r1, r2, r3} from "../assets";

const data = [
  // CSSD
  {
    img: "../assets/r1.png",
    title: "Autoclave Cooker Type Aluminium 12x12 E",
    company: "x",
    category: "CSSD",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Vertical Autoclave LX-B",
    company: "x",
    category: "CSSD",
  },
  {
    img: "../assets/r1.png",
    title: "Vertical Autoclave LX-C",
    company: "x",
    category: "CSSD",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Bowl Steriliser Stainless Steel Autoclave",
    company: "x",
    category: "CSSD",
  },
  {
    img: "../assets/r1.png",
    title: "Autoclave Cooker Type Aluminium 12x12 E",
    company: "x",
    category: "CSSD",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Autoclave Cooker Type Aluminium 9x11 E",
    company: "x",
    category: "CSSD",
  },
  {
    img: "../assets/r1.png",
    title: "High Pressure Vertical Autoclave LX-C",
    company: "x",
    category: "CSSD",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Portable Steam Autoclave YX-280D",
    company: "x",
    category: "CSSD",
  },

  // Furniture
  {
    img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
    title: "Examination Table",
    company: "x",
    category: "Furniture",
  },
  {
    img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
    title: "Standard Delivery Table",
    company: "x",
    category: "Furniture",
  },
  {
    img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
    title: "Drip Stand MP-AX006",
    company: "x",
    category: "Furniture",
  },
  {
    img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
    title: "One Crank Bed",
    company: "x",
    category: "Furniture",
  },
  {
    img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
    title: "Baby Crib-BC654",
    company: "x",
    category: "Furniture",
  },
  {
    img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
    title: "Nitrocare Hospital Bed-CM036",
    company: "x",
    category: "Furniture",
  },
  {
    img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
    title: "Examination Lamp-BT310B",
    company: "x",
    category: "Furniture",
  },
  {
    img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
    title: "4 Crank Hospital Bed - MOdel S4",
    company: "x",
    category: "Furniture",
  },

  //Dental
  {
    img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
    title: "Gnatus Saevo 500(S500)",
    company: "x",
    category: "Dental",
  },

  {
    img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
    title: "Eagle Edge-Multi Slice",
    company: "x",
    category: "Dental",
  },

  {
    img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
    title: "Eagle Edge-0.2FS",
    company: "x",
    category: "Dental",
  },

  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "Eagle Edge-Dental Tonograph",
    prevPrice: "$140,00",
    category: "Dental",
  },
  {
    img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
    title: "Dental Stool",
    company: "x",
    category: "Dental",
  },

  {
    img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
    title: "Dental Unit-CX E800 Air Compressor",
    company: "x",
    category: "Dental",
  },

  {
    img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
    title: "Dental Air Compressor (HK-3EW-55)",
    company: "x",
    category: "Dental",
  },

  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "Gnatus Bioclave 21L-Stainless",
    prevPrice: "$140,00",
    category: "Dental",
  },
  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "Gnatus Saevo 300(S300)",
    prevPrice: "$140,00",
    category: "Dental",
  },


  //Radiology
  {
    img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
    title: "Listen Radiology Syatem-REX525",
    company: "x",
    category: "Radiology",
  },
  {
    img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
    title: "Ultrasound DP-50",
    company: "x",
    category: "Radiology",
  },
  {
    img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
    title: "Mindray MX7",
    company: "x",
    category: "Radiology",
  },
  {
    img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
    title: "Ultrasound Consona-N8",
    company: "x",
    category: "Radiology",
  },

  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "Ultrasound MAchine-M6",
    company: "x",
    category: "Radiology",
  },
  {
    img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
    title: "Rosned Ultrasound Gel",
    company: "x",
    category: "Radiology",
  },
  {
    img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
    title: "Mindray Resona i9",
    company: "x",
    category: "Radiology",
  },
  {
    img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
    title: "Mindray M6",
    company: "x",
    category: "FRadiology",
  },
  {
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    title: "Mindray 250 - Ultrasound Machine",
    company: "x",
    category: "Radiology",
  },
  {
    img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
    title: "BPL XRad 300 - X-Ray Machine",
    company: "x",
    category: "Radiology",
  },
  {
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    title: "BPL MRad 3.6",
    company: "x",
    category: "Radiology",
  },
  {
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "BPL XRad 500",
    company: "x",
    category: "Radiology",
  },

  //Medical Pumps
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Conen Infusion Pump-ME660",
    company: "x",
    category: "Medical Pumps",
  },

  {
    img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
    title: "Conen Infusion Workstation-MX8900",
    company: "x",
    category: "Medical Pumps",
  },
  {
    img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
    title: "Conen Syringe pump - M200A",
    company: "x",
    category: "Medical Pumps",
  },
  {
    img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
    title: "Conen U8-Catheter Positioning Guiding System",
    company: "x",
    category: "Medical Pumps",
  },
  {
    img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
    title: "Conen Syringe Pump-M300",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "x",
    category: "Dental",
  },

  //Medical Lights
  {
    img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
    title: "Double Ceiling Mount LED-Operating Theatre Light",
    company: "x",
    category: "Medical Lights",
  },
  {
    img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
    title: "Examination Lamp-BT310B",
    company: "x",
    category: "Medical Lights",
  },
  {
    img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
    title: "LED 80 Operating Theatre Light",
    company: "x",
    category: "Medical Lights",
  },
  {
    img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
    title: "LED 40 Operating Theatre Light",
    company: "x",
    category: "Medical Lights",
  },

  //Anaesthesia
  {
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    title: "Anaesthesia Machine AX400",
    company: "x",
    category: "Anaesthesia",
  },
  {
    img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
    title: "Anaesthesia Machine AX500",
    company: "x",
    category: "Anaesthesia",
  },
  {
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    title: "Anaesthesia Machine AX600",
    company: "x",
    category: "Anaesthesia",
  },
  {
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "Anaesthesia Machine AX700",
    company: "x",
    category: "Radiology",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Anaesthesia Machine AX800",
    company: "x",
    category: "Anaesthesia",
  },

  {
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "Anaesthesia Machine AX900",
    company: "x",
    category: "Anaesthesia",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Anaesthesia Machine A7",
    company: "x",
    category: "Anaesthesia",
  },


  //Medical Gases
  {
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    title: "LCD Display Automatic -AM-100DX ",
    company: "x",
    category: "Medical Gases",
  },
  {
    img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
    title: "Degreased Medical Copper Tube",
    company: "x",
    category: "Medical Gases",
  },
  {
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    title: "Oxygen cart for Oxygen Cylinder",
    company: "x",
    category: "Medical Gases",
  },
  {
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "Semi Automatic Manifold",
    company: "x",
    category: "Medical Gases",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "LED Automatic Manifold - AM-100DX",
    company: "x",
    category: "Medical Gases",
  },

  {
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "Manual Manifold",
    company: "x",
    category: "Medical Gases",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Hospital bed Headboard",
    company: "x",
    category: "Medical Gases",
  },

   //Monitors
   {
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    title: "  CM1200A - Electrocardiograph",
    company: "x",
    category: "Monitors",
  },
  {
    img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
    title: "  Fetal and Maternal Monitor",
    company: "x",
    category: "Monitors",
  },
  {
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    title: "  NC5 - Vital Sounds Monitor",
    company: "x",
    category: "Monitors",
  },
  {
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "OLV 8000C Multi parameter patient monitor",
    company: "x",
    category: "Monitors",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "  K1-Emergency & Transport Patient Monitor",
    company: "x",
    category: "Monitors",
  },

  {
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "  K18 PAtient Monitor",
    company: "x",
    category: "Monitors",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "  CVL series - Video Laryngoscope Blades",
    company: "x",
    category: "Monitors",
  },
];

export default data;