import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';
import dayjs from 'dayjs';


function formatDate(isoString) {
    const day = dayjs(isoString);
    return day.format('D MMMM YYYY');
}

export default function BiorhythmCard({targetdate}) {
  return (
    <IonCard>
        <IonCardHeader>
            <IonCardTitle className="ion-text-center">
               {formatDate(targetdate)}
            </IonCardTitle>
        </IonCardHeader>




        <IonCardContent>
    
            <p>Physical : </p>
            <p>Emotional:</p>
            <p>Intellectual:</p> 
        </IonCardContent>
    </IonCard>
  );
}