<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Windows Phone</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card class="ion-text-center">
        <img alt="MacOS" :src=" WindowsPhoneImage" />
        <ion-card-content class="ion-text-justify">
          Windows Phone was a mobile operating system developed by Microsoft Corporation for smartphones. 
          It was the successor to Windows Mobile and aimed to provide a more modern and user-friendly 
          experience.
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
import WindowsPhoneImage from '@/assets/img/WindowsPhone/windowsphone.png';
import WindowsPhoneCE from '@/assets/img/WindowsPhone/windowsce.jpeg';
import WindowsPhone7 from '@/assets/img/WindowsPhone/windowsphone7.jpg';
import WindowsPhone8 from '@/assets/img/WindowsPhone/windowsphone8.jpg';
import WindowsPhone81 from '@/assets/img/WindowsPhone/windowsphone81.jpeg';
import Windows10Mobile from '@/assets/img/WindowsPhone/windows10mobile.jpg';
import WindowsMobileEnd from '@/assets/img/WindowsPhone/windowsmobileend.png';

const timeline = [
  {
    name: 'Windows CE 1.0',
    year: '1996',
    text: 'Windows CE 1.0, released in November 1996, was the first version of the operating system developed for handheld PCs. It is based on the Windows 95 kernel and was designed specifically for consumer devices. It was succeeded by Windows CE 2.0.',
    image: WindowsPhoneCE,
  },
  {
    name: 'Windows Phone 7',
    year: '2010',
    text: 'Windows Phone 7 was announced at Mobile World Congress in Barcelona, Catalonia, Spain, on February 15, 2010, and released publicly on November 8, 2010, in the United States.',
    image: WindowsPhone7,
  },
  {
    name: 'Windows Phone 8',
    year: '2012',
    text: 'Windows Phone 8 replaces its previously Windows CE-based architecture with one based on the Windows NT kernel with many components shared with Windows 8, allowing applications to be ported between the two platforms.',
    image: WindowsPhone8,
  },
  {
    name: 'Windows Phone 8.1',
    year: '2014',
    text: 'Windows Phone 8.1 was first rumored to be Windows Phone Blue, a series of updates to Microsofts mobile operating system that would coincide with the release of Windows 8.1. Although Microsoft had originally planned to release WP8.1 in late 2013, shortly after the release of its PC counterpart, general distribution of the new operating system was pushed back until early 2014.',
    image: WindowsPhone81,
  },
  {
    name: 'Windows 10 Mobile',
    year: '2015',
    text: 'Windows 10 Mobile is a mobile operating system developed by Microsoft. First released in 2015, it is a successor to Windows Phone 8.1, but was marketed by Microsoft as being an edition of its PC operating system Windows 10.',
    image: Windows10Mobile,
  },
  {
    name: 'Ends of Support',
    year: '2020',
    text: 'Microsoft ended support for Windows 10 Mobile on December 10, 2019, and it became officially unsupported on January 14, 2020. This means that there will be no more updates or patches available for the operating system.',
    image: WindowsMobileEnd,
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
