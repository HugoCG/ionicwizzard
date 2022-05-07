
import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import {
 StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss']
})
export class HomePage {

@ViewChild('myswing1') swingStack: SwingStackComponent;
@ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

cards: any[] = [];
type: any[] = [];
profile: any[] = [];

stackConfig: StackConfig;
recentCard: string = '';

i=0;
man=0;
woman=0;

answerE=0;
answerI=0;
answerS=0;
answerN=0;
answerT=0;
answerF=0;
answerJ=0;
answerP=0;

vote: any[] =  [this.voteUp1,this.voteUp2,this.voteUp3,this.voteUp4,this.voteUp5,this.voteUp6,this.voteUp7,this.voteUp8,this.voteUp9,
this.voteUp10,this.voteUp11,this.voteUp12,this.voteUp13,this.voteUp14,this.voteUp15,this.voteUp16,this.voteUp17,this.voteUp18,this.voteUp19,
this.voteUp20,this.voteUp21,this.voteUp22,this.voteUp23,this.voteUp24,this.voteUp25,this.voteUp26,this.voteUp27,this.voteUp28,this.voteUp29,
this.voteUp30,this.voteUp31,this.voteUp32,this.voteUp33,this.voteUp34,this.voteUp35,this.voteUp36,this.voteUp37,this.voteUp38,this.voteUp39,
this.voteUp40,this.voteUp41,this.voteUp42,this.voteUp43,this.voteUp44,this.voteUp45,this.voteUp46,this.voteUp47,this.voteUp48,this.voteUp49,
this.voteUp50,this.voteUp51,this.voteUp52,this.voteUp53,this.voteUp54,this.voteUp55,this.voteUp56,this.voteUp57,this.voteUp58,this.voteUp59,
this.voteUp60,this.voteUp61,this.voteUp62,this.voteUp63,this.voteUp64,this.voteUp65,this.voteUp66,this.voteUp67,this.voteUp68,this.voteUp69,this.voteUp70,this.voteUp71,this.voteUp72,this.voteUp73,this.voteUp74,this.voteUp75,this.voteUp76,this.voteUp77,this.voteUp78,this.voteUp79,this.voteUp80,this.voteUp81,this.voteUp82,this.voteUp83,this.voteUp84
];

questions: any[] = [
"Als ik in een groep ben, zal ik meestal deelnemen aan het groepsgesprek.",
"Ik word over het algemeen beschouwd als een praktisch ingesteld persoon.",
"Ik ben slim, wel eens egocentrisch en geneigd tot opportunisme.",
"Als ik aan een project begin, maak ik het bijna altijd af.",
"Ik ben doorgaans tamelijk stil en terughoudend.",
"Als vriend kies ik eerder iemand die steeds met nieuwe ideeën komt.",
"Diegenen die de wet overtreden, moeten verhoudingsgewijs streng bestraft worden.",
"Ik laat me eerder leiden door mijn gevoelens, dan door logica.",
"Ik heb een uitgebreide vriendenkring.",
"Ik meng me doorgaans vlot in een gesprek met anderen.",
"Dingen die praktisch toepasbaar zijn, trekken me het meeste aan en geven me het meeste plezier.",
"Ik laat me eerder leiden door mijn verstand dan door mijn gevoelens.",
"Ik vind van mezelf dat ik een zeer regelmatige werker ben.",
"De meeste mensen vinden dat ik een vrij gesloten persoon ben.",
"Ik schiet meestal beter op met fantasierlijke mensen.",
"Ik kies er in de meeste gevallen voor om een planning te volgen.",
"Als ik gespannen ben, heb ik vaak een brok in mijn keel.",
"Ik vind mezelf ondernemend en extravert, en ik raak graag betrokken bij sociale aangelegenheden.",
"Concreet",
"Logisch",
"Efficiënt",
"Fantasierijk",
"Begripsvol",
"Actiegericht",
"Ongedwongen",
"Verlegen",
"Detailgericht",
"Onverbloemd",
"Georganiseerd",
"Overtuigend",
"Emotioneel",
"Enthousiast",
"Roekeloos",
"Oplossingsgericht" ,
"Rationeel",
"Nauwgezet",
"Zachtmoedig",
"Gevoelig",
"Praatlustig",
"Praktisch",
"Analyseren",
"Nauwkeurig",
"Conceptueel",
"Meelevend",
"Groepsmens",
"Op feestjes ben ik zeer vaak aan het woord.",
"Ik schiet meestal beter op met realistische mensen.",
"Ik schenk zelden veel aandacht aan mijn gevoelens van het moment.",
"Als ik op reis ga, maak ik van tevoren een zorgvuldig plan.",
"Ik vind het vervelend veel mensen om me heen te hebben.",
"Ik voel me sterk aangetrokken tot nieuwe ideeën en concepten, ook al hebben ze geen praktisch nut.",
"Ik kan erg emotioneel worden van muziek of andere kunstexpressies.",
"Ik ben niet erg systematisch.",
"Wanneer mensen veel van mij eisen, dan blijf ik meestal rustig.",
"In een groep mensen houd ik me liever op de achtergrond.",
"Ik waardeer gevoelens meestal meer dan logica.",
"Ik voel me zelden verlegen in gezelschap.",
"Als vriend kies ik het liefst iemand die met twee voeten op de grond staat.",
"Mijn emoties gaan niemand wat aan.",
"Ik regel mijn werk precies.",
"Op feestjes praten anderen meer dan ik.",
"Ik werk liever met anderen samen dan met ze te wedijveren.",
"Ik houd liever mogeliljkheden open, dan alles van tevoren te plannen.",
"Ik waardeer logica meestal meer dan gevoelens.",
"Realistisch",
"Planmatig",
"Ideeëngericht",
"Gevoelensmatig",
"Spraakzaam",
"Wanordelijk",
"Afstandelijk",
"Levensgenieter",
"Uitwerken",
"Wispelturig",
"Gereserveerd",
"Realist",
"Zekerheden",
"Innovatief",
"Meevoelen",
"Chaoot",
"Terughoudend",
"Drammerig",
"Flexibel",
"Zwijgzaam"
];

myQuestions = this.questions[this.i];
myVote = this.vote[this.i];

  constructor(private http: Http) {
    
    this.stackConfig = {
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX) / (element.offsetWidth/2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
  }
  male(){
      this.man=1;
      this.woman=0;
      }    
       female(){
      this.man=0;
      this.woman=1;
      }   //http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
  
  decimalToHex(d, padding) {
  var hex = Number(d).toString(16);
  padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
  
  while (hex.length < padding) {
    hex = "0" + hex;
  }
  
  return hex;
}
  
  ngAfterViewInit() {
    // Either subscribe in controller or set in HTML
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      event.target.style.background = '#ffffff';
    });
    
    this.cards = [{email: ''}];
    this.addNewCards(1);
  }
  
  // Called whenever we drag an element
onItemMove(element, x, y, r) {
  var color = '';
  var abs = Math.abs(x);
  let min = Math.trunc(Math.min(16*16 - abs, 16*16));
  let hexCode = this.decimalToHex(min, 2);
  
  if (x < 0) {
    color = '#' + hexCode + 'FF' + hexCode;
  } else {
    color = '#FF' + hexCode + hexCode;
  }
  
  element.style.background = color;
  element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
}

// Connected through HTML
voteUp1(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=1;
  } else {
    this.answerI +=2;
    
  }
}
voteUp2(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerN +=2;
    
  }
}
voteUp3(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like){
  
  } 
  else {
    if(this.man == 1){
      this.answerF +=1;
      }
      if(this.woman == 1){
        this.answerF +=2;
      }
  
  }
}
voteUp4(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
  
  } else {
    this.answerP +=2;
    
  }
}
voteUp5(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=2;
  } else {
    this.answerI +=2;
  }
}
voteUp6(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerS +=1;
  } else {
    this.answerN +=2;
  }
}
voteUp7(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerP +=2;
    
  }
}
voteUp8(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    if(this.woman == 1){
      this.answerF +=1;
    }
  
  } else {
    if(this.woman == 1){
      this.answerT +=1;
    }
    
  }
}
voteUp9(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=2;
  } else {
    this.answerI +=2;
  }
}
voteUp10(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=2;

  } else {
    this.answerI +=2;
    
  }
}
voteUp11(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i]; 
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerN +=2;
    
  }
}
voteUp12(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    if(this.woman==1){
    this.answerT +=2;
    }

  } else {
    this.answerF +=2;
    
  }
}
voteUp13(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerP +=2;
    
  }
}
voteUp14(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i]; 
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=2;
  } else {
    this.answerI +=2;
  }
}
voteUp15(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerS +=2;
  } else {
    this.answerN +=2;
    
  }
}
voteUp16(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i]; 
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerP +=2;
    
  }
}
voteUp17(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerT +=2;
  } else {
    
  }
}
voteUp18(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=2;
  } else {
    this.answerI +=2;
  }
}
voteUp19(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerN +=2;
  }
}
voteUp20(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {

  } else {
    this.answerF +=2;
  }
}
voteUp21(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerP +=2;
  }
}
voteUp22(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerS +=1;
  } else {
    this.answerN +=2;
  }
}
voteUp23(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerF +=2;
  }
}
voteUp24(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=1;
  } else {
    this.answerI +=2;
  }
}
voteUp25(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerJ +=1;
  } else {
  
  }
}
voteUp26(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=2;
  } else {
    this.answerI +=1;
  }
}
voteUp27(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerS +=2;
  } else {
    this.answerN +=2;
  }
}
voteUp28(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerT +=1;
  } else {
    this.answerF +=1;
  }
}
voteUp29(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerP +=2;
  }
}
voteUp30(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerS +=1;
  } else {
    this.answerN +=2;
  }
}
voteUp31(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerT +=1;
  } else {
    this.answerF +=2;
  }
}
voteUp32(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=1;
  } else {
    this.answerI +=1;
  }
}
voteUp33(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerJ +=2;
  } else {
    
  }
}
voteUp34(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerN +=2;
  }
}
voteUp35(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerF +=2;
  }
}
voteUp36(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerP +=2;
  }
}
voteUp37(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerN +=2;
  }
}
voteUp38(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerT +=1;
  } else {
    this.answerF +=2;
  }
}
voteUp39(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=2;
  } else {
    this.answerI +=2;
  }
}
voteUp40(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
  
  } else {
    this.answerN +=2;
  }
}
voteUp41(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
  
  } else {
    
  }
}
voteUp42(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
  
  } else {
    this.answerP +=2;
  }
}
voteUp43(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
  
  } else {
    this.answerN +=2;
  }
}
voteUp44(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
  
  } else {
    this.answerF +=2;
  }
}
voteUp45(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=2;
  } else {
    this.answerI +=1;
  }
}
voteUp46(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=2;
  } else {
    
  }
}
voteUp47(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerN +=2;
  }
}
voteUp48(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    if(this.man ==1){
        this.answerF +=1;
    }
    
  }
}
voteUp49(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerJ +=3;
  } else {
    this.answerP +=2;
  }
}
voteUp50(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=2;
  } else {
    this.answerI +=1;
  }
}
voteUp51(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerN +=2;
  }
}
voteUp52(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerF +=1;
  }
}
voteUp53(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerJ +=2;
  } else {
    
  }
}
voteUp54(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
   
  } else {
    this.answerF +=2;
  }
}
voteUp55(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=2;
  } else {
    this.answerI +=1;
  }
}
voteUp56(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerT +=2;
  } else {
    this.answerF +=2;
  }
}
voteUp57(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=1;
  } else {
    this.answerI +=1;
  }
}
voteUp58(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerN +=2;
  }
}
voteUp59(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerT +=1;
  } else {
    
  }
}
voteUp60(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerJ +=3;
  } else {
    this.answerP +=2;
  }
}
voteUp61(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
   
  } else {
    this.answerI +=2;
  }
}
voteUp62(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
   
  } else {
    this.answerF +=2;
  }
}
voteUp63(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
   
  } else {
    this.answerP +=6;
  }
}
voteUp64(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
   
  } else {
    this.answerF +=2;
  }
}
voteUp65(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
   
  } else {
    this.answerN +=2;
  }
}
voteUp66(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerJ +=3;
  } else {
    this.answerP +=2;
  }
}
voteUp67(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerN +=2;
  }
}
voteUp68(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerT +=1;
  } else {
    this.answerF +=2;
  }
}
voteUp69(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=2;
  } else {
    this.answerI +=2;
  }
}
voteUp70(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerJ +=2;
  } else {
    this.answerP +=6;
  }
}
voteUp71(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=2;
  } else {
    this.answerI +=1;
  }
}
voteUp72(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerS +=2;
  } else {
    
  }
}
voteUp73(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    
  }
}
voteUp74(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    
  }
}
voteUp75(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=1;
  } else {
    this.answerI +=2;
  }
}
voteUp76(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerS +=2;
  } else {
    
  }
}
voteUp77(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerJ +=6;
  } else {
    this.answerP +=2;
  }
}
voteUp78(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerS +=1;
  } else {
    
  }
}
voteUp79(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    this.answerF +=2;
  }
}
voteUp80(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    
  } else {
    
  }
}
voteUp81(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerE +=2;
  } else {
    this.answerI +=2;
  }
}
voteUp82(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerS +=2;
  } else {
    
  }
}
voteUp83(like: boolean) {
  this.i +=1;
  this.myQuestions = this.questions[this.i];
  this.myVote = this.vote[this.i];
  let removedCard = this.cards.pop();
  this.addNewCards(1);
  if (like) {
    this.answerJ +=2;
  } else {
    this.answerP +=6;
  }
}
voteUp84(like: boolean) {
  this.i +=1;
  
  let removedCard = this.cards.pop();
  
  if (like) {
    this.answerE +=2;
  } else {
    this.answerI +=2;
  }
}

// Add new cards to our array
addNewCards(count: number) {
  this.cards = [{}];
}
showResult(){
// Calculate type
if (this.answerE > this.answerI){
this.type = ['E'];
}
else {
this.type = ['I'];
}
if (this.answerS > this.answerN){
this.type[1] = ['S'];
}
else {
this.type[1] = ['N'];
}
if (this.answerT > this.answerF){
this.type[2] = ['T'];
}
else {
this.type[2] = ['F'];
}
if (this.answerJ > this.answerP){
this.type[3] = ['J'];
}
else {
this.type[3] = ['P'];
}
// Get Profile
if (this.type[0].includes("I") && this.type[1].includes("S")&& this.type[2].includes("T")&& this.type[3].includes("J")){
this.profile = ["The Inspector"];
}
if (this.type[0].includes("I") && this.type[1].includes("S")&& this.type[2].includes("F")&& this.type[3].includes("J")){
this.profile = ["The Protector"];
}
if (this.type[0].includes("I") && this.type[1].includes("N")&& this.type[2].includes("F")&& this.type[3].includes("J")){
this.profile = ["The Counselor"];
}
if (this.type[0].includes("I") && this.type[1].includes("N")&& this.type[2].includes("T")&& this.type[3].includes("J")){
this.profile = ["The Mastermind"];
}
if (this.type[0].includes("I") && this.type[1].includes("S")&& this.type[2].includes("T")&& this.type[3].includes("P")){
this.profile = ["The Crafter"];
}
if (this.type[0].includes("I") && this.type[1].includes("S")&& this.type[2].includes("F")&& this.type[3].includes("P")){
this.profile = ["The Composer"];
}
if (this.type[0].includes("I") && this.type[1].includes("N")&& this.type[2].includes("F")&& this.type[3].includes("P")){
this.profile = ["The Idealist"];
}
if (this.type[0].includes("I") && this.type[1].includes("N")&& this.type[2].includes("T")&& this.type[3].includes("P")){
this.profile = ["The Architect"];
}
if (this.type[0].includes("E") && this.type[1].includes("S")&& this.type[2].includes("T")&& this.type[3].includes("P")){
this.profile = ["The Promoter"];
}
if (this.type[0].includes("E") && this.type[1].includes("S")&& this.type[2].includes("F")&& this.type[3].includes("P")){
this.profile = ["The Performer"];
}
if (this.type[0].includes("E") && this.type[1].includes("N")&& this.type[2].includes("F")&& this.type[3].includes("P")){
this.profile = ["The Champion"];
}
if (this.type[0].includes("E") && this.type[1].includes("N") && this.type[2].includes("T") && this.type[3].includes("P")){
this.profile = ["The Inventor"];
}
if (this.type[0].includes("E") && this.type[1].includes("S") && this.type[2].includes("T") && this.type[3].includes("J")){
this.profile = ["The Supervisor"];
}
if (this.type[0].includes("E") && this.type[1].includes("S") && this.type[2].includes("F") && this.type[3].includes("J")){
this.profile = ["The Provider"];
}
if (this.type[0].includes("E") && this.type[1].includes("N") && this.type[2].includes("F") && this.type[3].includes("J")){
this.profile = ["The Teacher"];
}
if (this.type[0].includes("E") && this.type[1].includes("N") && this.type[2].includes("T") && this.type[3].includes("J")){
this.profile = ["The Fieldmarshal"];
}
}
}