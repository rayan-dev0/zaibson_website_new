export const PRODUCTS = [
  {
    name: "Man Hole Cover",
    description:
      "Secure your underground tank with our Heavy-Duty Manhole Cover, engineered for durability and reliability. Designed to withstand extreme conditions, this manhole cover ensures easy access while maintaining the highest safety standards.",
    details: {
      keyFeatures: [
        "High-Strength Material: Constructed from top-grade ductile iron, providing exceptional strength and longevity.",
        "Anti-Slip Surface: Features a textured surface to prevent slipping, ensuring safety during access.",
        "Corrosion Resistant: Coated with a protective layer to resist rust and corrosion, making it ideal for all environments.",
        "Easy Installation: Includes a user-friendly installation guide and pre-drilled holes for quick setup.",
        "Secure Fit: Precision-engineered to ensure a tight and secure fit, preventing unauthorized access and contamination.",
      ],
      benefits: [
        "Enhanced Safety: Reduces the risk of accidents with its anti-slip design.",
        "Long-Lasting Performance: Built to last, minimizing the need for frequent replacements.",
        "Reliable Protection: Keeps your underground tank secure from external elements and unauthorized access.",
      ],
    },
    img: "/man4.webp",
    link: "top-cover",
    imgs: [
      "/man4.webp",
      "/man3.webp",
      "/man5.webp",
      "/man6.webp",
      "/man7.webp",
      "/man8.webp",
      "/man9.webp",
    ],
    sizes: [
      "600 x 600",
      "450 x 600",
      "450 x 450",
      "375 x 375",
      "300 x 450",
      "300 x 300",
      "250 x 250",
      // "1x8",
      // "2x6",
      // "8x8",
      // "1x8",
      // "2x6",
      // "8x8",
      // "1x8",
      // "2x6",
    ],
  },
  {
    name: "Steps",
    description:
      "Upgrade your access solutions with our Heavy-Duty Modular Steps, designed for versatility and durability. Perfect for use in a variety of settings, these steps provide safe and reliable access to elevated areas, tanks, or machinery.",
    details: {
      keyFeatures: [
        "Sturdy Construction: Made from high-quality matrial, ensuring maximum strength and durability.",
        "Modular Design: Easily customizable to fit different heights and configurations.",
        "Anti-Slip Surface: Features a non-slip tread for enhanced safety in all weather conditions.",
        "Corrosion Resistant: Galvanized coating for excellent resistance to rust and corrosion.",
        "Easy Assembly: Simple and quick installation with pre-drilled holes and included hardware.",
      ],
      benefits: [
        "Safety First: Designed to prevent slips and falls, ensuring safe access for all users.",
        "Versatile Use: Ideal for industrial, commercial, and residential applications.",
        "Long-Lasting: Durable materials and construction ensure a long service life.",
        "Customizable: Modular design allows for adjustments to meet specific requirements.",
      ],
    },
    img: "/step1.webp",
    link: "asid",
    imgs: ["/step1.webp", "/step2.webp"],
  },
  {
    name: "Bucket",
    description:
      "Discover the versatility and durability of our Heavy-Duty Multi-Purpose Buckets, designed to handle a wide range of tasks with ease. Perfect for household, commercial, and industrial use, these buckets are a reliable solution for your storage and transport needs.",
    details: {
      keyFeatures: [
        "Robust Construction: Made from high-quality, impact-resistant plastic for maximum durability.",
        "Large Capacity: Available in multiple sizes to suit various needs, from small household tasks to large industrial jobs.",
        "Easy Grip Handle: Features a sturdy, ergonomic handle for comfortable carrying and pouring.",
        "Graduated Measurements: Internal markings for precise measurement of liquids and materials.",
        "Versatile Use: Ideal for cleaning, gardening, construction, and more.",
      ],
      benefits: [
        "Reliable Durability: Built to withstand heavy use and resist cracks and punctures.",
        "Convenient Design: Easy to carry and pour, making tasks more efficient and less strenuous.",
        "Multi-Functional: Suitable for a wide range of applications, offering great flexibility and utility.",
        "Hassle-Free Maintenance: Smooth surface for easy cleaning and minimal upkeep.",
      ],
    },
    colors: ["red", "yellow", "green"],
    img: "/bucket1.webp",
    link: "akjd",
    imgs: ["/bucket1.webp", "/bucket2.webp", "/bucket3.webp"],
    sizes: ["Small", "Medium", "Big"],
  },
  {
    name: "Ghamela",
    description:
      "Experience the robustness and reliability of our Industrial ghamela, meticulously designed for construction and industrial use. These ghamela are built to handle the most tasks, making them an essential tool for any construction site.",
    details: {
      keyFeatures: [
        "Robust Construction: Made from high-quality, impact-resistant polymers for maximum durability.",
        "Large Capacity: Available in multiple sizes to accommodate various industrial needs.",
        "Ergonomic Design: Features a sturdy structure for easy handling and use on-site.",
        "Versatile Use: Ideal for mixing and transporting materials in construction and other industrial applications.",
        "Easy to Clean: Smooth surface allows for quick and efficient cleaning, ensuring minimal downtime.",
      ],
      benefits: [
        "Reliable Durability: Built to withstand heavy use and resist cracks and punctures in harsh industrial environments.",
        "Convenient Design: Ergonomically designed for easy handling, making tasks more efficient and less strenuous.",
        "Multi-Functional: Suitable for a wide range of industrial applications, offering great flexibility and utility.",
        "Hassle-Free Maintenance: Easy to maintain, ensuring long-term usability with minimal upkeep.",
      ],
    },
    colors: ["red", "yellow", "green"],
    img: "/pan1.webp",
    link: "asdbj",
    imgs: ["/pan1.webp", "/pan2.webp", "/pan3.webp"],
  },
];

export const ANIMATIONS = {
  left: {
    initial: {
      x: -100,
      opacity: 0,
    },

    whileInView: {
      x: 0,
      opacity: 1,
    },

    transition: {
      delay: 0.2,
      duration: 0.7,
    },

    viewport: {
      once: true,
    },
  },

  right: {
    initial: {
      x: 100,
      opacity: 0,
    },

    whileInView: {
      x: 0,
      opacity: 1,
    },

    transition: {
      delay: 0.2,
      duration: 0.7,
    },

    viewport: {
      once: true,
    },
  },

  up: {
    initial: {
      y: 100,
      opacity: 0,
    },

    whileInView: {
      y: 0,
      opacity: 1,
    },

    transition: {
      delay: 0.2,
      duration: 0.7,
    },

    viewport: {
      once: true,
    },
  },

  down: {
    initial: {
      y: 0,
      opacity: 0,
    },

    whileInView: {
      y: 100,
      opacity: 1,
    },

    transition: {
      delay: 0.2,
      duration: 0.7,
    },

    viewport: {
      once: true,
    },
  },
};
