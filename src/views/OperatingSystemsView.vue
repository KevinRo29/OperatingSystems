<template>
  <ion-page>
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Operating Systems</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card color="light">
        <ion-card-content>
          <ion-text>
            <p class="ion-text-custom">
              An operating system (OS) is system software that manages computer hardware, software resources, 
              and provides common services for computer programs.
            </p>
          </ion-text>

          <ion-row class="ion-align-middle" size="12">
            <img class="ion-size-50" src="@/assets/img/operatingsystems.png" alt="Operating Systems"  size="12">
          </ion-row>

          <ion-row class="ion-margin-top">
            <ion-col class="ion-alignment-all-middle" v-for="os in operatingSystems" :key="os.label" size="6">
              <ion-icon :icon="os.icon" size="large"></ion-icon>
              <ion-label>{{ os.label }}</ion-label>
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-middle" size="12">
            <img src="@/assets/img/operatingsystems.gif" alt="Operating Systems Gif">
          </ion-row>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
  
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonIcon, IonLabel, IonRow, IonCol, IonCard, IonCardContent } from '@ionic/vue';
import { desktopOutline, logoApple, logoAppleAppstore, logoAndroid, logoTux, phonePortraitOutline } from 'ionicons/icons';

const operatingSystems = [
  { icon: logoApple, label: 'macOS' },
  { icon: desktopOutline, label: 'Windows' },
  { icon: logoTux, label: 'Linux' },
  { icon: logoAndroid, label: 'Android' },
  { icon: logoAppleAppstore, label: 'iOS' },
  { icon: phonePortraitOutline, label: 'Windows Phone' },
];
</script>

<style scoped>
.ion-align-middle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ion-size-90{
  width: 90%;
  height: 90%;
}
.ion-text-custom {
  font-size: 1.25rem;
}
.ion-alignment-all-middle{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
  