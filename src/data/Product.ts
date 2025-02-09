

export type Product = {
    id: number;
    name: string;
    tipe: string;
    class: string;
    image: string;
    rating: number;
    mentor: string;
    students: string;
  };

export const products: Product[] = [
  {
    id: 1,
    mentor: "Mentor 1",
    students: "25 Students",
    name: "Web Design & Development",
    tipe: "Web design",
    class: "25 clasess",
    image: "/public/fix.png", // ✅ Perbaikan path
    rating: 5,
  },
  {
    id: 2,
    mentor: "Mentor 2",
    students: "25 Students",
    name: "Phyton For Data Sciences",
    tipe: "Data Science",
    class: "25 clasess",
    image: "/fix.png", // ✅ Perbaikan path
    rating: 5,
  },
  {
    id: 3,
    mentor: "Mentor 3",
    students: "25 Students",
    name: "Wireframing & Prototyping",
    tipe: "UI/UX",
    class: "25 clasess",
    image: "/fix.png", // ✅ Perbaikan path
    rating: 5,
  },

]