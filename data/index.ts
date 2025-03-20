export const navItems = [
  { name: "Home", link: "/" }, // ✅ Redirects to base URL
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Technologies", link: "#technologies" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working as a Full Stack Developer",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Matrix - Freelance Work",
    des: "Developed an advanced product packing management system, optimizing order fulfillment by automating product-to-box assignments and generating labeled packing cards in PDF format, reducing processing time by 15%.",
    img: "/matrix.png",
    iconLists: ["/react.svg", "/node.svg", "/mysql.svg", "/hono.svg"],
    link: "https://vergin-matrix-frontend.vercel.app/",
    github: "",
  },
  {
    id: 2,
    title: "KiteFoot - Shoe E-Commerce Website",
    des: "Developed a Shoe E-Commerce platform with category-wise shoe listings, enabling seamless browsing and selection.",
    img: "/kitefoot.png",
    iconLists: ["/react.svg", "/tail.svg", "/react-router.svg"],
    link: "https://www.kitefoot.com/",
    github: "",
  },
  {
    id: 3,
    title: "NextAuth v5 - Secure Authentication",
    des: "Implemented cutting-edge authentication using NextAuth v5 in Next.js, supporting OAuth, JWT, and session management for secure user authentication.",
    img: "/nextauth.png",
    iconLists: ["/next.svg", "/oauth.svg", "/jwt.svg"],
    link: "https://next-auth-v5-six-lake.vercel.app/login",
    github: "https://github.com/Mantu008/NEXT-AUTH-V5",
  },
  {
    id: 4,
    title: "Hotel Booking - Hackathon Work",
    des: "Built a Hotel Booking frontend with detailed hotel specifications, amenities, and filtering options for easy search and selection.",
    img: "/hotel-booking.png",
    iconLists: ["/react.svg", "/tail.svg", "/axios.svg"],
    link: "https://web-horizon-hackthone.vercel.app/",
    github: "https://github.com/Mantu008/Web-Horizon-Hackthone",
  },
];
export const testimonials = [
  {
    quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer Intern",
    company: "Bonrix Software Systems",
    location: "Ahmedabad, Gujarat",
    duration: "Jan 2025 - March 2025",
    desc: "Developing a Quotation and Proforma Invoice Management System with automated PDF generation, role-based access control (RBAC), and seamless management of products, customers, and payment methods.",
    className: "md:col-span-2",
    technologies: [
      "React.js",
      "Node.js",
      "Hono",
      "SQL",
      "Jest",
      "Tailwind CSS",
      "React Router",
      "React Icon",
    ],
    thumbnail: "/exp1.svg",
  },
  // {
  //     id: 2,
  //     title: "Mobile App Dev - JSM Tech",
  //     desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //     className: "md:col-span-2", // change to md:col-span-2
  //     thumbnail: "/exp2.svg",
  // },
  // {
  //     id: 3,
  //     title: "Freelance App Dev Project",
  //     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //     className: "md:col-span-2", // change to md:col-span-2
  //     thumbnail: "/exp3.svg",
  // },
  // {
  //     id: 4,
  //     title: "Lead Frontend Developer",
  //     desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //     className: "md:col-span-2",
  //     thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/Mantu008",
  },
  {
    id: 2,
    name: "Twitter",
    img: "/twit.svg",
    link: "https://x.com/MantuKumar35945",
  },
  {
    id: 3,
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mantu-kumar-morya-011927253/",
  },
  {
    id: 4,
    name: "LeetCode",
    img: "/leetcode.svg",
    link: "https://leetcode.com/u/Mantu088/",
  },
  {
    id: 5,
    name: "GeeksforGeeks",
    img: "/gfg.svg",
    link: "https://www.geeksforgeeks.org/user/mantu088/?ref=header_profile",
  },
  {
    id: 10,
    name: "Instagram",
    img: "/insta.svg",
    link: "https://www.instagram.com/_mantu.d/",
  },
];

export const technologies = [
  { id: 1, name: "REST APIs", icon: "/rest-api.png" },
  { id: 2, name: "TypeScript", icon: "/typescript.png" },
  { id: 3, name: "SQL", icon: "/sql.png" },
  { id: 4, name: "Next.js", icon: "/nextjs.png" },
  { id: 6, name: "Express.js", icon: "/express.png" },
  { id: 7, name: "MongoDB", icon: "/mongodb.png" },
  { id: 8, name: "React.js", icon: "/react.png" },
  { id: 11, name: "C", icon: "/c.png" },
  { id: 12, name: "JSON", icon: "/json.png" },
  { id: 13, name: "Bootstrap", icon: "/bootstrap.png" },
  { id: 14, name: "CSS", icon: "/css.png" },
  { id: 15, name: "HTML5", icon: "/html.png" },
  { id: 16, name: "Node.js", icon: "/nodejs.png" },
  { id: 17, name: "GitHub", icon: "/github.png" },
  { id: 19, name: "JavaScript", icon: "/javascript.png" },
  { id: 20, name: "Java", icon: "/java.png" },
];
