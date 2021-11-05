import React from 'react';
import './App.css';
import Header from './Header';
import Cover from './Cover';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Cover />
      <Categories />
      <FeaturedProducts 
        title="Most Popular"
        productTitle="Sony PS5 PlayStation 5 (US Plug) Blu-ray Edition Console 3005718 White"
        productImage="https://images.stockx.com/images/Sony-Playstation-5-Blu-Ray-Edition-Console-White.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1605716639&fm=webp&ixlib=react-9.1.5&q=90&w=140&h=90"
        price="£695"
        number="911"
        productTitle1="Sony PS5 PlayStation 5 (US Plug) Digital Edition Console 3005719 White"
        productImage1="https://images.stockx.com/images/Sony-Playstation-5-Digital-Edition-Console-White.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1605716716&fm=webp&ixlib=react-9.1.5&q=90&w=140&h=90"
        price1="£656"
        number1="478"
        productTitle2="Microsoft Xbox Series X (US Plug) RRT-00001 Black"
        productImage2="https://images.stockx.com/images/Microsoft-Xbox-Series-X-Console-Black.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1605821255&fm=webp&ixlib=react-9.1.5&q=90&w=140&h=90"
        price2="£600"
        number2="402"
        productTitle3="Microsoft Xbox Series S (US Plug) RRS-00001 White"
        productImage3="https://images.stockx.com/images/Microsoft-Xbox-Series-S-Console-White.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1605821391&fm=webp&ixlib=react-9.1.5&q=90&w=140&h=90"
        price3="£349"
        number3="86"
        productTitle4="NVIDIA EVGA GeForce RTX 3070 XC3 Ultra Gaming Graphics Card"
        productImage4="https://images.stockx.com/images/NVIDIA-EVGA-GeForce-RTX-3070-XC3-Ultra-Gaming-Graphics-Card-08G-P5-3755-KB-Black.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1613603418&fm=webp&ixlib=react-9.1.5&q=90&w=140&h=90"
        price4="£930"
        number4="67"
      />
      <FeaturedProducts 
        title="Recommended For You"
        productTitle="Sony PS5 PlayStation 5 (US Plug) Digital Edition Console 3005719 White"
        productImage="https://images.stockx.com/images/Sony-Playstation-5-Digital-Edition-Console-White.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1605716716&fm=webp&ixlib=react-9.1.5&q=90&w=140&h=90"
        price="£656"
        number="246"
        productTitle1="Sony PS5 PlayStation 5 (US Plug) Blu-ray Edition Console"
        productImage1="https://images.stockx.com/images/Sony-Playstation-5-Blu-Ray-Edition-Console-White.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1605716639&fm=webp&ixlib=react-9.1.5&q=90&w=140&h=90"
        price1="£695"
        number1="112"
        productTitle2="Microsoft Xbox Series X (US Plug) RRT-00001 Black"
        productImage2="https://images.stockx.com/images/Microsoft-Xbox-Series-X-Console-Black.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1605821255&fm=webp&ixlib=react-9.1.5&q=90&w=140&h=90"
        price2="£600"
        number2="194"
        productTitle3="New Balance x Miller Lite Shoezie Koozie White/Navy"
        productImage3="https://images.stockx.com/images/new-balance-nb624-x-miller-lite-shoezie-koozie-white-navy-ver2.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1623721620&fm=webp&ixlib=react-9.1.5&q=90&w=140&h=90"
        price3="£175"
        number3="874"
        productTitle4="Apple AirPods Pro (MWP22AM/A, MWP22ZM/A)"
        productImage4="https://images.stockx.com/images/Apple-Airpods-Pro-MWP22AM-A.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1608057644&fm=webp&ixlib=react-9.1.5&q=90&w=140&h=90"
        price4="£192"
        number4="245"
      />
      <FeaturedProducts 
        title="New Lowest Ask"
        productTitle="NVIDIA EVGA GeForce RTX 3080 XC3 Graphics Card"
        productImage="https://images.stockx.com/images/NVIDIA-EVGA-GeForce-RTX-3080-XC3-Graphics-Card-10G-P5-3885-KR.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1606749005&fm=webp&ixlib=react-9.1.5&q=90&w=140&h=90"
        price="£1,531"
        number="372"
        productTitle1="Funko Pop! Movies Space Jam A New Legacy Slyvester"
        productImage1="https://images.stockx.com/images/Funko-Pop-Movies-Space-Jam-A-New-Legacy-Slyvester-And-Tweety-Figure-1087.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1619818910&fm=webp&ixlib=react-9.1.5&q=90&w=140&h=90"
        price1="£31"
        number1="42"
        productTitle2="NVIDIA ASUS TUF GAMING GeForce RTX 3080 Graphics Card"
        productImage2="https://images.stockx.com/images/ASUS-TUF-Gaming-GeForce-RTX-3080-DirectX-12-TUF-RTX3080-10G-GAMING-10GB-320-Bit-GDDR6X-PCI-Express-40-HDCP-Ready-Video-Card.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1610464767&fm=webp&ixlib=react-9.1.5&q=90&w=140&h=90"
        price2="£1,668"
        number2="89"
        productTitle3="LEGO Star Wars Sith Infiltrator Set 75096 Black"
        productImage3="https://images.stockx.com/images/LEGO-Star-Wars-Sith-Infiltrator-Set-75096.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1613679862&fm=webp&ixlib=react-9.1.5&q=90&w=140&h=90"
        price3="£189"
        number3="95"
        productTitle4="Hebru Brantley x Wilson Flyboy Basketball Brand New"
        productImage4="https://images.stockx.com/images/Hebru-Brantley-Hebru-Brantley-x-Wilson-Flyboy-Basketball.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1606324318&fm=webp&ixlib=react-9.1.5&q=90&w=140&h=90"
        price4="£211"
        number4="84"
      />
      <Footer 
        sectionTitle="Air Jordan"
        sectionTitle2="Yeezy"
        sectionTitle3="Recent Updates"
        sectionTitle4="Popular Releases"
        sectionTitle5="Comic Books"
        sectionTitle6="Supreme"
        link1="Air Jordan 1"
        link2="Jordan Golf Shoes"
        link3="Air Jordan 3"
        link4="Air Jordan 11"
        link5="Air Jordan 11 Low"
        link6="Jordan 1 Mid"
        link7="Yeezy Boost 350"
        link8="Yeezy Boost 350 V2"
        link9="Yeezy Boost 700"
        link10="Yeezy 500"
        link11="Yeezy Slide"
        link12="Yeezy Foam RNNR"
        link13="The Drop List"
        link14="Nike Air Force | Buyer's Guide"
        link15="Air Jordan 11 Buyer's Guide"
        link16="XBox Series X"
        link17="PS5"
        link18="The Chrome Hearts Buyer's Guide"
        link19="Jordan 4 White Oreo"
        link20="LeBron 8 South Beach"
        link21="Nike Dunk High Game Royal"
        link22="Jordan 6 Gold Hoops"
        link23="Jordan 3 Racer Blue"
        link24="Nike Dunk Low Laser Orange"
        link25="X-Men"
        link26="Batman"
        link27="Spiderman"
        link28="Hulk"
        link29="Avengers"
        link30="Star Wars"
        link31="T-Shirts"
        link32="Accessories"
        link33="Supreme The North Face"
        link34="Bottoms"
        link35="Hoodies"
        link36="Supreme Nike"
      />
    </div>
  );
}

export default App;
