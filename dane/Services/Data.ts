import Pierogi from './pierogi.jpg';
import Barszcz_czerwony from './barszcz-wigilijny.jpg';
import Karp from './karp_po_zydowsku_.jpg';
import Kutia from './kutia.jpg';
import Piernik from './piernik_najlepszy.jpg';
import Salatka from './Salatka_sledziowa.jpg';
import Kluski from './kluski-slaskie.jpg';
import Barsz_ukr from './barszcz_ukrainski_0.jpg';
import Ryba from './ryba_po_grecku_0.jpg';
import Szarlotka from './szarlotka_79.jpg';
 
export type Recipe = {
    name: string;
    ingredient: string[];
    price: number;
    description: string;
    img?:string
};


export const Recipes:Recipe[] = [
    {
        name: "Pierogi z kapustą i grzybami",
        ingredient: ["Kapusta", "Grzyby", "Cebula", "Mąka", "Jajka", "Sól", "Pieprz"],
        price: 30,
        description: "Tradycyjne pierogi z kapustą i grzybami, idealne na wigilijny stół.",
        img : Pierogi
    },
    {
        name: "Barszcz czerwony z uszkami",
        ingredient: ["Buraki", "Cebula", "Czosnek", "Marchew", "Seler", "Zioła", "Mąka", "Jajka"],
        price: 25,
        description: "Klasyczny barszcz czerwony podawany z domowymi uszkami. Idealny na zimowe dni.",
        img: Barszcz_czerwony
    },
    {
        name: "Karp po żydowsku",
        ingredient: ["Karp", "Cebula", "Marchew", "Mąka", "Jajka", "Przyprawy"],
        price: 40,
        description: "Karp marynowany i pieczony w tradycyjnym stylu żydowskim.",
        img: Karp
    },
    {
        name: "Kutia",
        ingredient: ["Mąka pszenna", "Mąka żytnia", "Miód", "Migdały", "Rodzynki", "Orzechy"],
        price: 24,
        description: "Słodka i sycąca kutia, tradycyjne danie wigilijne.",
        img:Kutia
    },
    {
        name: "Piernik",
        ingredient: ["Mąka", "Miód", "Jajka", "Przyprawy korzenne", "Cukier"],
        price: 26,
        description: "Klasyczne świąteczne ciasto, słodkie i korzenne.",
        img:Piernik
    },
    {
        name: "Sałatka śledziowa",
        ingredient: ["Śledzie", "Ziemniaki", "Marchew", "Cebula", "Ogórki kiszone", "Jajka", "Majonez"],
        price: 36,
        description: "Popularna sałatka na wigilijnym stole, idealna jako przystawka.",
        img:Salatka
    },
    {
        name: "Kluski śląskie z sosem grzybowym",
        ingredient: ["Ziemniaki", "Mąka ziemniaczana", "Jajka", "Grzyby", "Cebula", "Śmietana"],
        price: 30,
        description: "Tradycyjne kluski podawane z gęstym sosem grzybowym.",
        img:Kluski
    },
    {
        name: "Barszcz ukraiński z pasztecikami",
        ingredient: ["Buraki", "Cebula", "Czosnek", "Marchew", "Seler", "Mąka", "Jajka", "Mięso", "Przyprawy"],
        price: 33,
        description: "Pyszny barszcz podawany z domowymi pasztecikami, idealny na chłodne wieczory.",
        img:Barsz_ukr
    },
    {
        name: "Ryba po grecku",
        ingredient: ["Ryba (np. dorsz)", "Marchew", "Cebula", "Pieczarki", "Mąka", "Jajka", "Majonez"],
        price: 45,
        description: "Tradycyjna ryba marynowana i pieczona z warzywami, lekka i smaczna.",
        img:Ryba
    },
    {
        name: "Szarlotka",
        ingredient: ["Jabłka", "Mąka", "Cukier", "Masło", "Jajka", "Cynamon"],
        price: 28,
        description: "Klasyczna szarlotka z kwaśnymi jabłkami i aromatycznym cynamonem.",
        img:Szarlotka
    }
]
