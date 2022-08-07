const testGS = () => {
    const url =
        'https://script.google.com/macros/s/AKfycbwNaWTrbRC-zzntXaf9xXfUNy0J_OyU8-BT0B_rQiLqzwog2xEPy8_nEZm72napcyBRrw/exec';

    fetch(url)
        .then((d) => {
            console.log(d);
            return d.json();
        })
        .then((d) => {
            document.querySelector('#app').textContent = d[0].status;
        });
};

document.querySelector('#btn1').addEventListener('click', testGS);
