function run() {
  document.getElementById('output').innerHTML = document.querySelector('code').innerText;

  var code = document.querySelector('code').innerText;
  //html tags:
  //h1:
  while (code.includes('<h1>')) {
    code = code.replace("<h1>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >h1</span><span class ='angleBrackets' >&gt;</span>");
  }
  while (code.includes('<h1')) {
    code = code.replace("<h1", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >h1</span>");
  }
  while (code.includes('</h1>')) {
    code = code.replace("</h1>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >/h1</span><span class ='angleBrackets' >&gt;</span>");
  }
  //h2:
  while (code.includes('<h2>')) {
    code = code.replace("<h2>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >h2</span><span class ='angleBrackets' >&gt;</span>");
  }
  while (code.includes('<h2')) {
    code = code.replace("<h2", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >h2</span>");
  }
  while (code.includes('</h2>')) {
    code = code.replace("</h2>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >/h2</span><span class ='angleBrackets' >&gt;</span>");
  }
  //h3:
  while (code.includes('<h3>')) {
    code = code.replace("<h3>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >h3</span><span class ='angleBrackets' >&gt;</span>");
  }
  while (code.includes('<h3')) {
    code = code.replace("<h3", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >h3</span>");
  }
  while (code.includes('</h3>')) {
    code = code.replace("</h3>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >/h3</span><span class ='angleBrackets' >&gt;</span>");
  }
  //h4:
  while (code.includes('<h4>')) {
    code = code.replace("<h4>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >h4</span><span class ='angleBrackets' >&gt;</span>");
  }
  while (code.includes('<h4')) {
    code = code.replace("<h4", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >h4</span>");
  }
  while (code.includes('</h4>')) {
    code = code.replace("</h4>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >/h4</span><span class ='angleBrackets' >&gt;</span>");
  }
  //h5:
  while (code.includes('<h5>')) {
    code = code.replace("<h5>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >h5</span><span class ='angleBrackets' >&gt;</span>");
  }
  while (code.includes('<h5')) {
    code = code.replace("<h5", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >h5</span>");
  }
  while (code.includes('</h5>')) {
    code = code.replace("</h5>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >/h5</span><span class ='angleBrackets' >&gt;</span>");
  }
  //h6:
  while (code.includes('<h6>')) {
    code = code.replace("<h6>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >h6</span><span class ='angleBrackets' >&gt;</span>");
  }
  while (code.includes('<h6')) {
    code = code.replace("<h6", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >h6</span>");
  }
  while (code.includes('</h6>')) {
    code = code.replace("</h6>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >/h6</span><span class ='angleBrackets' >&gt;</span>");
  }
  //p:
  while (code.includes('<p>')) {
    code = code.replace("<p>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >p</span><span class ='angleBrackets' >&gt;</span>");
  }
  while (code.includes('<p')) {
    code = code.replace("<p", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >p</span>");
  }
  while (code.includes('</p>')) {
    code = code.replace("</p>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >/p</span><span class ='angleBrackets' >&gt;</span>");
  }
  //style:
  while (code.includes('<script>')) {
    code = code.replace("<script>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >script</span><span class ='angleBrackets' >&gt;</span>");
  }
  while (code.includes('<script')) {
    code = code.replace("<script", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >script</span>");
  }
  while (code.includes('</script>')) {
    code = code.replace("</script>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >/script</span><span class ='angleBrackets' >&gt;</span>");
  }
  //style:
  while (code.includes('<style>')) {
    code = code.replace("<style>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >style</span><span class ='angleBrackets' >&gt;</span>");
  }
  while (code.includes('<style')) {
    code = code.replace("<style", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >style</span>");
  }
  while (code.includes('</style>')) {
    code = code.replace("</scipt>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >/style</span><span class ='angleBrackets' >&gt;</span>");
  }
  //title:
  while (code.includes('<title>')) {
    code = code.replace("<title>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >title</span><span class ='angleBrackets' >&gt;</span>");
  }
  while (code.includes('<title')) {
    code = code.replace("<title", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >title</span>");
  }
  while (code.includes('</title>')) {
    code = code.replace("</title>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >/title</span><span class ='angleBrackets' >&gt;</span>");
    //document type:
    while (code.includes('<!DOCTYPE html>')) {
      code = code.replace("<!DOCTYPE html>", "<span class ='documentType' >&lt;!DOCTYPE html&gt;</span>");
    }
    //body:
    while (code.includes('<body>')) {
      code = code.replace("<body>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >body</span><span class ='angleBrackets' >&gt;</span>");
    }
    while (code.includes('<body')) {
      code = code.replace("<body", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >body</span>");
    }
    while (code.includes('</body>')) {
      code = code.replace("</body>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >/body</span><span class ='angleBrackets' >&gt;</span>");
    }
    //head:
    while (code.includes('<head>')) {
      code = code.replace("<head>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >head</span><span class ='angleBrackets' >&gt;</span>");
    }
    while (code.includes('<head')) {
      code = code.replace("<head", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >head</span>");
    }
    while (code.includes('</head>')) {
      code = code.replace("</head>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >/head</span><span class ='angleBrackets' >&gt;</span>");
    }
    //meta:
    while (code.includes('<meta>')) {
      code = code.replace("<meta>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >meta</span><span class ='angleBrackets' >&gt;</span>");
    }
    while (code.includes('<meta')) {
      code = code.replace("<meta", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >meta</span>");
    }
    //meta:
    while (code.includes('<link>')) {
      code = code.replace("<link>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >link</span><span class ='angleBrackets' >&gt;</span>");
    }
    while (code.includes('<link')) {
      code = code.replace("<link", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >link</span>");
    }
    //html:
    while (code.includes('<html>')) {
      code = code.replace("<html>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >html</span><span class ='angleBrackets' >&gt;</span>");
    }
    while (code.includes('</html>')) {
      code = code.replace("</html>", "<span class ='angleBrackets' >&lt;</span><span class ='tagName' >/html</span><span class ='angleBrackets' >&gt;</span>");
    }
    //attribute names:
    while (code.includes('name=')) {
      code = code.replace("name='", "<span class ='attributeName' >name</span><span class ='default' >=</span><span class ='attributeValue' >'");
    }
    while (code.includes('href=')) {
      code = code.replace("href='", "<span class ='attributeName' >href</span><span class ='default' >=</span><span class ='attributeValue' >'");
    }
    while (code.includes('rel=')) {
      code = code.replace("rel='", "<span class ='attributeName' >rel</span><span class ='default' >=</span><span class ='attributeValue' >'");
    }
    while (code.includes('src=')) {
      code = code.replace("src='", "<span class ='attributeName' >src</span><span class ='default' >=</span><span class ='attributeValue' >'");
    }
    while (code.includes('type=')) {
      code = code.replace("type='", "<span class ='attributeName' >rel</span><span class ='default' >=</span><span class ='attributeValue' >'");
    }
    while (code.includes('charset=')) {
      code = code.replace("charset='", "<span class ='attributeName' >charset</span><span class ='default' >=</span><span class ='attributeValue' >'");
    }
    while (code.includes('class=')) {
      code = code.replace("class='", "<span class ='attributeName' >class</span><span class ='default' >=</span><span class ='attributeValue' >'");
    }
    while (code.includes('spellcheck=')) {
      code = code.replace("spellcheck='", "<span class ='attributeName' >spellcheck</span><span class ='default' >=</span><span class ='attributeValue' >'");
    }
    while (code.includes('contenteditable=')) {
      code = code.replace("contenteditable='", "<span class ='attributeName' >contenteditable</span><span class ='default' >=</span><span class ='attributeValue' >'");
    }
    while (code.includes('id=')) {
      code = code.replace("id='", "<span class ='attributeName' >id</span><span class ='default' >=</span><span class ='attributeValue' >'");
    }
    while (code.includes('style=')) {
      code = code.replace("style='", "<span class ='attributeName' >style</span><span class ='default' >=</span><span class ='attributeValue' >'");
    }
    while (code.includes('title=')) {
      code = code.replace("title='", "<span class ='attributeName' >title</span><span class ='default' >=</span><span class ='attributeValue' >'");
    }
    while (code.includes('onclick=')) {
      code = code.replace("onclick='", "<span class ='attributeName' >onclick</span><span class ='default' >=</span><span class ='attributeValue' >'");
    }
    while (code.includes('onkeypress=')) {
      code = code.replace("onkeypress='", "<span class ='attributeName' >onkeypress</span><span class ='default' >=</span><span class ='attributeValue' >'");
    }
    while (code.includes('onkeydown=')) {
      code = code.replace("onkeydown='", "<span class ='attributeName' >onkeydown</span><span class ='default' >=</span><span class ='attributeValue' >'");
    }
    //random stuff that matters:
    while (code.includes("'>")) {
      code = code.replace("'>", "'</span><span class ='angleBrackets' >&gt;</span></span></span></span></span></span></span></span>");
    }
    //sets the innerHTML of the code block to the fixed version:
    document.querySelector('code').innerHTML = code;
    console.log(document.querySelector('code').innerText);
  }
}
run();//runs the highlight script when the page is opened automatically

//for run command:
let keysPressed = {};

document.addEventListener('keydown', (event) => {
  keysPressed[event.key] = true;
});

document.addEventListener('keydown', (event) => {
  keysPressed[event.key] = true;

  if (keysPressed['Control'] && event.key == 'x') {
    //custom command here
  }
});

document.onkeyup = function(e){
  document.getElementById('output').innerHTML = document.querySelector('code').innerText;
}

function openSettings(){
  console.log('settings opened');
  document.getElementById('settings').style.animation='fadeIn 1s';
  document.getElementById('settings').style.display='block';
}
//close settings:
document.getElementById('closeSettings').onmousedown = function(e) {document.getElementById('settings').style.animation='fadeOut 1s'; setTimeout(() => { document.getElementById('settings').style.display='none'; }, 1000);
}

function changeCSS(cssFile, cssLinkIndex) {

  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);

  document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}