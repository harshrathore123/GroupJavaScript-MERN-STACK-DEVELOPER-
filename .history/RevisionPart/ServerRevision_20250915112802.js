const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/html"
    })
    if(req.url == '/'){
        res.end(
            `<html>
            <head>
            <title>Welcome Page</title>
            <style>
            *{
                margin:0px;
                padding:0px;
                box-sizing:border:box;
            }
            body{
            background-image:url('https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-thatguycraig000-1563356.jpg&fm=jpg');
            background-size:cover;
            }
            a{
            font-size:30px;
            text-align:center;
            margin-left:670px;
            color:black;
            }
            // .container{
            // position:absolute;
            // border:20px solid red;
            // top:0;
            // left:0;
            // }
            </style>
            </head>
            <body>
            <div class="container"></div>
            <h1 style="color:black;text-align:center;margin-top:590px;">Welcome To Home Page</h1>
            <a href="/user">Go to User Page</a>
            </body>
            </html>`
        )
    }
    else if(req.url === '/user'){
        res.end(
            `<html>
            <head>
            <title>User Page</title>
            <style>
            *{
                margin:0px;
                padding:0px;
                box-sizing:border:box;
            }
            body{
            background-image:url('https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-thatguycraig000-1563356.jpg&fm=jpg');
            background-size:cover;
            }
            a{
            font-size:30px;
            text-align:center;
            margin-left:670px;
            color:black;
            }
            // .container{
            // position:absolute;
            // border:20px solid red;
            // top:0;
            // left:0;
            // }
            </style>
            </head>
            <body>
            <div class="container"></div>
            <h1 style="color:black;text-align:center;margin-top:590px;">Welcome To User Page</h1>
            <a href="/">Go to Home Page</a>
            </body>
            </html>
            `)
    }
})

server.listen(3000,()=>{
    console.log(`Connection Established on http://localhost:3000`);
})