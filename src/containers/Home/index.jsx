import React from "react";
import Banner from "../../components/Banner";
import Carousel from "../../components/Carousel/index.jsx";
import Gallery from "../../components/Gallery/index.jsx";
import { getAdvertisements } from "../../service/api.js";

import "./style.css";
const Home = () => {
  const fakeData = [
    {
      id: "bc6f7112",
      title: "Superbe appartement proche Tour Eiffel",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-5.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-6.jpg",
      ],
      description:
        "Ce superbe appartement vous surprendra par son charme. Entièrement refait à neuf, il est équipé avec goût. La taille des pièces vous fera douter que vous êtes à Paris. Mais il vous suffit de sortir pour voir que vous êtes au coeur des plus belles attractions de Paris : le Louvre, la Tour Eiffel, le Grand Palais sont à deux pas. À vous de venir découvrir Paris !",
      host: {
        name: "Sébastien Fournier",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-5.jpg",
      },
      rating: "5",
      location: "Ile de France - Paris 6e",
      equipments: [
        "Wi-fi",
        "Sèche Cheveux",
        "Machine à laver",
        "Parking",
        "Lit King Size",
        "Ascenseur",
      ],
      tags: ["Luxe", "Tour Eiffel", "T3", "6ème"],
    },
    {
      id: "cb2f9222",
      title: "Suite familiale",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-5.jpg",
      ],
      description:
        "Paris vous tend les bras ! En famille ou entre amis, venez découvrir la ville de l'amour dans un appartement de goût. Vous pourrez profiter de tous les commerces seulement à quelques minutes de l'appartement. Sa proximité avec la gare Montparnasse en fait également un choix idéal pour celles et ceux qui doivent prendre un train.",
      host: {
        name: "Adrien Chiran",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-6.jpg",
      },
      rating: "4",
      location: "Ile de France - Paris 14e",
      equipments: [
        "Climatisation",
        "Machine à laver",
        "Sèche Cheveux",
        "Wi-fi",
        "Parking",
      ],
      tags: ["Montparnasse", "Commerces", "Famille"],
    },
    {
      id: "d60ca600",
      title: "Appartement moderne sur parc",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-4.jpg",
      ],
      description:
        "Respirer en plein coeur de Paris ? C'est possible ! Avec vue sur un parc résidentiel, vous pourrez ouvrir les fenêtres sans avoir à souffrir du bruit des voitures et de la pollution. Au contraire, vous pourrez écouter les oiseaux. Notre appartement est également idéalement situé au coeur du 11ème arrondissement. Proche des lignes 3 et 2, vous pourrez découvrir Paris sans effort !",
      host: {
        name: "Adrien Chiran",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-6.jpg",
      },
      rating: "3",
      location: "Ile de France - Paris 11e",
      equipments: [
        "Vue Parc",
        "Chauffage",
        "Sèche linge",
        "Sèche Cheveux",
        "Wi-fi",
        "Ascenseur",
      ],
      tags: ["Père Lachaise", "11e", "Metro 3", "Metro 2"],
    },
    {
      id: "2cf259e1",
      title: "Charmant Studio Marais",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-4.jpg",
      ],
      description:
        "Situé en plein coeur du Marais, notre studio est idéal pour les touristes en quête de découverte. Sa cuisine toute équipée est particulièrement pratique.",
      host: {
        name: "Victor Moran",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-7.jpg",
      },
      rating: "4",
      location: "Ile de France - Paris 11e",
      equipments: ["Clic-clac", "Four", "Sèche Cheveux", "Wi-fi"],
      tags: ["Marais", "Studio", "Parc"],
    },
  ];

  const pictures = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-5.jpg",
  ];
  return (
    <div className="Home">
      <Banner
        imgSource="../assets/coast-landscape.jpeg"
        altText="Un paysage sauvage de bord de mer"
        title="Chez vous, partout et ailleurs"
      />
      <Carousel pictures={pictures} />
      <Gallery advertisements={fakeData} />
    </div>
  );
};

export default Home;
