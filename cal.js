function insert(num) {
    document.form.textview.value = document.form.textview.value + num
}

function equal() {
    var ex = document.form.textview.value;
    if (ex) {
        document.form.textview.value = eval(ex);
    }

}

function clean() {
    document.form.textview.value = ""
}

function back() {
    var ex = document.form.textview.value;
    document.form.textview.value = ex.substring(0, ex.length - 1);

}

function cos(form) {
	document.form.textview.value = Math.cos(document.form.textview.value);
}

function sin(form) {
	document.form.textview.value = Math.sin(document.form.textview.value);
}

function tan(form) {
	document.form.textview.value = Math.tan(document.form.textview.value);
}

function sqrt(form) {
	document.form.textview.value = Math.sqrt(document.form.textview.value);
}

function ln(form) {
	document.form.textview.value = Math.log(document.form.textview.value);
}

function expo(form) {
	document.form.textview.value = Math.exp(document.form.textview.value);
}