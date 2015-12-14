function date_time(id) //shows to the user date, year and time
{
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
        document.getElementById(id).innerHTML = result;
        setTimeout('date_time("'+id+'");','1000');
        return true;
}

(function() {

	// Create input element for testing
	var inputs = document.createElement('input');
	
	// Create the supports object
	var supports = {};
	
	supports.autofocus   = 'autofocus' in inputs;
	supports.required    = 'required' in inputs;
	supports.placeholder = 'placeholder' in inputs;

	// Fallback for autofocus attribute
	if(!supports.autofocus) {
	
	}
	
	// Fallback for required attribute
	if(!supports.required) {
		
	}

	// Fallback for placeholder attribute
	if(!supports.placeholder) {
		
	}
	
	// Change text inside send button on submit
	var send = document.getElementById('contact-submit');
	if(send) {
		send.onclick = function () {
			this.innerHTML = '...Sending';
		}
	}

})();

var tags;

function loadSearches() //loads previously saved searches
{
	if (!sessionStorage.getItem("herePreviously"))
	{
		sessionStorage.setItem("herePreviously","true");
		document.getElementById("welcomeMessage").innerHTML="Welcome to Twitter Searches Site";
		
	}
	var length = localStorage.length; //number of key pairs
	tags=[]; 

	for (var i=0;i<length;++i) //load all keys
	{
		tags[i]=localStorage.key(i);
		
	}
	tags.sort();
	
	var markup = "<ul>"; //stores search link markup
	var url= "http://myhome.coloradomesa.edu/~ropuzey/web2/twitter.php";// link fails (cross-site scripting) 
	
	//list of links
	for (var tag in tags)
	{
		var query= url + localStorage.getItem(tags[tag]);
		markup+= "<li><span><a href= '" +query + "'>" +tags[tag] + "</a></span>" + "<input id= '" + tags[tag] + "' type='button' " + "value = 'Edit' onclick='editTag(id)'>" + "<input id= '" +tags[tag]+ "' type='button' "+"value= 'Delete' onclick='deleteTag(id)'>";
	}
	markup +="</ul>";
	document.getElementById("searches").innerHTML=markup;
}

function clearAllSearches() // deletes all key pairs from local storage
{
	localStorage.clear();
	loadSearches();
}

function saveSearch() // saves a new tagged search into local storage
{
	var query= document.getElementById("query");
	var tag= document.getElementById("tag");
	localStorage.setItem(tag.value, query.value);
	tag.value = "";
	query.value = "";
	loadSearches();
}

function deleteTag(tag) // deletes a specific key pair from local storage
{
	localStorage.removeItem(tag);
	loadSearches();
}

function editTag(tag) // displays existing tagged query for editing
{
	document.getElementById("query").value = localStorage[ tag ];
	document.getElementById("tag").value = tag;
	loadSearches();
}

function start() // register event handlers than load searches
{
	var saveButton = document.getElementById("saveButton");
	saveButton.addEventListener("click", saveSearch, false);
	var clearButton = document.getElementById("clearButton");
	clearButton.addEventListener("click", clearAllSearches, false);
	loadSearches();
}

window.addEventListener("load", start, false);

