import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(() => {
      registerServiceWorker('sw');
    })
    .catch(err => console.log(err));

function registerServiceWorker(swName: string) {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register(`/${swName}.js`)
          .then(reg => {
            console.log('[App] Successful service worker registration', reg);
          })
          .catch(err =>
            console.error('[App] Service worker registration failed', err)
          );
      } else {
        console.error('[App] Service Worker API is not supported in current browser');
      }
      if (!('Notification' in window)) {
        console.log('This browser does not support notifications!');
        return;
      }
      Notification.requestPermission(function(status) {
        console.log('Notification permission status:', status);
        if (Notification['permission'] === 'granted') {
          navigator.serviceWorker.getRegistration().then(function(reg) {
            // TODO 2.4 - Add 'options' object to configure the notification
            const options = {
              body: 'New Message from ',
              icon: 'images/notification-flat.png',
              vibrate: [100, 50, 100],
              data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
              },
              // TODO 2.5 - add actions to the notification
              actions: [
                {action: 'explore', title: 'Go to the site',
                  icon: 'images/checkmark.png'},
                {action: 'close', title: 'Close the notification',
                  icon: 'images/xmark.png'},
              ]
              // TODO 5.1 - add a tag to the notification
            };
            reg.showNotification('Hello world!', options);
          });
        }
      });
}




