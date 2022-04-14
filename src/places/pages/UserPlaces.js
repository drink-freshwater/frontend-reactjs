import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Pasar Traditional",
    desc: "Tempat Jual Beli",
    imageUrl:
      "https://asset.kompas.com/crops/CImo851tzUxQ2dYZyDxIhqyHj50=/0x0:1000x667/750x500/data/photo/2021/05/11/609a34322eb5e.jpg",
    address:
      "Jl. Ps. Baru No.136, Bojonggede, Kecamatan Bojonggede, Kabupaten Bogor, Jawa Barat 16923",
    location: {
      lat: -6.4895283,
      lng: 106.7923055,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Pasar Traditional",
    desc: "Tempat Jual Beli",
    imageUrl:
      "https://asset.kompas.com/crops/CImo851tzUxQ2dYZyDxIhqyHj50=/0x0:1000x667/750x500/data/photo/2021/05/11/609a34322eb5e.jpg",
    address:
      "Jl. Ps. Baru No.136, Bojonggede, Kecamatan Bojonggede, Kabupaten Bogor, Jawa Barat 16923",
    location: {
      lat: -6.4895283,
      lng: 106.7923055,
    },
    creator: "u2",
  },
];

const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
