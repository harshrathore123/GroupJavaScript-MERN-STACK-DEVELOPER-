const form = document.querySelector('.formdata');
    form.addEventListener('submit', (e) => {
        const card = form.querySelector('.cards');
        const img = card.querySelector('img');
        const h3 = card.querySelector('h3');
        const span = card.querySelector('span');

        // set hidden input values
        card.querySelector('input[name="productName"]').value = h3.innerText;
        card.querySelector('input[name="price"]').value = span.innerText;
        card.querySelector('input[name="imageurl"]').value = img.src;

        // optional: log to check
        console.log(img.src, h3.innerText, span.innerText);
    });