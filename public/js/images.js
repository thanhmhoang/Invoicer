const invoiceImg = document.querySelector('#invoice-img');
let picUrl = '';

var myWidget = cloudinary.createUploadWidget(
    {
        //TO DO: add in cloudinary once account setup complete
        cloudName: '',

        uploadPreset: '',
    },
    (error, result) => {
        if (!error && result && result.event === 'success') {
            console.log('Congratulations on your image upload! Here is the information: ', result.info);
            picUrl = result.info.url;
        }
    }

);

document.getElementById('upload_widget').addEventListener(
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
};

invoiceImg.addEventListener('submit', submit);