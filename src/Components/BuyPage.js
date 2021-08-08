import React, { useState, useEffect } from "react";
import { Axios } from "axios";

import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";

const apiKey = "INSERT_YOUR_KEY_HERE";
const url = "https://api.pixels.com/v1/search?query=laptop&per_page=6&&page=1";
const localurl = "http://myjson.dit.upm.es/api/bins/9zd";
const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  //   const fetchPhotos = async () => {
  //     const response = await Axios.get(url, {
  //       header: {
  //         Authorization: apiKey,
  //       },
  //     });

  const fetchPhotos = async () => {
    const { data } = await Axios.get(localurl);
  };

  const { photos } = data;

  useEffect(() => {
    fetchPhotos();
  }, []);
};

export default BuyPage;
