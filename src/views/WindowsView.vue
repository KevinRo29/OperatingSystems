<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Windows</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <img alt="MacOS" :src="WindowsImage" />
        <ion-card-content class="ion-text-justify">
          Windows is the operating system developed by Microsoft Corporation for a wide range of devices, 
          including personal computers, tablets, and smartphones. The first version of Windows, Windows 1.0, 
          was introduced on November 20, 1985. Since its inception, Microsoft has released multiple versions 
          of the operating systems.
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
import WindowsImage from '@/assets/img/Windows/windows.png';
import NewProduct from '@/assets/img/Windows/windowsannounces.jpg';
import Windows1 from '@/assets/img/Windows/windows1.png';
import Windows2 from '@/assets/img/Windows/windows2.jpeg';
import Windows3 from '@/assets/img/Windows/windows3.png';
import Windows95 from '@/assets/img/Windows/windows95.png';
import Windows98 from '@/assets/img/Windows/windows98.png';
import WindowsME from '@/assets/img/Windows/windowsme.png';
import WindowsXP from '@/assets/img/Windows/windowsxp.png';
import WindowsVista from '@/assets/img/Windows/windowsvista.png';
import Windows7 from '@/assets/img/Windows/windows7.jpg';
import Windows8 from '@/assets/img/Windows/windows8.png';
import Windows10 from '@/assets/img/Windows/windows10.jpg';
import Windows11 from '@/assets/img/Windows/windows11.png';

const timeline = [
  {
    name: 'New Product',
    year: '1983',
    text: '1983: Microsoft announces its plans for a new product called Windows 1.0, which would bring a graphical user interface to IBM PCs. However, Windows 1.0 would not ship until November 1985, earning it a reputation as "vaporware."',
    image: NewProduct
  },
  {
    name: 'Windows 1.0',
    year: '1985',
    text: '1Windows 1.0 is finally released on November 20, becoming popular for its graphical interface based on windows and features such as handling MS-DOS files, a calendar, notepad, calculator, and clock',
    image: Windows1
  },
  {
    name: 'Windows 2.0',
    year: '1987',
    text: 'Windows 2.0 is released on December 9, adding overlapping windows, keyboard shortcuts, VGA graphics, and other features that would become standard in future versions of Windows.',
    image: Windows2
  },
  {
    name: 'Windows 3.0',
    year: '1990',
    text: 'Windows 3.0 is released on May 22, adding icons, keyboard shortcuts, and improved graphics support. It would become the first widely successful version of Windows and would introduce many users to computers for the first time.',
    image: Windows3
  },
  {
    name: 'Windows 95',
    year: '1995',
    text: 'Windows 95 is released on August 24, adding the Start menu, taskbar, and support for 32-bit applications. It would become the first version of Windows to be pre-installed on PCs by OEMs.',
    image: Windows95
  },
  {
    name: 'Windows 98',
    year: '1998',
    text: 'Windows 98 is released on June 25, adding support for USB devices, AGP graphics, and FAT32. It would become the last version of Windows based on MS-DOS.',
    image: Windows98
  },
  {
    name: 'Windows ME',
    year: '2000',
    text: 'Windows ME is released on September 14, adding System Restore, Windows Movie Maker, and Windows Media Player 7. It would become the last version of Windows based on the Windows 9x kernel.',
    image: WindowsME
  },
  {
    name: 'Windows XP',
    year: '2001',
    text: 'Windows XP is released on October 25, adding a new user interface, fast user switching, and other features. It would become the first version of Windows to use the Windows NT kernel.',
    image: WindowsXP
  },
  {
    name: 'Windows Vista',
    year: '2006',
    text: 'Windows Vista is released on January 30, adding a new user interface, Windows Aero, and other features. It would become the first version of Windows to require product activation.',
    image: WindowsVista
  },
  {
    name: 'Windows 7',
    year: '2009',
    text: 'Windows 7 is released on October 22, adding a new taskbar, Action Center, and other features. It would become the most popular version of Windows, with over 1 billion users by 2016.',
    image: Windows7
  },
  {
    name: 'Windows 8',
    year: '2012',
    text: 'Windows 8 is released on October 26, adding a new Start screen, Windows Store, and other features. It would become the first version of Windows to support ARM processors.',
    image: Windows8
  },
  {
    name: 'Windows 10',
    year: '2015',
    text: 'Windows 10 is released on July 29, adding a new Start menu, Cortana, and other features. It would become the last version of Windows, with Microsoft moving to a Windows as a service model.',
    image: Windows10
  },
  {
    name: 'Windows 11',
    year: '2021',
    text: 'Windows 11 is released on October 5, adding a new Start menu, Widgets, and other features. It would become the latest version of Windows, with Microsoft moving to a Windows as a service model.',
    image: Windows11
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
