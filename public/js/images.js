const invoiceImg = document.querySelector('#invoice-img');
let picUrl = '';
console.log('test')
//initialize widget memory for photo upload

var myWidget = cloudinary.createUploadWidget(
    {
        //TO DO: add in cloudinary once account setup complete
        cloudName: 'kirikiri',

        uploadPreset: 'invoicer',
    },
    (error, result) => {
        if (!error && result && result.event === 'success') {
            console.log('Congratulations on your image upload! Here is the information: ', result.info);
            picUrl = result.info.url;
            let img = document.createElement('img')
            img.src = result.info.url;
            document.querySelector(".img-container").appendChild(img)

        }
    }

);

document.getElementById('upload_widget_multiple').addEventListener(
    'click',
    function (e) {
        myWidget.open();
    },
    false
);

 // Need route for uploaded invoice img
 
const submit = async (e) => {
    e.preventDefault();
    const response = await fetch('' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.querySelector('image-name').value,
            pic: picUrl,
        }),
    });
    console.log(response);
    console.log(picUrl)
};

invoiceImg.addEventListener('submit', submit);