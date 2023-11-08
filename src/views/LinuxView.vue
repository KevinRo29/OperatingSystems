<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Linux</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <img alt="MacOS" :src="LinuxImage" />
        <ion-card-content class="ion-text-justify">
          Linux is an open-source operating system kernel that serves as the foundation for various 
          operating systems, commonly referred to as Linux distributions or distros. It was created by 
          Linus Torvalds, a Finnish-American software engineer, who released the first version of the 
          Linux kernel on September 17, 1991.

          <ion-text color="dark">
            <h6>Note: After Linux 2.0, subsystems were developed, such as Ubuntu, Debian, CentOS Linux, CentOS Stream, Red Hat Enterprise Linux (RHEL), Gentoo, Fedora, etc., but these will not be mentioned in the timeline, as they are derivatives and not the original Linux system.</h6>
          </ion-text>
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
import LinuxImage from '@/assets/img/Linux/linux.jpeg';
import Beginning from '@/assets/img/Linux/beginning.jpg';
import Linux1 from '@/assets/img/Linux/linux1.png';
import Linux2 from '@/assets/img/Linux/linux2.png';
import Linux3 from '@/assets/img/Linux/linux3.jpg';
import Linux4 from '@/assets/img/Linux/linux4.png';
import Linux5 from '@/assets/img/Linux/linux5.jpg';
import Linux6 from '@/assets/img/Linux/linux6.jpg';
import Linux7 from '@/assets/img/Linux/linux7.png';
import Linux8 from '@/assets/img/Linux/linux8.png';

const timeline = [
  {
    name: 'Beginning',
    year: '1991',
    text: 'Linus Torvalds, a Finnish-American software engineer, released the first version of the Linux kernel on September 17, 1991.',
    image: Beginning
  },
  {
    name: 'Linux 1.0',
    year: '1994',
    text: 'On March 14, Linux 1.0 was released. This version of Linux included support for TCP/IP, virtual memory, and the X Window System.',
    image: Linux1
  },
  {
    name: 'Linux 2.0',
    year: '1996',
    text: 'On June 9, Linux 2.0 was released. This version of Linux included support for SMP systems, file systems, and more.',
    image: Linux2
  },
  {
    name: 'Linux 3.0',
    year: '2011',
    text: 'On July 21, Linux 3.0 was released. This version of Linux included support for Btrfs, a new graphics driver, and more.',
    image: Linux3
  },
  {
    name: 'Linux 4.0',
    year: '2015',
    text: 'On April 12, Linux 4.0 was released. This version of Linux included support for Intel Quark SoC X1000, AMD Radeon R9 290 Hawaii GPU, and more.',
    image: Linux4
  },
  {
    name: 'Linux 5.0',
    year: '2019',
    text: 'On March 3, Linux 5.0 was released. This version of Linux included support for AMD Radeon RX Vega M graphics processor, Raspberry Pi touchscreen, and more.',
    image: Linux5
  },
  {
    name: 'Linux 5.10',
    year: '2020',
    text: 'On December 13, Linux 5.10 was released. This version of Linux included support for the Xbox Series X controller, AMD FreeSync HDMI, and more.',
    image: Linux6
  },
  {
    name: 'Linux 5.11',
    year: '2021',
    text: 'On February 14, Linux 5.11 was released. This version of Linux included support for Intel Rocket Lake, AMD Zen 3, and more.', 
    image: Linux7
  },
  {
    name: 'Linux 5.16',
    year: '2022',
    text: 'On February 9, Linux 5.16 was released. This version of Linux included support for AMD Zen 4, Intel Alder Lake, and more.',
    image: Linux8
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
