var color = 'blue';

const fetchColorAndSetButton = function (callback) {
    const req = new XMLHttpRequest();
    req.addEventListener("load", function () {
        try {
            const color = JSON.parse(this.responseText).color;
            callback(color);
        } catch (error) {
            console.error('Error parsing color:', error);
            callback('blue');
        }
    });
    req.open("GET", "/getColor");
    req.send();
};

fetchColorAndSetButton(setButtonColor);