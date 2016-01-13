
var sloganTarget = document.getElementById('slogan');

function selectRandomSlogan () {
	var selection = Math.floor(Math.random() * slogans.length);
	return slogans[selection];
}

function setChar (target, slogan, charAt) {
	charAt = charAt || 0;

	var text = target.innerText;
	var length = text.length > slogan.length ? text.length : slogan.length;
	var first = text.substr(0, charAt);
	var second = text.substr(charAt + 2);
	var char = charAt > slogan.length ? '' : slogan[charAt];

	target.innerText = first + char + '#' + second;

	if (++charAt < length) {
		setTimeout(function () {
			setChar(target, slogan, charAt);
		}, 30);
	}
}

function setRandomSlogan (target) {
	var slogan = selectRandomSlogan();
	setChar(target, slogan);
}

setRandomSlogan(sloganTarget);
