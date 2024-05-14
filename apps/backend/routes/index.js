var express = require("express");
var router = express.Router();

const photographers = [
  {
    id: 20433731,
    width: 5760,
    height: 3840,
    url: "https://www.pexels.com/photo/daisies-petals-in-and-around-cup-20433731/",
    photographer: "Melike  Benli",
    photographer_url: "https://www.pexels.com/@mlkbnl",
    photographer_id: 43043410,
    avg_color: "#CDD8DC",
    src: {
      original:
        "https://images.pexels.com/photos/20433731/pexels-photo-20433731.jpeg",
      large2x:
        "https://images.pexels.com/photos/20433731/pexels-photo-20433731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20433731/pexels-photo-20433731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20433731/pexels-photo-20433731.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20433731/pexels-photo-20433731.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20433731/pexels-photo-20433731.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20433731/pexels-photo-20433731.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20433731/pexels-photo-20433731.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "A cup of water with white daisies floating in it",
  },
  {
    id: 20427511,
    width: 3739,
    height: 4985,
    url: "https://www.pexels.com/photo/woman-wearing-modern-outfit-20427511/",
    photographer: "Gabrielly Tinti",
    photographer_url: "https://www.pexels.com/@gabriellytinti",
    photographer_id: 2704437,
    avg_color: "#B1A398",
    src: {
      original:
        "https://images.pexels.com/photos/20427511/pexels-photo-20427511.jpeg",
      large2x:
        "https://images.pexels.com/photos/20427511/pexels-photo-20427511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20427511/pexels-photo-20427511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20427511/pexels-photo-20427511.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20427511/pexels-photo-20427511.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20427511/pexels-photo-20427511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20427511/pexels-photo-20427511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20427511/pexels-photo-20427511.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Woman Wearing Modern Outfit",
  },
  {
    id: 20427277,
    width: 3080,
    height: 4620,
    url: "https://www.pexels.com/photo/woman-wearing-dress-in-park-20427277/",
    photographer: "Becca Correia",
    photographer_url: "https://www.pexels.com/@beccacorreiaph",
    photographer_id: 971503,
    avg_color: "#343434",
    src: {
      original:
        "https://images.pexels.com/photos/20427277/pexels-photo-20427277.jpeg",
      large2x:
        "https://images.pexels.com/photos/20427277/pexels-photo-20427277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20427277/pexels-photo-20427277.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20427277/pexels-photo-20427277.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20427277/pexels-photo-20427277.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20427277/pexels-photo-20427277.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20427277/pexels-photo-20427277.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20427277/pexels-photo-20427277.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Free stock photo of alternative, dummy, red",
  },
  {
    id: 20426231,
    width: 4000,
    height: 6000,
    url: "https://www.pexels.com/photo/woman-in-a-white-dress-and-white-hat-walking-on-a-beach-20426231/",
    photographer: "Tamilles Esposito",
    photographer_url: "https://www.pexels.com/@tamillesesposito",
    photographer_id: 211353917,
    avg_color: "#BFC5C5",
    src: {
      original:
        "https://images.pexels.com/photos/20426231/pexels-photo-20426231.jpeg",
      large2x:
        "https://images.pexels.com/photos/20426231/pexels-photo-20426231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20426231/pexels-photo-20426231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20426231/pexels-photo-20426231.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20426231/pexels-photo-20426231.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20426231/pexels-photo-20426231.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20426231/pexels-photo-20426231.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20426231/pexels-photo-20426231.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "",
  },
  {
    id: 20426237,
    width: 3764,
    height: 5646,
    url: "https://www.pexels.com/photo/a-couple-holding-hands-and-walking-on-a-beach-20426237/",
    photographer: "Tamilles Esposito",
    photographer_url: "https://www.pexels.com/@tamillesesposito",
    photographer_id: 211353917,
    avg_color: "#A5A7A4",
    src: {
      original:
        "https://images.pexels.com/photos/20426237/pexels-photo-20426237.jpeg",
      large2x:
        "https://images.pexels.com/photos/20426237/pexels-photo-20426237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20426237/pexels-photo-20426237.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20426237/pexels-photo-20426237.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20426237/pexels-photo-20426237.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20426237/pexels-photo-20426237.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20426237/pexels-photo-20426237.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20426237/pexels-photo-20426237.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "",
  },
  {
    id: 20512078,
    width: 3003,
    height: 4004,
    url: "https://www.pexels.com/photo/a-house-with-mountains-in-the-background-and-flowers-20512078/",
    photographer: "jacky xing",
    photographer_url: "https://www.pexels.com/@jacky-xing-776569260",
    photographer_id: 776569260,
    avg_color: "#728A8C",
    src: {
      original:
        "https://images.pexels.com/photos/20512078/pexels-photo-20512078.jpeg",
      large2x:
        "https://images.pexels.com/photos/20512078/pexels-photo-20512078.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20512078/pexels-photo-20512078.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20512078/pexels-photo-20512078.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20512078/pexels-photo-20512078.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20512078/pexels-photo-20512078.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20512078/pexels-photo-20512078.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20512078/pexels-photo-20512078.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "A house with mountains in the background and flowers",
  },
  {
    id: 20506056,
    width: 3456,
    height: 5184,
    url: "https://www.pexels.com/photo/mirleft-beach-20506056/",
    photographer: "HASSANE  ELHARITI",
    photographer_url: "https://www.pexels.com/@hassane-elhariti-308723409",
    photographer_id: 308723409,
    avg_color: "#A7A79F",
    src: {
      original:
        "https://images.pexels.com/photos/20506056/pexels-photo-20506056.jpeg",
      large2x:
        "https://images.pexels.com/photos/20506056/pexels-photo-20506056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20506056/pexels-photo-20506056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20506056/pexels-photo-20506056.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20506056/pexels-photo-20506056.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20506056/pexels-photo-20506056.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20506056/pexels-photo-20506056.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20506056/pexels-photo-20506056.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "mirleft beach",
  },
  {
    id: 20480941,
    width: 4000,
    height: 6000,
    url: "https://www.pexels.com/photo/sami-3-20480941/",
    photographer: "Yael Tenorio",
    photographer_url: "https://www.pexels.com/@yael-tenorio-993697377",
    photographer_id: 993697377,
    avg_color: "#AFAFAF",
    src: {
      original:
        "https://images.pexels.com/photos/20480941/pexels-photo-20480941.jpeg",
      large2x:
        "https://images.pexels.com/photos/20480941/pexels-photo-20480941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20480941/pexels-photo-20480941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20480941/pexels-photo-20480941.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20480941/pexels-photo-20480941.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20480941/pexels-photo-20480941.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20480941/pexels-photo-20480941.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20480941/pexels-photo-20480941.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Sami <3",
  },
  {
    id: 20480963,
    width: 4000,
    height: 6000,
    url: "https://www.pexels.com/photo/ruido-en-todas-partes-20480963/",
    photographer: "Yael Tenorio",
    photographer_url: "https://www.pexels.com/@yael-tenorio-993697377",
    photographer_id: 993697377,
    avg_color: "#939393",
    src: {
      original:
        "https://images.pexels.com/photos/20480963/pexels-photo-20480963.jpeg",
      large2x:
        "https://images.pexels.com/photos/20480963/pexels-photo-20480963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20480963/pexels-photo-20480963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20480963/pexels-photo-20480963.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20480963/pexels-photo-20480963.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20480963/pexels-photo-20480963.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20480963/pexels-photo-20480963.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20480963/pexels-photo-20480963.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "ruido en todas partes",
  },
  {
    id: 20423561,
    width: 4000,
    height: 6000,
    url: "https://www.pexels.com/photo/portrait-of-blonde-woman-20423561/",
    photographer: "Artur Stec",
    photographer_url: "https://www.pexels.com/@artur-stec-26039050",
    photographer_id: 26039050,
    avg_color: "#7F6355",
    src: {
      original:
        "https://images.pexels.com/photos/20423561/pexels-photo-20423561.jpeg",
      large2x:
        "https://images.pexels.com/photos/20423561/pexels-photo-20423561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20423561/pexels-photo-20423561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20423561/pexels-photo-20423561.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20423561/pexels-photo-20423561.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20423561/pexels-photo-20423561.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20423561/pexels-photo-20423561.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20423561/pexels-photo-20423561.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Free stock photo of black coffee, breakfast, café",
  },
  {
    id: 20419174,
    width: 3648,
    height: 5472,
    url: "https://www.pexels.com/photo/flower-and-crystals-by-wheel-of-year-20419174/",
    photographer: "Monstera Production",
    photographer_url: "https://www.pexels.com/@gabby-k",
    photographer_id: 3372733,
    avg_color: "#8C7F6F",
    src: {
      original:
        "https://images.pexels.com/photos/20419174/pexels-photo-20419174.jpeg",
      large2x:
        "https://images.pexels.com/photos/20419174/pexels-photo-20419174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20419174/pexels-photo-20419174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20419174/pexels-photo-20419174.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20419174/pexels-photo-20419174.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20419174/pexels-photo-20419174.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20419174/pexels-photo-20419174.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20419174/pexels-photo-20419174.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "A flower and a crystal on a table with a compass",
  },
  {
    id: 20411031,
    width: 3290,
    height: 2141,
    url: "https://www.pexels.com/photo/woman-wearing-white-pumps-to-pants-20411031/",
    photographer: "bler",
    photographer_url: "https://www.pexels.com/@bler-1047837969",
    photographer_id: 1047837969,
    avg_color: "#7F838C",
    src: {
      original:
        "https://images.pexels.com/photos/20411031/pexels-photo-20411031.jpeg",
      large2x:
        "https://images.pexels.com/photos/20411031/pexels-photo-20411031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20411031/pexels-photo-20411031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20411031/pexels-photo-20411031.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20411031/pexels-photo-20411031.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20411031/pexels-photo-20411031.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20411031/pexels-photo-20411031.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20411031/pexels-photo-20411031.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "A woman in a white suit standing near a pool",
  },
  {
    id: 20393167,
    width: 5767,
    height: 5995,
    url: "https://www.pexels.com/photo/lake-in-town-20393167/",
    photographer: "Julian Hignell",
    photographer_url: "https://www.pexels.com/@julian-hignell-1033979664",
    photographer_id: 1033979664,
    avg_color: "#BEBCC1",
    src: {
      original:
        "https://images.pexels.com/photos/20393167/pexels-photo-20393167.jpeg",
      large2x:
        "https://images.pexels.com/photos/20393167/pexels-photo-20393167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20393167/pexels-photo-20393167.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20393167/pexels-photo-20393167.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20393167/pexels-photo-20393167.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20393167/pexels-photo-20393167.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20393167/pexels-photo-20393167.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20393167/pexels-photo-20393167.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Lake in Town",
  },
  {
    id: 20385938,
    width: 4160,
    height: 6240,
    url: "https://www.pexels.com/photo/green-palm-tree-leaves-20385938/",
    photographer: "Mathias Reding",
    photographer_url: "https://www.pexels.com/@matreding",
    photographer_id: 2848684,
    avg_color: "#B2B4B1",
    src: {
      original:
        "https://images.pexels.com/photos/20385938/pexels-photo-20385938.jpeg",
      large2x:
        "https://images.pexels.com/photos/20385938/pexels-photo-20385938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20385938/pexels-photo-20385938.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20385938/pexels-photo-20385938.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20385938/pexels-photo-20385938.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20385938/pexels-photo-20385938.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20385938/pexels-photo-20385938.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20385938/pexels-photo-20385938.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "A palm tree is shown against a blue sky",
  },
  {
    id: 20472702,
    width: 2160,
    height: 3840,
    url: "https://www.pexels.com/photo/bride-is-ready-20472702/",
    photographer: "alirezamani wedding team",
    photographer_url:
      "https://www.pexels.com/@alirezamani-wedding-team-233485225",
    photographer_id: 233485225,
    avg_color: "#484848",
    src: {
      original:
        "https://images.pexels.com/photos/20472702/pexels-photo-20472702.jpeg",
      large2x:
        "https://images.pexels.com/photos/20472702/pexels-photo-20472702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20472702/pexels-photo-20472702.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20472702/pexels-photo-20472702.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20472702/pexels-photo-20472702.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20472702/pexels-photo-20472702.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20472702/pexels-photo-20472702.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20472702/pexels-photo-20472702.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "bride is ready",
  },
  {
    id: 20468216,
    width: 3024,
    height: 4032,
    url: "https://www.pexels.com/photo/a-green-door-with-a-vine-growing-out-of-it-20468216/",
    photographer: "Jose Cruz",
    photographer_url: "https://www.pexels.com/@cruz-in-portugal",
    photographer_id: 1033996400,
    avg_color: "#898C81",
    src: {
      original:
        "https://images.pexels.com/photos/20468216/pexels-photo-20468216.jpeg",
      large2x:
        "https://images.pexels.com/photos/20468216/pexels-photo-20468216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20468216/pexels-photo-20468216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20468216/pexels-photo-20468216.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20468216/pexels-photo-20468216.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20468216/pexels-photo-20468216.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20468216/pexels-photo-20468216.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20468216/pexels-photo-20468216.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "A green door with a vine growing out of it",
  },
  {
    id: 20160000,
    width: 3840,
    height: 5760,
    url: "https://www.pexels.com/photo/a-black-and-white-photo-of-a-woman-smiling-20160000/",
    photographer: "Muhammad-Taha Ibrahim",
    photographer_url: "https://www.pexels.com/@planeteelevene",
    photographer_id: 1196715,
    avg_color: "#8A8A8A",
    src: {
      original:
        "https://images.pexels.com/photos/20160000/pexels-photo-20160000.jpeg",
      large2x:
        "https://images.pexels.com/photos/20160000/pexels-photo-20160000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20160000/pexels-photo-20160000.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20160000/pexels-photo-20160000.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20160000/pexels-photo-20160000.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20160000/pexels-photo-20160000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20160000/pexels-photo-20160000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20160000/pexels-photo-20160000.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "A black and white photo of a woman smiling",
  },
  {
    id: 20457211,
    width: 4160,
    height: 6240,
    url: "https://www.pexels.com/photo/a-walkway-with-benches-and-flowers-in-the-background-20457211/",
    photographer: "Alina Chernii",
    photographer_url: "https://www.pexels.com/@alina-chernii-682289345",
    photographer_id: 682289345,
    avg_color: "#3D3832",
    src: {
      original:
        "https://images.pexels.com/photos/20457211/pexels-photo-20457211.jpeg",
      large2x:
        "https://images.pexels.com/photos/20457211/pexels-photo-20457211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20457211/pexels-photo-20457211.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20457211/pexels-photo-20457211.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20457211/pexels-photo-20457211.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20457211/pexels-photo-20457211.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20457211/pexels-photo-20457211.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20457211/pexels-photo-20457211.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "A walkway with benches and flowers in the background",
  },
  {
    id: 20455903,
    width: 3648,
    height: 5472,
    url: "https://www.pexels.com/photo/two-women-are-standing-in-a-field-with-flowers-20455903/",
    photographer: "Tania  Swan",
    photographer_url: "https://www.pexels.com/@tania-swan-728754227",
    photographer_id: 728754227,
    avg_color: "#63654D",
    src: {
      original:
        "https://images.pexels.com/photos/20455903/pexels-photo-20455903.jpeg",
      large2x:
        "https://images.pexels.com/photos/20455903/pexels-photo-20455903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20455903/pexels-photo-20455903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20455903/pexels-photo-20455903.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20455903/pexels-photo-20455903.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20455903/pexels-photo-20455903.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20455903/pexels-photo-20455903.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20455903/pexels-photo-20455903.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Two women are standing in a field with flowers",
  },
  {
    id: 20454075,
    width: 3328,
    height: 4992,
    url: "https://www.pexels.com/photo/two-people-walking-down-a-street-with-a-wall-behind-them-20454075/",
    photographer: "Hung Vo",
    photographer_url: "https://www.pexels.com/@hung-vo-1054696483",
    photographer_id: 1054696483,
    avg_color: "#525753",
    src: {
      original:
        "https://images.pexels.com/photos/20454075/pexels-photo-20454075.jpeg",
      large2x:
        "https://images.pexels.com/photos/20454075/pexels-photo-20454075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20454075/pexels-photo-20454075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20454075/pexels-photo-20454075.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20454075/pexels-photo-20454075.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20454075/pexels-photo-20454075.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20454075/pexels-photo-20454075.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20454075/pexels-photo-20454075.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "",
  },
  {
    id: 20454086,
    width: 3824,
    height: 5736,
    url: "https://www.pexels.com/photo/a-person-crossing-the-street-under-an-overpass-20454086/",
    photographer: "Hung Vo",
    photographer_url: "https://www.pexels.com/@hung-vo-1054696483",
    photographer_id: 1054696483,
    avg_color: "#6A6B66",
    src: {
      original:
        "https://images.pexels.com/photos/20454086/pexels-photo-20454086.jpeg",
      large2x:
        "https://images.pexels.com/photos/20454086/pexels-photo-20454086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20454086/pexels-photo-20454086.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20454086/pexels-photo-20454086.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20454086/pexels-photo-20454086.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20454086/pexels-photo-20454086.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20454086/pexels-photo-20454086.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20454086/pexels-photo-20454086.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "",
  },
  {
    id: 20454544,
    width: 3818,
    height: 5727,
    url: "https://www.pexels.com/photo/boot-auf-dem-see-20454544/",
    photographer: "Julien Riedel",
    photographer_url: "https://www.pexels.com/@julien-riedel-907961520",
    photographer_id: 907961520,
    avg_color: "#645E5E",
    src: {
      original:
        "https://images.pexels.com/photos/20454544/pexels-photo-20454544.jpeg",
      large2x:
        "https://images.pexels.com/photos/20454544/pexels-photo-20454544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20454544/pexels-photo-20454544.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20454544/pexels-photo-20454544.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20454544/pexels-photo-20454544.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20454544/pexels-photo-20454544.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20454544/pexels-photo-20454544.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20454544/pexels-photo-20454544.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Boot auf dem See ",
  },
  {
    id: 20453947,
    width: 3024,
    height: 4032,
    url: "https://www.pexels.com/photo/a-view-of-the-mountains-through-a-hole-in-the-ground-20453947/",
    photographer: "Zhargalma Batlaeva",
    photographer_url: "https://www.pexels.com/@zhargalma-batlaeva-1052959167",
    photographer_id: 1052959167,
    avg_color: "#6F6951",
    src: {
      original:
        "https://images.pexels.com/photos/20453947/pexels-photo-20453947.jpeg",
      large2x:
        "https://images.pexels.com/photos/20453947/pexels-photo-20453947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20453947/pexels-photo-20453947.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20453947/pexels-photo-20453947.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20453947/pexels-photo-20453947.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20453947/pexels-photo-20453947.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20453947/pexels-photo-20453947.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20453947/pexels-photo-20453947.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "",
  },
  {
    id: 20451677,
    width: 3976,
    height: 5964,
    url: "https://www.pexels.com/photo/the-sun-sets-over-the-ocean-and-rocks-20451677/",
    photographer: "Lisa Pinciroli",
    photographer_url: "https://www.pexels.com/@lisa-pinciroli-927930709",
    photographer_id: 927930709,
    avg_color: "#6E5340",
    src: {
      original:
        "https://images.pexels.com/photos/20451677/pexels-photo-20451677.jpeg",
      large2x:
        "https://images.pexels.com/photos/20451677/pexels-photo-20451677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20451677/pexels-photo-20451677.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20451677/pexels-photo-20451677.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20451677/pexels-photo-20451677.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20451677/pexels-photo-20451677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20451677/pexels-photo-20451677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20451677/pexels-photo-20451677.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "",
  },
  {
    id: 20448103,
    width: 3543,
    height: 2397,
    url: "https://www.pexels.com/photo/a-field-of-pink-and-white-flowers-with-a-sign-that-says-cosmos-20448103/",
    photographer: "Nguyen Huy",
    photographer_url: "https://www.pexels.com/@ngochuy",
    photographer_id: 3614307,
    avg_color: "#7F7659",
    src: {
      original:
        "https://images.pexels.com/photos/20448103/pexels-photo-20448103.jpeg",
      large2x:
        "https://images.pexels.com/photos/20448103/pexels-photo-20448103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20448103/pexels-photo-20448103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20448103/pexels-photo-20448103.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20448103/pexels-photo-20448103.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20448103/pexels-photo-20448103.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20448103/pexels-photo-20448103.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20448103/pexels-photo-20448103.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "",
  },
  {
    id: 20433014,
    width: 3899,
    height: 5849,
    url: "https://www.pexels.com/photo/beach-at-madeira-20433014/",
    photographer: "Gábor Balázs",
    photographer_url: "https://www.pexels.com/@gaborbalazs97",
    photographer_id: 683754449,
    avg_color: "#7A7F6B",
    src: {
      original:
        "https://images.pexels.com/photos/20433014/pexels-photo-20433014.jpeg",
      large2x:
        "https://images.pexels.com/photos/20433014/pexels-photo-20433014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20433014/pexels-photo-20433014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20433014/pexels-photo-20433014.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20433014/pexels-photo-20433014.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20433014/pexels-photo-20433014.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20433014/pexels-photo-20433014.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20433014/pexels-photo-20433014.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Beach at Madeira",
  },
  {
    id: 20433050,
    width: 6000,
    height: 4000,
    url: "https://www.pexels.com/photo/madeira-island-20433050/",
    photographer: "Gábor Balázs",
    photographer_url: "https://www.pexels.com/@gaborbalazs97",
    photographer_id: 683754449,
    avg_color: "#9D9E8E",
    src: {
      original:
        "https://images.pexels.com/photos/20433050/pexels-photo-20433050.jpeg",
      large2x:
        "https://images.pexels.com/photos/20433050/pexels-photo-20433050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20433050/pexels-photo-20433050.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20433050/pexels-photo-20433050.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20433050/pexels-photo-20433050.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20433050/pexels-photo-20433050.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20433050/pexels-photo-20433050.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20433050/pexels-photo-20433050.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Madeira island",
  },
  {
    id: 20433053,
    width: 4000,
    height: 6000,
    url: "https://www.pexels.com/photo/madeira-island-20433053/",
    photographer: "Gábor Balázs",
    photographer_url: "https://www.pexels.com/@gaborbalazs97",
    photographer_id: 683754449,
    avg_color: "#8F8C85",
    src: {
      original:
        "https://images.pexels.com/photos/20433053/pexels-photo-20433053.jpeg",
      large2x:
        "https://images.pexels.com/photos/20433053/pexels-photo-20433053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20433053/pexels-photo-20433053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20433053/pexels-photo-20433053.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20433053/pexels-photo-20433053.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20433053/pexels-photo-20433053.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20433053/pexels-photo-20433053.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20433053/pexels-photo-20433053.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Madeira island",
  },
  {
    id: 20432992,
    width: 6000,
    height: 4000,
    url: "https://www.pexels.com/photo/funchal-at-madeira-20432992/",
    photographer: "Gábor Balázs",
    photographer_url: "https://www.pexels.com/@gaborbalazs97",
    photographer_id: 683754449,
    avg_color: "#434A42",
    src: {
      original:
        "https://images.pexels.com/photos/20432992/pexels-photo-20432992.jpeg",
      large2x:
        "https://images.pexels.com/photos/20432992/pexels-photo-20432992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20432992/pexels-photo-20432992.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20432992/pexels-photo-20432992.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20432992/pexels-photo-20432992.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20432992/pexels-photo-20432992.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20432992/pexels-photo-20432992.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20432992/pexels-photo-20432992.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Funchal at Madeira",
  },
  {
    id: 20452056,
    width: 4160,
    height: 2773,
    url: "https://www.pexels.com/photo/waves-20452056/",
    photographer: "Dara Mankiewicz",
    photographer_url: "https://www.pexels.com/@dara-mankiewicz-1054691107",
    photographer_id: 1054691107,
    avg_color: "#6C828F",
    src: {
      original:
        "https://images.pexels.com/photos/20452056/pexels-photo-20452056.jpeg",
      large2x:
        "https://images.pexels.com/photos/20452056/pexels-photo-20452056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20452056/pexels-photo-20452056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20452056/pexels-photo-20452056.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20452056/pexels-photo-20452056.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20452056/pexels-photo-20452056.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20452056/pexels-photo-20452056.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20452056/pexels-photo-20452056.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Waves",
  },
  {
    id: 20451936,
    width: 3644,
    height: 5472,
    url: "https://www.pexels.com/photo/nazare-20451936/",
    photographer: "Dara Mankiewicz",
    photographer_url: "https://www.pexels.com/@dara-mankiewicz-1054691107",
    photographer_id: 1054691107,
    avg_color: "#817867",
    src: {
      original:
        "https://images.pexels.com/photos/20451936/pexels-photo-20451936.jpeg",
      large2x:
        "https://images.pexels.com/photos/20451936/pexels-photo-20451936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20451936/pexels-photo-20451936.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20451936/pexels-photo-20451936.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20451936/pexels-photo-20451936.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20451936/pexels-photo-20451936.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20451936/pexels-photo-20451936.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20451936/pexels-photo-20451936.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Nazaré",
  },
  {
    id: 20451417,
    width: 2000,
    height: 2996,
    url: "https://www.pexels.com/photo/autosave-file-vom-d-lab2-3-der-agfaphoto-gmbh-20451417/",
    photographer: "Niki Inclan",
    photographer_url: "https://www.pexels.com/@niki-inclan-1047629866",
    photographer_id: 1047629866,
    avg_color: "#7E7F7A",
    src: {
      original:
        "https://images.pexels.com/photos/20451417/pexels-photo-20451417.jpeg",
      large2x:
        "https://images.pexels.com/photos/20451417/pexels-photo-20451417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20451417/pexels-photo-20451417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20451417/pexels-photo-20451417.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20451417/pexels-photo-20451417.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20451417/pexels-photo-20451417.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20451417/pexels-photo-20451417.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20451417/pexels-photo-20451417.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Autosave-File vom d-lab2/3 der AgfaPhoto GmbH ",
  },
  {
    id: 20446158,
    width: 4000,
    height: 2667,
    url: "https://www.pexels.com/photo/village-of-santa-maddalena-in-the-italian-dolomites-20446158/",
    photographer: "Hikerwise",
    photographer_url: "https://www.pexels.com/@hikerwise-1054676139",
    photographer_id: 1054676139,
    avg_color: "#808662",
    src: {
      original:
        "https://images.pexels.com/photos/20446158/pexels-photo-20446158.jpeg",
      large2x:
        "https://images.pexels.com/photos/20446158/pexels-photo-20446158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20446158/pexels-photo-20446158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20446158/pexels-photo-20446158.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20446158/pexels-photo-20446158.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20446158/pexels-photo-20446158.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20446158/pexels-photo-20446158.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20446158/pexels-photo-20446158.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Village of Santa Maddalena in the Italian Dolomites",
  },
  {
    id: 20450072,
    width: 1920,
    height: 2880,
    url: "https://www.pexels.com/photo/hannu-20450072/",
    photographer: "cami",
    photographer_url: "https://www.pexels.com/@casnafu",
    photographer_id: 132623139,
    avg_color: "#8F8F8F",
    src: {
      original:
        "https://images.pexels.com/photos/20450072/pexels-photo-20450072.jpeg",
      large2x:
        "https://images.pexels.com/photos/20450072/pexels-photo-20450072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20450072/pexels-photo-20450072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20450072/pexels-photo-20450072.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20450072/pexels-photo-20450072.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20450072/pexels-photo-20450072.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20450072/pexels-photo-20450072.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20450072/pexels-photo-20450072.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "hannu",
  },
  {
    id: 20448105,
    width: 4640,
    height: 6960,
    url: "https://www.pexels.com/photo/venice-20448105/",
    photographer: "Efrem  Efre",
    photographer_url: "https://www.pexels.com/@efrem-efre-2786187",
    photographer_id: 2786187,
    avg_color: "#836B5F",
    src: {
      original:
        "https://images.pexels.com/photos/20448105/pexels-photo-20448105.jpeg",
      large2x:
        "https://images.pexels.com/photos/20448105/pexels-photo-20448105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20448105/pexels-photo-20448105.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20448105/pexels-photo-20448105.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20448105/pexels-photo-20448105.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20448105/pexels-photo-20448105.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20448105/pexels-photo-20448105.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20448105/pexels-photo-20448105.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Venice ",
  },
  {
    id: 20445473,
    width: 1719,
    height: 2579,
    url: "https://www.pexels.com/photo/20445473/",
    photographer: "yating yang",
    photographer_url: "https://www.pexels.com/@yating-yang-426041335",
    photographer_id: 426041335,
    avg_color: "#7D8B8C",
    src: {
      original:
        "https://images.pexels.com/photos/20445473/pexels-photo-20445473.jpeg",
      large2x:
        "https://images.pexels.com/photos/20445473/pexels-photo-20445473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20445473/pexels-photo-20445473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20445473/pexels-photo-20445473.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20445473/pexels-photo-20445473.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20445473/pexels-photo-20445473.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20445473/pexels-photo-20445473.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20445473/pexels-photo-20445473.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "自由",
  },
  {
    id: 20367978,
    width: 2407,
    height: 3009,
    url: "https://www.pexels.com/photo/landscape-of-rocky-snowcapped-mountains-and-a-forest-in-a-valley-20367978/",
    photographer: "Ákos Szűcs",
    photographer_url: "https://www.pexels.com/@akos-szucs-1033979483",
    photographer_id: 1033979483,
    avg_color: "#909495",
    src: {
      original:
        "https://images.pexels.com/photos/20367978/pexels-photo-20367978.jpeg",
      large2x:
        "https://images.pexels.com/photos/20367978/pexels-photo-20367978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20367978/pexels-photo-20367978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20367978/pexels-photo-20367978.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20367978/pexels-photo-20367978.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20367978/pexels-photo-20367978.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20367978/pexels-photo-20367978.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20367978/pexels-photo-20367978.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "A mountain covered in fog and trees",
  },
  {
    id: 20442701,
    width: 6000,
    height: 4000,
    url: "https://www.pexels.com/photo/selective-focus-photo-of-autumnal-leaves-20442701/",
    photographer: "Mahoney Photography",
    photographer_url: "https://www.pexels.com/@mahoney-photography-1052975808",
    photographer_id: 1052975808,
    avg_color: "#785539",
    src: {
      original:
        "https://images.pexels.com/photos/20442701/pexels-photo-20442701.jpeg",
      large2x:
        "https://images.pexels.com/photos/20442701/pexels-photo-20442701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20442701/pexels-photo-20442701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20442701/pexels-photo-20442701.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20442701/pexels-photo-20442701.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20442701/pexels-photo-20442701.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20442701/pexels-photo-20442701.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20442701/pexels-photo-20442701.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Selective focus photo of autumnal leaves",
  },
  {
    id: 20440051,
    width: 6000,
    height: 4000,
    url: "https://www.pexels.com/photo/a-woman-leaning-against-a-railing-with-her-hand-on-her-chin-20440051/",
    photographer: "Ata Daftarifard",
    photographer_url: "https://www.pexels.com/@ata-daftarifard-1052963579",
    photographer_id: 1052963579,
    avg_color: "#98958E",
    src: {
      original:
        "https://images.pexels.com/photos/20440051/pexels-photo-20440051.jpeg",
      large2x:
        "https://images.pexels.com/photos/20440051/pexels-photo-20440051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20440051/pexels-photo-20440051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20440051/pexels-photo-20440051.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20440051/pexels-photo-20440051.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20440051/pexels-photo-20440051.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20440051/pexels-photo-20440051.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20440051/pexels-photo-20440051.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "",
  },
  {
    id: 20436784,
    width: 4140,
    height: 6210,
    url: "https://www.pexels.com/photo/a-man-in-a-traditional-outfit-walking-down-the-street-20436784/",
    photographer: "jacky xing",
    photographer_url: "https://www.pexels.com/@jacky-xing-776569260",
    photographer_id: 776569260,
    avg_color: "#A89284",
    src: {
      original:
        "https://images.pexels.com/photos/20436784/pexels-photo-20436784.jpeg",
      large2x:
        "https://images.pexels.com/photos/20436784/pexels-photo-20436784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/20436784/pexels-photo-20436784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/20436784/pexels-photo-20436784.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/20436784/pexels-photo-20436784.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/20436784/pexels-photo-20436784.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/20436784/pexels-photo-20436784.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/20436784/pexels-photo-20436784.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "A man in a traditional outfit walking down the street",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  return res.status(200).json(photographers);
});

module.exports = router;
