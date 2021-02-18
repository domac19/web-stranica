<!DOCTYPE html>
<html>
<head>
<title>Web Stranica</title>
<meta charset="utf-8">
<link rel="stylesheet" href="dizajn.css" type="text/css">
</head> 
<body>
<script>              
// Get HTML head element 
        var head = document.getElementsByTagName('HEAD')[0];  
  
        // Create new link Element 
        var link = document.createElement('link'); 
  
        // set the attributes for link element  
        link.rel = 'stylesheet';  
      
        link.type = 'text/css'; 
      
        link.href = 'style.css';  
  
        // Append link element to HTML head 
        head.appendChild(link);   
<header>
    <nav>   
         <img src="IMG_20201208_122906.jpg" height="300px" width="250px">   
        <a href="web-stranica.html">Home &nbsp;&nbsp;</a>
        <a href="portfolio.html">Portfolio &nbsp;&nbsp;</a>
        <a href="contact.html">Contact &nbsp;&nbsp;</a>
        <a href="info.js">Info &nbsp;&nbsp;</a>        
    </nav>
</header>
<footer>
    <nav id="nav2">
        <a href="https://github.com/domac19"><img src="github_PNG15.png" height="100px" width="300px"></a>
        <a href="https://www.linkedin.com/in/domagoj-licitar/"><img src="linkedin-logo-copy.png" height="100px" width="100px"></a>
    </nav>
</footer>
</script>
</body>
</html>