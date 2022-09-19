console.log("hello world");

const http = require('http');
const hostnam = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 2000;
    res.setHeader('Content-Type','text/html');
    // res.end('Hellow World');
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event And Listening in JavaScript</title>
    <style>
        #btn{
            padding: 10px 14px;
            border-radius: 30px solid black;
            color: blanchedalmond;
            font-weight: bold;
            background-color: red;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="contaier">

        <h1>This is a Heading</h1>
        <p id="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum dolorum, obcaecati aliquid nisi distinctio maxime placeat molestiae impedit magni aliquam, quis beatae iste pariatur qui harum corrupti. At nihil minima nulla ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus quam odit ipsum. Reiciendis eius corporis cumque, dolorum similique autem laudantium vero numquam accusamus nulla animi omnis veniam architecto odit sunt rem soluta possimus!</p>
    </div>

    <button id="btn" onclick="toggleHide()">Show/Hide</button>
    
</body>
<script>
    let para=document.getElementById('para');
    para.addEventListener('mouseover',function run(){
        console.log('Mouse Inside')

    });

    para.addEventListener('mouseout',function run(){
        console.log('Mouse now went outside')
    });


    function toggleHide(){
        let btn=document.getElementById('btn');
        let para=document.getElementById('para');
        if(para.style.display !='none'){
            para.style.display='none';
        }
        else{
            para.style.display='block';
        }
    }
    
</script>
</html>`);
});

server.listen(port, hostnam, () => {
    console.log(`server running at http://${hostnam}:${port}/`);

});