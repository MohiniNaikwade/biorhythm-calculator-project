import { IonApp, IonContent, IonHeader, IonInput, IonTitle, IonToolbar,IonLabel,IonItem,IonList } from '@ionic/react';
import { useState } from 'react';
import BiorhythmCard from './Components/BiorhythmCard';
function getToday()
{
  return new Date().toISOString().slice(0,'yyyy-mm-dd'.length);
}

function App() {
  
  const [name,setName] = useState('');
  const [birthdate,setbirthdate] = useState('');
  const [targetdate,settargetdate] = useState(getToday);
  
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BIORYTHMS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position= "stacked">
              Name:
            </IonLabel>
            <IonInput value={name} onIonChange={(event) => setName(event.detail.value)}     
             />
      
          </IonItem>
          <IonItem>
            <IonLabel position= "stacked">
              BirthDate:
            </IonLabel>
            <IonInput type="date" value={birthdate}
            onIonChange={(event)=> setbirthdate(event.detail.value)}
            
            /> 
          
          </IonItem>
          <IonItem>
            <IonLabel position= "stacked">
              TargetDate:
            </IonLabel>
            <IonInput type="date" value={targetdate}
            onIonChange={(event)=> settargetdate(event.detail.value)}
            
            /> 
            
          </IonItem>
      
          </IonList>
      
        <BiorhythmCard targetdate={targetdate} />
      </IonContent>
    </IonApp>
  );
  
}

export default App;
