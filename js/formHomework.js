function billingFunction(){
	if (document.getElementById('same').checked){
		var copyName = document.getElementById('shippingName');
		var copyZip = document.getElementById('shippingZip');

		document.getElementById("billingName").value = copyName.value;
    	document.getElementById("billingZip").value = copyZip.value;
  	}
 	else {
    	document.getElementById("billingName").value = "";
    	document.getElementById("billingZip").value = "";
  	}		
}