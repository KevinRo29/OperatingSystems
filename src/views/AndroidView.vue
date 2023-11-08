<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Android</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card class="ion-text-center">
        <ion-row>
          <ion-col size="12">
            <img alt="MacOS" :src="AndroidImage" />
          </ion-col>
        </ion-row>
        
        <ion-card-content class="ion-text-justify">
          Android is a popular mobile operating system based on the Linux kernel and developed by 
          the Open Handset Alliance, a consortium of developers led by Google. It was officially 
          unveiled on November 5, 2007.
        </ion-card-content>
      </ion-card>

      <ion-text class="ion-text-center" color="dark">
        <h1>Timeline</h1>
      </ion-text>

      <ion-card>
        <ion-card-content class="ion-no-padding ion-margin-horizontal">
          <ion-row class="ion-margin-vertical">
            <ion-col v-for="(event, index) in timeline" :key="index" size="6">
              <ion-text class="ion-text-left" color="dark" @click="openModal(event.image)">
                <p>{{ event.year }}: {{ event.name }}</p>
              </ion-text>
            </ion-col>
          </ion-row>
        </ion-card-content>
      </ion-card>
    </ion-content>

    <ion-modal :is-open="showModal">
      <ion-content class="ion-text-center">
        <ion-card>
          <ion-text>
            <h1>{{ timeline.find(event => event.image === selectedImage)?.name }}</h1>
          </ion-text>
          <img :src="selectedImage" alt="Operating System" />
          <ion-text class="ion-text-justify">
            <p>{{ timeline.find(event => event.image === selectedImage)?.text }}</p>
          </ion-text>
        </ion-card>
        <ion-button class="ion-margin-horizontal" color="dark" expand="block" @click="closeModal">Close</ion-button>
      </ion-content>
    </ion-modal>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonText, IonRow, IonModal, IonButton, IonCol } from '@ionic/vue';
import AndroidImage from '@/assets/img/Android/android.png';
import CamerasOS from '@/assets/img/Android/cameras.jpg';
import GoogleAcquired from '@/assets/img/Android/googleacquired.jpg';
import AndroidBeta from '@/assets/img/Android/androidbeta.jpg';
import Android1 from '@/assets/img/Android/android1.png';
import Android1_1 from '@/assets/img/Android/android11.jpg';
import Android1_5 from '@/assets/img/Android/android15.jpg';
import Android1_6 from '@/assets/img/Android/android16.png';
import Android2_0 from '@/assets/img/Android/android20.jpg';
import Android2_2 from '@/assets/img/Android/android22.png';
import Android2_3 from '@/assets/img/Android/android23.png';
import Android3_0 from '@/assets/img/Android/android30.png';
import Android4_0 from '@/assets/img/Android/android40.png';
import Android4_1 from '@/assets/img/Android/android41.png';
import Android4_4 from '@/assets/img/Android/android44.jpg';
import Android5_0 from '@/assets/img/Android/android50.png';
import Android6_0 from '@/assets/img/Android/android60.png';
import Android7_0 from '@/assets/img/Android/android70.png';
import Android8_0 from '@/assets/img/Android/android80.jpg';
import Android9_0 from '@/assets/img/Android/android90.gif';
import Android11 from '@/assets/img/Android/android110.jpg';
import Android12 from '@/assets/img/Android/android120.jpg';
import Android13 from '@/assets/img/Android/android130.jpg';
import Android14 from '@/assets/img/Android/android140.jpg';

const timeline = [
  {
    name: 'Cameras OS',
    year: '2003',
    text: 'Android Inc. is founded by Andy Rubin, Rich Miner, Nick Sears, and Chris White to develop an operating system for digital cameras',
    image: CamerasOS
  },
  {
    name: 'Android Inc. Acquired',
    year: '2005',
    text: 'Google acquires Android Inc. and continues the development of the operating system under the newly-formed Open Handset Alliance (OHA), a group of companies committed to advancing open standards for mobile devices',
    image: GoogleAcquired
  },
  {
    name: 'Android Beta',
    year: '2007',
    text: 'The first beta version of the Android Software Development Kit (SDK) is released',
    image: AndroidBeta
  },
  {
    name: 'Android 1',
    year: '2008',
    text: 'The first commercial version, Android 1.0, is released. Features include a web browser, email support, and the ability to install third-party apps',
    image: Android1
  },
  {
    name: 'Android 1.1',
    year: '2009',
    text: 'Android 1.1 Petit Four is released. It includes minor changes, such as support for saving attachments from messages and the ability to upload videos to YouTube',
    image: Android1_1
  },
  {
    name: 'Cupcake',
    year: '2009',
    text: 'Android 1.5 Cupcake introduces an on-screen keyboard, video playback, and third-party widgets for the home screen',
    image: Android1_5
  },
  {
    name: 'Donut',
    year: '2009',
    text: 'Android 1.6 Donut adds support for CDMA networks like Verizon, Sprint, and US Cellular, as well as text-to-speech support, a search function for the phone, and support for multi-touch',
    image: Android1_6
  },
  {
    name: 'Eclair',
    year: '2009',
    text: 'Android 2.0 Eclair introduces Google Maps Navigation, which provides turn-by-turn navigation, as well as improvements to the browser, camera, and a redesigned UI',
    image: Android2_0
  },
  {
    name: 'Froyo',
    year: '2010',
    text: 'Android 2.2 Froyo adds support for high-density screens and new sensors like gyroscope and barometer, as well as new app features like Adobe Flash support and cloud-to-device messaging',
    image: Android2_2
  },
  {
    name: 'Gingerbread',
    year: '2010',
    text: 'Android 2.3 Gingerbread adds support for NFC (Near Field Communication), which allows users to perform a number of tasks such as making payments with their phone and swiping their devices to share data',
    image: Android2_3
  },
  {
    name: 'Honeycomb',
    year: '2011',
    text: 'Android 3.0 Honeycomb is the first tablet-only Android update, and introduced a new “holographic” UI theme and an interaction model that built on the card metaphor introduced in Ice Cream Sandwich',
    image: Android3_0
  },
  {
    name: 'Ice Cream Sandwich',
    year: '2011',
    text: 'Android 4.0 Ice Cream Sandwich is the first version of the OS that was designed with both smartphones and tablets in mind. It also introduced a number of other features, such as Face Unlock, which uses facial recognition to unlock the phone',
    image: Android4_0
  },
  {
    name: 'Jelly Bean',
    year: '2012',
    text: 'Android 4.1 Jelly Bean is the first version released under the codename after Google abandoned dessert names in favor of alphabetical names for major releases. It was also the first version to offer Google Now and the ability to unlock a phone with its owner’s face',
    image: Android4_1
  },
  {
    name: 'KitKat',
    year: '2013',
    text: 'Android 4.4 KitKat was the first version of the OS to ship with a codename that was not a dessert, a name that was retained for subsequent releases. It featured a new UI design language called Material Design, which was built around the concepts of real-world tactile objects and bold typography',
    image: Android4_4
  },
  {
    name: 'Lollipop',
    year: '2014',
    text: 'Android 5.0 Lollipop was a major overhaul for Android, and some would say it was the biggest change to the OS ever. It marked the first time Google caught up to Apple in terms of aesthetics, as prior versions were much more utilitarian than Apple’s offering',
    image: Android5_0
  },
  {
    name: 'Marshmallow',
    year: '2015',
    text: 'Android 6.0 Marshmallow was another refinement to the UI introduced with Lollipop, and focused on improving the overall user experience by making things faster, more efficient, and easier to find',
    image: Android6_0
  },
  {
    name: 'Nougat',
    year: '2016',
    text: 'Android 7.0 Nougat introduced a split-screen display mode that lets you run two apps side-by-side, the ability to run apps without installing them on your device, and a new JIT compiler to speed up apps',
    image: Android7_0
  },
  {
    name: 'Oreo',
    year: '2017',
    text: 'Android 8.0 Oreo introduced Project Treble, a new low-level arrangement that makes updating a lot easier. It also introduced an image-in-image mode, which lets you shrink apps like YouTube and Netflix down into little windows',
    image: Android8_0
  },
  {
    name: 'Pie',
    year: '2018',
    text: 'Android 9.0 Pie introduced a new gesture-based navigation system, a redesigned Quick Settings, a new volume slider, and an adaptive battery feature that uses machine learning to prioritize system resources',
    image: Android9_0
  },
  {
    name: 'Android 11',
    year: '2020',
    text: 'Android 11 is the eleventh major release and the 18th version of the Android mobile operating system. It was released on September 8, 2020. Alphabetical release names, based on desserts for major Android versions, were discontinued as of Android 10; therefore the OS was immediately branded as "Android 11".',
    image: Android11
  },
  {
    name: 'Android 12',
    year: '2021',
    text: 'Android 12 is the twelfth major release and the 19th version of the Android mobile operating system. The first beta was released on May 18, 2021. The final release is scheduled for release in Q3 2021.',
    image: Android12
  },
  {
    name: 'Android 13',
    year: '2022',
    text: 'Android 13 is the thirteenth major release and the 20th version of the Android mobile operating system. The first beta is expected to be released in May 2022. The final release is scheduled for release in Q3 2022.',
    image: Android13
  },
  {
    name: 'Android 14',
    year: '2023',
    text: 'Android 14 is the fourteenth major release and the 21st version of the Android mobile operating system. The first beta is expected to be released in May 2023. The final release is scheduled for release in Q3 2023.',
    image: Android14
  }
]

const showModal = ref(false);
const selectedImage = ref('');

const openModal = (image: string) => {
  selectedImage.value = image;
  showModal.value = true
};

const closeModal = () => {
  showModal.value = false;
  selectedImage.value = '';
};
</script>
