var date = new Date(document.lastModified);
document.getElementById("date").innerHTML = date.getMonth() + 1 + "/" + date.getDate();