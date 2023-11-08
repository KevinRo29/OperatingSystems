<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">MacOS</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <img alt="MacOS" :src="MacOSImage" />
        <ion-card-content class="ion-text-justify">
          MacOS is the operating system developed by Apple Inc. for their Macintosh computers. 
          It was first introduced as Mac OS System Software in 1984, but the modern macOS, 
          known as macOS X, was launched on March 24, 2001. Apple Inc., the creator of macOS, 
          is headquartered in Cupertino, California, USA, where the operating system is developed and updated.
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
import MacOSImage from '@/assets/img/MacOS/macos.png';
import First from '@/assets/img/MacOS/1996.jpeg';
import Second from '@/assets/img/MacOS/2000.jpg';
import Cheetah from '@/assets/img/MacOS/cheetah.jpg';
import Puma from '@/assets/img/MacOS/Puma.jpeg';
import Jaguar from '@/assets/img/MacOS/Jaguar.png';
import Panther from '@/assets/img/MacOS/Panther.jpg';
import Tiger from '@/assets/img/MacOS/Tiger.png';
import Leopard from '@/assets/img/MacOS/Leopard.png';
import SnowLeopard from '@/assets/img/MacOS/Snow-leopard.png';
import Lion from '@/assets/img/MacOS/Lion.png';
import MountainLion from '@/assets/img/MacOS/Mountain-lion.jpg';
import Mavericks from '@/assets/img/MacOS/Mavericks.png';
import Yosemite from '@/assets/img/MacOS/Yosemite.png';
import ElCapitan from '@/assets/img/MacOS/El-Capitan.png';
import Sierra from '@/assets/img/MacOS/Sierra.jpg';
import HighSierra from '@/assets/img/MacOS/High-Sierra.png';
import Mojave from '@/assets/img/MacOS/Mojave.jpeg';
import Catalina from '@/assets/img/MacOS/Catalina.jpeg';
import BigSur from '@/assets/img/MacOS/Big-sur.png';
import Monterey from '@/assets/img/MacOS/Monterey.png';

const timeline = [
  {
    name: 'Merge',
    year: '1996',
    text: 'Apple acquires NeXT, a company founded by Steve Jobs, which develops the NeXTSTEP platform that would later be acquired by Apple to form the basis of macOS',
    image: First
  },
  {
    name: 'Beginning ',
    year: '2000',
    text: 'The first ancestor of the macOS family, Mac OS X Public Beta, is released',
    image: Second
  },
  {
    name: 'Cheetah',
    year: '2001',
    text: 'The first public release of Mac OS X 10.0 (Cheetah) is launched on March 24, marking the official beginning of the macOS operating system',
    image: Cheetah
  },
  {
    name: 'Puma',
    year: '2001',
    text: 'Mac OS X 10.1 (Puma) is released on September 25, introducing various improvements over the previous version',
    image: Puma
  },
  {
    name: 'Jaguar',
    year: '2002',
    text: 'Mac OS X 10.2 (Jaguar) is released on August 14, further enhancing the features and performance of the operating system',
    image: Jaguar
  },
  {
    name: 'Panther',
    year: '2003',
    text: 'Mac OS X 10.3 (Panther) is released on October 24, introducing various new features, such as Exposé, FileVault, and Fast User Switching, as well as various performance improvements',
    image: Panther
  },
  {
    name: 'Tiger',
    year: '2005',
    text: 'Mac OS X 10.4 (Tiger) is released on April 29, introducing various new features, such as Spotlight, Dashboard, and Automator, as well as various performance improvements and security enhancements',
    image: Tiger
  },
  {
    name: 'Leopard',
    year: '2007',
    text: 'Mac OS X 10.5 (Leopard) is released on October 26, introducing a redesigned desktop and various new features, such as Time Machine, Boot Camp, and Spaces',
    image: Leopard
  },
  {
    name: 'Snow Leopard',
    year: '2009',
    text: 'Mac OS X 10.6 (Snow Leopard) is released on August 28, introducing various performance improvements and security enhancements, as well as support for 64-bit applications and the Mac App Store',
    image: SnowLeopard
  },
  {
    name: 'Lion',
    year: '2011',
    text: 'Mac OS X 10.7 (Lion) is released on July 20, introducing various new features, such as Launchpad, Mission Control, and AirDrop, as well as various performance improvements and security enhancements, and the removal of the "Mac" prefix from the name of the operating system',
    image: Lion
  },
  {
    name: 'Mountain Lion',
    year: '2012',
    text: 'Mac OS X 10.8 (Mountain Lion) is released on July 25, introducing various new features, such as Notification Center, Notes, and Game Center, as well as various performance improvements and security enhancements, and the removal of the "Mac" prefix from the name of the operating system',
    image: MountainLion
  },
  {
    name: 'Mavericks',
    year: '2013',
    text: 'Mac OS X 10.9 (Mavericks) is released on October 22, introducing various new features, such as Finder Tabs, Tags, and iBooks, as well as various performance improvements and security enhancements',
    image: Mavericks
  },
  {
    name: 'Yosemite',
    year: '2014',
    text: 'Mac OS X 10.10 (Yosemite) is released on October 16, introducing various new features, such as Continuity, Handoff, and iCloud Drive, as well as various performance improvements and security enhancements',
    image: Yosemite
  },
  {
    name: 'El Capitan',
    year: '2015',
    text: 'Mac OS X 10.11 (El Capitan) is released on September 30, introducing various new features, such as Split View, as well as various performance improvements and security enhancements',
    image: ElCapitan
  },
  {
    name: 'Sierra',
    year: '2016',
    text: 'Mac OS X 10.12 (Sierra) is released on September 20, introducing various new features, such as Siri, as well as various performance improvements and security enhancements',
    image: Sierra
  },
  {
    name: 'High Sierra',
    year: '2017',
    text: 'Mac OS X 10.13 (High Sierra) is released on September 25, introducing various new features, such as APFS, as well as various performance improvements and security enhancements',
    image: HighSierra
  },
  {
    name: 'Mojave',
    year: '2018',
    text: 'Mac OS X 10.14 (Mojave) is released on September 24, introducing various new features, such as Dark Mode, as well as various performance improvements and security enhancements',
    image: Mojave
  },
  {
    name: 'Catalina',
    year: '2019',
    text: 'Mac OS X 10.15 (Catalina) is released on October 7, introducing various new features, such as Sidecar, as well as various performance improvements and security enhancements',
    image: Catalina
  },
  {
    name: 'Big Sur',
    year: '2020',
    text: 'Mac OS X 11.0 (Big Sur) is released on November 12, introducing various new features, such as Control Center, as well as various performance improvements and security enhancements',
    image: BigSur
  },
  {
    name: 'Monterey',
    year: '2021',
    text: 'Mac OS X 12.0 (Monterey) is released on October 25, introducing various new features, such as Universal Control, as well as various performance improvements and security enhancements',
    image: Monterey
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
