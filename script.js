const form = document.getElementById("form")
const result = document.getElementById("result")
form.onsubmit = (event) =>{//обработчик события 
    event.preventDefault()
    let formData = new FormData(form)
    let formDataObject = Object.fromEntries(formData.entries());
    let m1 = (formDataObject.m1)
    let m2 = (formDataObject.m2)
    let R = (formDataObject.R)
    console.log(`m1 = ${m1}`)
    console.log(`m2 = ${m2}`)
    console.log(`R = ${R}`)
    let G = 6.67
    let F = G*((m1*m2)/(R*R))
    console.log(F)
    F = F/10000000
    
    result.innerText = `${F.toFixed(6)} * 10^36`

}

function formatFloat(src,digits) {
	var powered, tmp, result
	// make sure it is number
	if (isNaN(src))
		return src;
	// 10^digits
	var powered = Math.pow(10,digits);
	
	var tmp = src*powered;
	
	// round tmp
	tmp = Math.round(tmp);
	
	// get result
	var result = tmp/powered;
	return result;
}