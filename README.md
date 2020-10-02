# Lommeregner
 Repitionsprojekt

 I dette projekt vil jeg lave en basal lommeregner, som fungere ved at tilføjer to værdier og derefter vælger hvad man vil gøre med dem.
 Til at starte med skal lommeregneren indholde de fire primære regnemetoder - addition, subtraktion, multiplikation og division.
 Der skal være mulighed for at regne med heltal, men også decimaltal. Eventuelt kan der tilføjes flere regnemetoder hvis muligt.

 Lommeregneren skal være simpelt og nemt at bruge. Der kan måske ændres rent design-mæssigt med CSS. 

 Logbog:
 28/09-2020
 Har forsøgt at omskrive det første stykke gode mere simpelt og med brug af if-statement. Umiddelbart kan jeg ikke få det til at virke, men tror det går fremmad.
 Ellers har jeg noget velfungerende kode, som jeg altid kan gøre brug af hvis det andet ikke lykkes. 
 Derudover har jeg forsøgt at få decimaltal til at virke ved at bruge "parseFloat", men det driller også. "parseInt" virker helt fint, men kan ikke få det omdannet til decimaltal.
 Kun ved brug af brøker.

 30/09 - 2020
 Har forsøgt at fikse det nye kode. Først og fremmest er "=" tegnene blevet fikset til triple så den tjekkede i stedet.

 02-10 - 2020
 Jeg har fået fikset det kode som har drillet mig. Grunden til det drillede var, at jeg først definerede variablen "result" midtvejs i koden, men det skulle have været gjort i starten.
Yderligere har jeg simplificeret koden endnu mere, ved at bruge metoden switch. Dynamisk og simpel metode, så man ikke behøver skrive lange if-statements osv.
Sidste ting som er blevet ændret er parseFloat, som er blevet lavet om til Number, som både tager hensyn til heltal og decimaltal.

