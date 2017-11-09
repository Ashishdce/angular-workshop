const functions = require('firebase-functions');
const express = require('express');
const request = require('request');
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const url = 'https://pwa-demo-25ad5.firebaseio.com';
const app = express();
app.use(cors());
app.use(bodyParser.json());
const serviceAccount = {
    'type': 'service_account',
    'project_id': 'pwa-demo-25ad5',
    'private_key_id': '9c63b43806008cf4766cc4642b9e66474771ea3d',
    'private_key': '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDVqfKbHyO5fyug\n9DA9oZ3RQjrErGC4kFqPbwHhONXnOH3FJa5cLGrYqh2Elvpb21cux1Cj7D4RJbuw\nByhpk9OcqaMevfZtzX5mMZmT7ue1dZjyV+C8VtwsHvNybJtag+Kvc0h0PI8CqMNb\nxAGc9nxtMln9LFHip45/KFfopAw0rajU29dUGeKuYCnJVObgMRr12R6hPGP56DFJ\nwsB5Lxb78IhzDG0f8ZDtQzMuZqddGN1i3A2pVHz0DJtD2+N403h8fhfo4Vc/MVLs\nFAiNpFmzg/Nm1TLwRz0TxeyuWcPZLlX+1aGwLbHrnWo8Mo4mOvFkuLoadJybV9On\nc2+xPbEPAgMBAAECggEAD+4NSqJzi+jJgcUNnwgLLPxb8ajhHIbqsZH3A780jM9/\nP7EeWFHuyhDuMCH/hX9gzHngxG/1yq/TrVKYoT0mbveOKVnEDeNfHqhpCQisBDFB\n13j/e5tFlrvcrmB0OWHm3JTi8djyrUyUJXsuHEabopqOmgZxY82BSBq5FH0SnzoG\nap7/RdK0N+rgVgyCD+zNyyBtMNKYpRLvrml6vkSxxGJaBaPXb1wgvgDzDZQAg+DY\nsubnstzIuNoszrylDrnLYgHRlAPfS+h8quhojuqKKHCiYyf7NmQsrSgQrAMCo7br\nFlsFXZ6eMj7ESzM8UpkekoGU2Hh8uYx3oRpzw19O0QKBgQD2v49iWKNF2cka/KjG\nKA0G3QoB4ykSA9HZA0ZM2p2TBFewuYYAdR7lb9bwonu8Gb33MD2BCsggbtlrZgRw\nZ9y+G6h6RxfnQAFPVIXuT/Sx7MF7TcyrmKusJrlGMjDmUwWZHfDwnnXfoRTK9D2M\n/zcBAH17wXzVVYAG1ScIOKeUXwKBgQDdrNK8j246Q7OXAdv3IbO17uaVyHOg6sQl\nBFTwd5vg8V1j9pZbUJB1HeRb15Qm0FV7MtdG1eb2LCwocKzJS01c0uaGgl8JnYVv\nwPV5rMescMARb7Kp6168CWGbBANsOLgzH5oSngSjkpoX2O9ls/JD1oSuCZw6rMIy\nOVwM6RihUQKBgQDHDJkaeO6ddqaowpFT6RM5Ki7cfueuxK4QJngbn2/mHWawBbl3\nvQODiskVrb2rbAi204+J/aybnVB/Nvj1xJNqON2cZqV9w0BLQqAYMx/uOFOMqKIm\n+y3h3gsv+WVBKFAnyOOI+AuWr1cashTFHUy93itcHiYZ4rM4z9KA61MkeQKBgGst\nEb6FAmA9N2k9RuKXctH1rZqhjfYxS6AyFfclfUImsGaSZGPF8fIN/8i/1Ctn8sxb\n6mWfKcm/1aG/yGqSc9b7SOWjxttZQ5iijIzFksy2vsYvYQxydh0n0/8k05rRWY2u\nK8nwiIGlcccx5Z0ggXN3FjMnBlgACuxJe03qrTPhAoGAcZJG4HRy3+eaFR1y23yL\n+cr/aVmnZisyV8aHrlzTpfBbbng5dYq9lxzvlE/X/i14Dr+ucjtxfW1tfxF9XUVb\nxEZjVxiltvqHPE7N/BDzBBahM2jsGN0zy1phoNioyVYU+GPeYBMC0llDlsVJ+V/y\nXw3BCDbLqW6+53g7EL/L584=\n-----END PRIVATE KEY-----\n',
    'client_email': 'firebase-adminsdk-7yycn@pwa-demo-25ad5.iam.gserviceaccount.com',
    'client_id': '111125399000929994438',
    'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
    'token_uri': 'https://accounts.google.com/o/oauth2/token',
    'auth_provider_x509_cert_url': 'https://www.googleapis.com/oauth2/v1/certs',
    'client_x509_cert_url': 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7yycn%40pwa-demo-25ad5.iam.gserviceaccount.com'
};
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: url
});
const db = admin.database();
const posts = db.ref('posts');
app.get('/posts', (req, res) => {
    posts.once('value', (snapshot) => {
        res.send(snapshot.val());
        res.end();
    }, err => {
        res.send(400, {
            error: 'Cant Fetch Data'
        });
    });
});
app.post('/posts', (req, res, next) => {
    const obj = JSON.parse(req.body);
    const newObj = posts.push();
    newObj.set(obj, function (error) {
        if (error) {
            res.send(error);
        }
        else {
            res.json({
                'message': 'OK'
            });
            next();
        }
    });
});
exports.pwaServer = functions.https.onRequest(app);
