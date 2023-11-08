<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/macos">
          <ion-icon aria-hidden="true" :icon="macos" />
          <ion-label>MacOS</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/windowsdesktop">
          <ion-icon aria-hidden="true" :icon="windows" />
          <ion-label>Windows</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/linux">
          <ion-icon aria-hidden="true" :icon="linux" />
          <ion-label>Linux</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/android">
          <ion-icon aria-hidden="true" :icon="android" />
          <ion-label>Android</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab5" href="/tabs/ios">
          <ion-icon aria-hidden="true" :icon="ios" />
          <ion-label>iOS</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab6" href="/tabs/windowsphone">
          <ion-icon aria-hidden="true" :icon="windowsphone" />
          <ion-label>Windows Phone</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { home } from 'ionicons/icons';
import macos from '@/assets/svg/logo-apple.svg';
import windows from '@/assets/svg/logo-windows.svg';
import linux from '@/assets/svg/logo-tux.svg';
import android from '@/assets/svg/logo-android.svg';
import ios from '@/assets/svg/logo-apple-appstore.svg';
import windowsphone from '@/assets/svg/logo-windows-phone.svg';
</script>
