import { faker } from "@faker-js/faker";

const User = [
  {
    name: "Amaar",
    email: "amaar@gmail.com",
    role: "buyer",
    speciality: "React.Js",
    join: "27-07-2027",
    location: "Karachi",
    gender: "Male",
    country: "Pakistan",
    profile: "image",
    description: "Hello Brother my favourite person is the bare Log",
  },
];

export const Team_member = [
  // 1
  {
    name: faker.person.fullName(),
    position: "Web Master",
    avatar: faker.image.avatar(),
  },
  // 2
  {
    name: faker.person.fullName(),
    position: "Web Master",
    avatar: faker.image.avatar(),
  },
  // 3
  {
    name: faker.person.fullName(),
    position: "Web Master",
    avatar: faker.image.avatar(),
  },
  // 4
  {
    name: faker.person.fullName(),
    position: "Web Master",
    avatar: faker.image.avatar(),
  },
  // 5
  {
    name: faker.person.fullName(),
    position: "Web Master",
    avatar: faker.image.avatar(),
  },
  // 6
  {
    name: faker.person.fullName(),
    position: "Web Master",
    avatar: faker.image.avatar(),
  },
];

export const vacancies = [
  {
    name: "Software Developer",
    positions: 500,
  },
  {
    name: "AI Master",
    positions: 500,
  },
  {
    name: "Social Media Expert",
    positions: 500,
  },
  {
    name: "SEO",
    positions: 500,
  },
  {
    name: "Graphic Designer",
    positions: 500,
  },
  {
    name: "Ux/Ui Designer",
    positions: 500,
  },
  {
    name: "Full Stack Developer",
    positions: 500,
  },
  {
    name: "Back-End Developer",
    positions: 200,
  },
  {
    name: "Front-End Developer",
    positions: 2500,
  },
  {
    name: "PHP Developer",
    positions: 1800,
  },
  {
    name: "Java Developer",
    positions: 800,
  },
  {
    name: "Web Developer",
    positions: 1500,
  },
];
export const logos = [
  {
    name: "levi's",
    path: "assets/l-1.png",
  },
  {
    name: "Aspire",
    path: "./assets/l-5.png",
  },
  {
    name: "Digital Pakistan",
    path: "./assets/l-1.png",
  },
  {
    name: "Allied Bank",
    path: "./assets/l-8.png",
  },
  {
    name: "Air Blue",
    path: "./assets/l-5.png",
  },
  {
    name: "Shafi",
    path: "./assets/l-5.png",
  },
  {
    name: "Airbnd",
    path: "./assets/l-8.png",
  },
  {
    name: "Urban Synthesis",
    path: "./assets/l-8.png",
  },
];
