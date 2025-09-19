const express = require('express');
const app = express();
const PORT = 3003;
const path = require('path');

app.use('/IMAGE', express.static(path.join(__dirname, 'IMAGE')));


const Header = `<html>
        <head>
        <title>Express</title>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
        <style>
        /* Section 1 */
    /* Section 1 */
    *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    }
    body{
    background-color: black;
    }
.main {
    width: 1520px;
    height: 803px;
    background-color: black;
    position: relative;
    z-index: 1;
}
.navbar {
    position: absolute;
    z-index: 2;
    width: 1520px;
    top: 0;
    left: 0;
    height: 125px;
    background-color: black;
    opacity: 0.8;
}
.navbarlogoimage {
    background-color: white;
    height: 33px;
    position: relative;
    z-index: -1;
}
.orderfooddetail {
    width: 330px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 600px;
    height: 20px;
    color: rgb(92, 91, 91);
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
}
.orderfood {
    margin-top: 10px;
    display: flex;
    gap: 10px;
}
.contact {
    margin-top: 10px;
    display: flex;
    gap: 10px;
}
.socialmediasign {
    width: 160px;
    display: flex;
    margin-left: 1180px;
    height: 18px;
    gap: 10px;
    margin-top: -14px;
}
.logoimg {
    position: absolute;
    z-index: 1;
}
.logoimg img {
    margin-left: 235px;
    margin-top: -5px;
}
.navbarlogocoverimage {
    position: absolute;
    z-index: -1;
    top: 0;
    margin-left: 127px;
    height: 207px;
}
.navlinks {
    position: relative;
    z-index: 3;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    background-color: transparent;
}
.navlinks ul {
    list-style: none;
    display: flex;
    gap: 50px;
    font-family: 'Open Sans', sans-serif;
    font-size: 17px;
    color: #4b5563;
    align-items: center;
    margin-left: 430px;
    margin-top: 20px;
}
.navlinks ul li a {
    text-decoration: none;
    color: white;
    transition: color 0.3s ease;
}
.navlinks ul li a:hover {
    color: #ca8a04;
}
.tablebooking {
    padding: 5px 16px;
    border: 1px solid white;
    background-color: transparent;
    color: #ca8a04;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    transition: background-color 0.3s ease, color 0.3s ease;
}
.tablebooking:hover {
    background-color: #ca8a04;
    color: white;
}

/* Center Part of Header */
.content_on_header {
    height: 330px;
    width: 890px;
    position: absolute;
    z-index: 3;
    top: 300px;
    left: 314px;
    right: 315px;
}
.overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

}
.overlay h1 {
    color: white;
    font-family: 'Pacifico', cursive;
    font-weight: 300;
    font-size: 106px;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
    margin: -10;

}
.overlay p {
    color: white;
    font-size: 25px;
    font-family: 'Times New Roman', Times, serif;
    /* /* max-width: 48rem; */
    margin-top: 1rem;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
}
.overlay button {
    margin-top: 20px;
    padding: 0.375rem 1.25rem;
    border: 1px solid white;
    color: white;
    background: transparent;
    font-size: 14px;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}
    .overlay button a{
   text-decoration:none;
   color:white;
}
.overl button:hover {
    background-color: white;
    color: black;
}
        </style>
        </head>
        <body>
            <!-- Section 1 Header Part -->
        <div class="main">

        <!-- Main Image on Header -->
        <img src="/IMAGE/MainImage.png" alt="" width="1520" height="803">

        <!-- Navbar -->
        <div class="navbar">
            <!-- Navbar Logo Image -->
            <div class="navbarlogoimage">
                <!-- Navbar Detail -->
                <div class="orderfooddetail">
                    <div class="orderfood">
                        <img src="../Image/orderfood.png" alt="Clock icon for order foods 24/7">
                        <p>Order Foods 24/7</p>
                    </div>

                    <div class="contact">
                        <img src="../Image/callsign.png" alt="Phone icon">
                        <p>061 9876 5432</p>
                    </div>
                </div>

                <!-- Navbar Social Media Icons -->
                <div class="socialmediasign">
                    <img src="../Image/facebook.png" alt="Facebook icon">
                    <img src="../Image/google.png" alt="Google Plus icon">
                    <img src="../Image/twitter.png" alt="Twitter icon">
                    <img src="../Image/linkdin.png" alt="LinkedIn icon">
                    <img src="../Image/p.png" alt="Pinterest icon">
                    <img src="../Image/save.png" alt="Save icon">
                    <img src="../Image/whatsapp.png" alt="WhatsApp icon">
                    <img src="../Image/instagram.png" alt="Instagram icon">
                </div>

                <div class="logoimg">
                    <img src="../Image/Logo.png" alt="Food Restaurant logo">
                </div>
                <div class="navbarlogocoverimage">
                    <img src="../Image/LogoCover.png" alt="Logo cover design">
                </div>
            </div>

            <!-- Added navigation links container -->
            <nav class="navlinks">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Delivery</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Features</a></li>
                    <li><button class="tablebooking">Table Booking</button></li>
                </ul>
            </nav>
        </div>

        <!-- Center Part of Header -->
        <div class="content_on_header">
            <div class="overlay">
                <h1>Foody love</h1>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
                </p>
                <button><a href="/aboutus">Click here</a></button>
            </div>
        </div>
    </div>
        </body>
    </html>`;

const Aboutus = `<html>
<head>
<title>About Us</title>
<style>
/* Section 2 */
*{
margin:0;
padding:0;
box-sizing:border-box;
}
body{
background-color: black;
}
.about_us_top_container {
    height: 619px;
    background-image: url('/IMAGE/about_us_top_background.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: start;
    position: relative;
    z-index: -2;
    width: 1520px;
}
.about_us_left_images {
    height: 390px;
    width: 430px;
    position: relative;
    left: 160px;
    top: 110px;
    z-index: -1;
}
.about_us_left_backside_cover_image {
    height: 375px;
    width: 425px;
    position: absolute;
    z-index: 1;
}
.about_us_left_backside_image {
    height: 375px;
    width: 425px;
    position: absolute;
    z-index: 2;
}
.about_us_left_frontside_cover_image {
    left: 51px;
    top: 20px;
    height: 370px;
    width: 316px;
    position: absolute;
    z-index: 3;
}
.about_us_left_frontside_image {
    left: 51px;
    top: 20px;
    height: 370px;
    width: 316px;
    position: absolute;
    z-index: 4;
}
.about_us_right_content{
    height: 310px;
    width: 670px;
    position: relative;
    left: 235px;
    top: 110px;
    z-index: -1;
}

/* CONTENT STYLE */
.about_us_right_content h2 {
      font-family: 'Pacifico', cursive;
      font-size: 30px;
      margin-bottom: 4px;
      font-style: normal;
      font-weight: normal;
}
.about_us_right_content h1 {
        font-family: 'Times New Roman', Times, serif;
      font-size: 38px;
      font-weight: 30;
      margin-top: 0;
      margin-bottom: 16px;
}
.about_us_right_content p:first-of-type {
        font-family: 'Times New Roman', Times, serif;
      font-size: 15px;
      margin-top: 0;
      margin-bottom: 16px;
}
.about_us_right_content p:last-of-type {
              font-family: 'Times New Roman', Times, serif;
      font-size: 15px;
      margin-top: 0;
      margin-bottom: 32px;
}
.about_us_right_content button {
      background-color: #e89a2a;
      color: white;
      font-family: 'Times New Roman', Times, serif;
      font-size: 15px;
      padding: 8px 20px;
      border: none;
      border-radius: 5px;
      width: 149px;
      height: 48px;
      cursor: pointer;
}
.about_us_right_corner_image{
        position: absolute;
        right: 0;
        top: 270px;
}
.about_us_bottom_container{
    
    height: 785px;
    position: relative;
    top: -207px;
    z-index: -4;

}
.about_us_bottom_left_image{
    position: absolute;
    top: 332px;
    left: 165px;
    width:553px;
    height: 465px;
    background-image: url('../IMAGE/about_us_bottom_part_left_coverimage.png');
    z-index: 1;
}
.about_us_bottom_left_content{
    margin-top: 50px;
          max-width: 455px;
          margin-left: 40px;
          margin-right: 91px;
          margin-bottom: 55px;
      font-family: serif;
}
.about_us_bottom_left_content h2 {
      font-family: 'Pacifico', cursive;
      font-size: 28px;
      font-weight: 400;
      margin-bottom: 4px;
      margin-top: 0;
}
.about_us_bottom_left_content h1 {
      font-size: 35px;
      font-weight: 100;
      margin-top: 0;
      margin-bottom: 12px;
}
.about_us_bottom_left_content #content_first_para {
      font-size: 0.875rem;
      margin-top: 35px;
      margin-bottom: 21px;
}
.about_us_bottom_left_content #content_second_para{
        font-size: 0.875rem;
        
}
.about_us_bottom_left_content button {
      background-color: #d97706;
      color: white;
      font-size: 15px;
      font-family: 'Times New Roman', Times, serif;
      padding: 8px 20px;
      border: none;
      width: 130px;
      height: 38px;
      border-radius: 0.375rem;
      cursor: pointer;
      margin-top: 35px;
}
.about_us_bottom_right_image{
    position: absolute;
    top: 295px;
    left: 620px;
    width: 670px;
    height: 560px;
    background-image: url('../IMAGE/about_bottom_part_right_coverimage.png');
}
.about_us_left_bottom_corner_image{
    position: absolute;
    bottom: -400px;
    left: -40px;  
    z-index: 7;  
}
</style>
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">

</head>
<body>
    <!-- Section 2 Top Part -->
    <div class="about_us_top_container">
        <div class="about_us_left_images">
            <div class="about_us_left_backside_cover_image">
                <img src="/IMAGE/about_top_left_baackside_cover_image.png" alt="">
            </div>
            <div class="about_us_left_backside_image">
                <img src="/IMAGE/about_top_left_baackside_image.png" alt="">
            </div>
            <div class="about_us_left_frontside_cover_image">
                <img src="/IMAGE/about_top_left_frontside_cover_image.png" alt="">
            </div>
            <div class="about_us_left_frontside_image">
                <img src="/IMAGE/about_top_left_frontside_image.png" alt="">
            </div>
        </div>
        <div class="about_us_right_content">
            <h2>About us</h2>
            <h1>WE ARE TASTY</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's
                stan
            </p>
            <p>
                dard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to
                make a
                type specimen book. It has survived not only five centuries, but also the leap into electronic typeset-
                tingdard
                dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a
                type
                specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
            </p>
            <button>Click here</button>
        </div>
        <div class="about_us_right_corner_image">
            <img src="/IMAGE/about_bottom_right_corner_image.png" alt="">
        </div>
    </div>

    <!-- Section 2 Bottom Part -->
    <div class="about_us_bottom_container">
        <img src="/IMAGE/bottom_part_background.png" alt="" width="1520">
        <div class="about_us_bottom_left_image">
            <div class="about_us_bottom_left_content">
                <h2>Special Recipes</h2>
                <h1>TASTE OF PRECIOUS</h1>
                <p id="content_first_para">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's
                    stan
                </p>
                <p id="content_second_para">
                    dard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it
                    to make a
                    type specimen book. It has survived not only five centuries, but also the leap into electronic
                    type-settingdard
                    dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to
                    make a type
                    specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting
                </p>
                <button>Click here</button>
            </div>
        </div>
        <div class="about_us_bottom_right_image">
            <img src="/IMAGE/about_us_bottom_part_right_image.png" alt="" height="560" width="670">
        </div>

        <div class="about_us_left_bottom_corner_image">
            <img src="/IMAGE/about_us_or_experience_btwstart_image.png" alt="">
        </div>
    </div>
</body>
</html>`;

app.get('/', (req, res) => {
    res.end(`${Header}`);
})

app.get('/aboutus',(req,res)=>{
    res.end(`${Aboutus}`);
})

app.listen(PORT, () => {
    console.log(`Connection Established on http://localhost:${PORT}`);
})