var e1_toggle = true;
              function toggleStyleSheet() {
              	var node = document.getElementById('e1_style');
              	node.parentNode.removeChild(node);
              	var sheet = document.createElement('style')
              	sheet.id = 'e1_style';
              	if(e1_toggle)
              		sheet.innerHTML = "#e1 {border: 2px solid black; background-color: blue;}";
              	 else
              		sheet.innerHTML = "#e1 {font-weight: bold; font-size: 115%; color: red;}";

              	document.body.appendChild(sheet);
              	e1_toggle = ! e1_toggle;
              	updateNumberOfStyleSheets();
              }
              function updateNumberOfStyleSheets(){
              	document.getElementById('numOfStyleSheets').innerHTML
              		= document.styleSheets.length;
              }