<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">iOS</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <img alt="MacOS" :src=" iOSImage" />
        <ion-card-content class="ion-text-justify">
          iOS is a mobile operating system developed by Apple Inc. exclusively for its hardware 
          devices, including the iPhone, iPad, and iPod Touch. It was first introduced on January 9, 
          2007, with the launch of the original iPhone.
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
import iOSImage from '@/assets/img/iOS/iOS.jpg';
import IphoneOS1 from '@/assets/img/iOS/iphoneos1.jpg';
import IphoneOS2 from '@/assets/img/iOS/iphoneos2.png';
import IphoneOS3 from '@/assets/img/iOS/iphoneos3.png';
import iOS4 from '@/assets/img/iOS/ios4.png';
import iOS5 from '@/assets/img/iOS/ios5.png';
import iOS6 from '@/assets/img/iOS/ios6.png';
import iOS7 from '@/assets/img/iOS/ios7.jpg';
import iOS8 from '@/assets/img/iOS/ios8.png';
import iOS9 from '@/assets/img/iOS/ios9.png';
import iOS10 from '@/assets/img/iOS/ios10.png';
import iOS11 from '@/assets/img/iOS/ios11.jpg';
import iOS12 from '@/assets/img/iOS/ios12.png';
import iOS13 from '@/assets/img/iOS/ios13.png';
import iOS14 from '@/assets/img/iOS/ios14.jpg';
import iOS15 from '@/assets/img/iOS/ios15.jpg';
import iOS16 from '@/assets/img/iOS/ios16.jpg';
import iOS17 from '@/assets/img/iOS/ios17.jpg';

const timeline = [
  {
    name: 'iPhone OS 1',
    year: '2007',
    text: 'The first version of iOS and the only one called iPhone OS, debuted in 2007 with the original iPhone. It was based on the Mac OS X kernel and was designed specifically for the iPhone. It supported only native apps and did not have an App Store. It also did not support third-party apps, so developers could only build web apps that ran in Safari.',
    image: IphoneOS1,
  },
  {
    name: 'iPhone OS 2',
    year: '2008',
    text: 'The second version of iOS, released in 2008, was the first one to be called iOS. It was also the first version to support third-party apps through the App Store. It also introduced push email, the ability to save images from emails, the ability to download podcasts wirelessly, and the ability to download iTunes songs over the air.',
    image: IphoneOS2
  },
  {
    name: 'iPhone OS 3',
    year: '2009',
    text: 'The third version of iOS, released in 2009, added copy and paste, MMS, Spotlight search, and the ability to tether the iPhone to a computer.',
    image: IphoneOS3
  },
  {
    name: 'iOS 4',
    year: '2010',
    text: 'The fourth version of iOS, released in 2010, added multitasking, FaceTime, and the ability to change the home screen wallpaper.',
    image: iOS4
  },
  {
    name: 'iOS 5',
    year: '2011',
    text: 'The fifth version of iOS, released in 2011, added iCloud, iMessage, and the Notification Center.',
    image: iOS5
  },
  {
    name: 'iOS 6',
    year: '2012',
    text: 'The sixth version of iOS, released in 2012, added Apple Maps, Passbook, and the ability to make FaceTime calls over cellular networks.',
    image: iOS6
  },
  {
    name: 'iOS 7',
    year: '2013',
    text: 'The seventh version of iOS, released in 2013, was the first one to be designed by Jony Ive. It also added Control Center, AirDrop, and iTunes Radio.',
    image: iOS7
  },
  {
    name: 'iOS 8',
    year: '2014',
    text: 'The eighth version of iOS, released in 2014, added Apple Pay, Family Sharing, and iCloud Drive.',
    image: iOS8
  },
  {
    name: 'iOS 9',
    year: '2015',
    text: 'The ninth version of iOS, released in 2015, added Apple News, Apple Music, and the ability to use Siri without plugging in the device.',
    image: iOS9
  },
  {
    name: 'iOS 10',
    year: '2016',
    text: 'The tenth version of iOS, released in 2016, added the ability to delete stock apps, raise to wake, and the ability to use Siri with third-party apps.',
    image: iOS10
  },
  {
    name: 'iOS 11',
    year: '2017',
    text: 'The eleventh version of iOS, released in 2017, added a new Control Center, a new App Store, and the Files app.',
    image: iOS11
  },
  {
    name: 'iOS 12',
    year: '2018',
    text: 'The twelfth version of iOS, released in 2018, added Screen Time, Siri Shortcuts, and Group FaceTime.',
    image: iOS12
  },
  {
    name: 'iOS 13',
    year: '2019',
    text: 'The thirteenth version of iOS, released in 2019 with the iPhone 11, added Dark Mode, Sign in with Apple, and the ability to swipe to type.',
    image: iOS13
  },
  {
    name: 'iOS 14',
    year: '2020',
    text: 'The fourteenth version of iOS, released in 2020 with the iPhone 12, added widgets, the App Library, and the ability to change the default browser and email apps.',
    image: iOS14
  },
  {
    name: 'iOS 15',
    year: '2021',
    text: 'The fifteenth version of iOS, released in 2021 with the iPhone 13, added Focus, Live Text, and SharePlay.',
    image: iOS15
  },
  {
    name: 'iOS 16',
    year: '2022',
    text: 'The sixteenth version of iOS, released in 2022 with the iPhone 14, added widgets on the lock screen, the ability to change the default music app, and the ability to change the default video app.',
    image: iOS16
  },
  {
    name: 'iOS 17',
    year: '2023',
    text: 'The seventeenth version of iOS, released in 2023 with the iPhone 15, added the ability to change the default browser app, the ability to change the default email app, and the ability to change the default maps app.',
    image: iOS17
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
