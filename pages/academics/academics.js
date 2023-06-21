var modal = document.getElementById('modal');
var apply = document.getElementsByClassName('apply');
var sectionSlt = document.getElementById('sectionSlt');
var nursery = document.getElementsByClassName('nurserySlt');
var primary = document.getElementsByClassName('primarySlt');
var secondary = document.getElementsByClassName('secondarySlt');
// var stateCity = document.getElementById('state').selectedOptions[0].value;
// var lga = document.getElementById('lga');
var firstName = document.getElementById('firstName').value
var middleName = document.getElementById('middletName').value
var lastName = document.getElementById('lastName').value
var state = document.getElementById('state').selectedOptions[0].value
// var lga = document.getElementById('lga').selectedOptions[0].value
var date = document.getElementById('DOB').value
var POB  = document.getElementById('POB').value
var sex = document.getElementById('sex').value
var religion  = document.getElementById('religion').value
var sectionSlt = document.getElementById('sectionSlt').value


for (let i = 0; i < 3; i++) {
   apply[i].addEventListener('click',()=>{
      modal.style.display = 'flex'
   })  
}
function changeSection() {
   var sectionType = document.getElementById('sectionSlt').selectedOptions[0].value;

if (sectionType == 1) {
   nursery[0].style.display = 'inline' 
   primary[0].style.display = 'none' 
   secondary[0].style.display = 'none' 

}
else if (sectionType == 2){
   nursery[0].style.display = 'none' 
   primary[0].style.display = 'inline' 
   secondary[0].style.display = 'none' 
}
else if(sectionType == 3 ){
   nursery[0].style.display = 'none' 
   primary[0].style.display = 'none' 
   secondary[0].style.display = 'inline' 

}
}

var LGA = [
   Abia=["Aba North","Aba South","Arochukwu","Bende","Ikwuano","Isiala Ngwa North","Isiala Ngwa South","Isuikwuato","Obi Ngwa","Ohafia","Osisioma","Ugwunagbo","Ukwa East","Ukwa West","Umuahia North","muahia South","Umu Nneochi"],
   Adamawa=["Demsa","Fufure","Ganye","Gayuk","Gombi","Grie","Hong","Jada","Larmurde","Madagali","Maiha","Mayo Belwa","Michika","Mubi North","Mubi South","Numan","Shelleng","Song","Toungo","Yola North","Yola South"],
   AkwaIbom=["Abak","Eastern Obolo","Eket","Esit Eket","Essien Udim","Etim Ekpo","Etinan","Ibeno","Ibesikpo Asutan","Ibiono-Ibom","Ika","Ikono","Ikot Abasi","Ikot Ekpene","Ini","Itu","Mbo","Mkpat-Enin","Nsit-Atai","Nsit-Ibom","Nsit-Ubium","Obot Akara","Okobo","Onna","Oron","Oruk Anam","Udung-Uko","Ukanafun","Uruan","Urue-Offong Oruko","Uyo"],
   Anambra=["Aguata","Anambra East","Anambra West","Anaocha","Awka North","Awka South","Ayamelum","Dunukofia","Ekwusigo","Idemili North","Idemili South","Ihiala","Njikoka","Nnewi North","Nnewi South","Ogbaru","Onitsha North","Onitsha South","Orumba North","Orumba South","Oyi"],
   Bauchi=["Alkaleri","Bauchi","Bogoro","Damban","Darazo","Dass","Gamawa","Ganjuwa","Giade","Itas-Gadau","Jama are","Katagum","Kirfi","Misau","Ningi","Shira","Tafawa Balewa"," Toro"," Warji"," Zaki"],
   Bayelsa=["Brass","Ekeremor","Kolokuma Opokuma","Nembe","Ogbia","Sagbama","Southern Ijaw","Yenagoa"],
   Benue=["Agatu","Apa","Ado","Buruku","Gboko","Guma","Gwer East","Gwer West","Katsina-Ala","Konshisha","Kwande","Logo","Makurdi","Obi","Ogbadibo","Ohimini","Oju","Okpokwu","Oturkpo","Tarka","Ukum","Ushongo","Vandeikya"],
   Borno=["Abadam","Askira-Uba","Bama","Bayo","Biu","Chibok","Damboa","Dikwa","Gubio","Guzamala","Gwoza","Hawul","Jere","Kaga","Kala-Balge","Konduga","Kukawa","Kwaya Kusar","Mafa","Magumeri","Maiduguri","Marte","Mobbar","Monguno","Ngala","Nganzai","Shani"],
   CrossRiver =["Abi","Akamkpa","Akpabuyo","Bakassi","Bekwarra","Biase","Boki","Calabar Municipal","Calabar South","Etung","Ikom","Obanliku","Obubra","Obudu","Odukpani","Ogoja","Yakuur","Yala"],
   Delta=["Aniocha North","Aniocha South","Bomadi","Burutu","Ethiope East","Ethiope West","Ika North East","Ika South","Isoko North","Isoko South","Ndokwa East","Ndokwa West","Okpe","Oshimili North","Oshimili South","Patani","Sapele","Udu","Ughelli North","Ughelli South","Ukwuani","Uvwie","Warri North","Warri South","Warri South West"],
   Ebonyi=["Abakaliki","Afikpo North","Afikpo South","Ebonyi","Ezza North","Ezza South","Ikwo","Ishielu","Ivo","Izzi","Ohaozara","Ohaukwu","Onicha"],
   Edo=["Akoko-Edo","Egor","Esan Central","Esan North-East","Esan South-East","Esan West","Etsako Central","Etsako East","Etsako West","Igueben","Ikpoba Okha","Orhionmwon","Oredo","Ovia North-East","Ovia South-West","Owan East","Owan West","Uhunmwonde"],
   Ekiti=["Ado Ekiti","Efon","Ekiti East","Ekiti South-West","Ekiti West","Emure","Gbonyin","Ido Osi","Ijero","Ikere","Ikole","Ilejemeje","Irepodun-Ifelodun","Ise-Orun","Moba","Oye"],
   Enugu=["Aninri","Awgu","Enugu East","Enugu North","Enugu South","Ezeagu","Igbo Etiti","Igbo Eze North","Igbo Eze South","Isi Uzo","Nkanu East","Nkanu West","Nsukka","Oji River","Udenu","Udi","Uzo Uwani"],
   FCT=["Abaji","Bwari","Gwagwalada","Kuje","Kwali","Municipal Area Council"],
   Gombe=["Akko","Balanga","Billiri","Dukku","Funakaye","Gombe","Kaltungo","Kwami","Nafada","Shongom","Yamaltu-Deba"],
   Imo=["Aboh Mbaise","Ahiazu Mbaise","Ehime Mbano","Ezinihitte","Ideato North","Ideato South","Ihitte-Uboma","Ikeduru","Isiala Mbano","Isu","Mbaitoli","Ngor Okpala","Njaba","Nkwerre","Nwangele","Obowo","Oguta","Ohaji-Egbema","Okigwe","Orlu","Orsu","Oru East","Oru West","Owerri Municipal","Owerri North","Owerri West","Unuimo"],
   Jigawa=["Auyo","Babura","Biriniwa","Birnin Kudu","Buji","Dutse","Gagarawa","Garki","Gumel","Guri","Gwaram","Gwiwa","Hadejia","Jahun","Kafin Hausa","Kazaure","Kiri Kasama","Kiyawa","Kaugama","Maigatari","Malam Madori","Miga","Ringim","Roni","Sule Tankarkar","Taura","Yankwashi"],
   Kaduna=["Birnin Gwari","Chikun","Giwa","Igabi","Ikara","Jaba","Jema a","Kachia","Kaduna North","Kaduna South","Kagarko","Kajuru","Kaura","Kauru","Kubau","Kudan","Lere","Makarfi","Sabon Gari","Sanga","Soba","Zangon Kataf","Zaria"],
   Kano=["Ajingi","Albasu","Bagwai","Bebeji","Bichi","Bunkure","Dala","Dambatta","Dawakin Kudu","Dawakin Tofa","Doguwa","Fagge","Gabasawa","Garko","Garun Mallam","Gaya","Gezawa","Gwale","Gwarzo","Kabo","Kano Municipal","Karaye","Kibiya","Kiru","Kumbotso","Kunchi","Kura","Madobi","Makoda","Minjibir","Nasarawa","Rano","Rimin Gado","Rogo","Shanono","Sumaila","Takai","Tarauni","Tofa","Tsanyawa","Tudun Wada","Ungogo","Warawa","Wudil"],
   Katsina=["Bakori","Batagarawa","Batsari","Baure","Bindawa","Charanchi","Dandume","Danja","Dan Musa","Daura","Dutsi","Dutsin Ma","Faskari","Funtua","Ingawa","Jibia","Kafur","Kaita","Kankara","Kankia","Katsina","Kurfi","Kusada","Mai Adua","Malumfashi","Mani","Mashi","Matazu","Musawa","Rimi","Sabuwa","Safana","Sandamu","Zango"],
   Kebbi=["Aleiro","Arewa Dandi","Argungu","Augie","Bagudo","Birnin Kebbi","Bunza","Dandi","Fakai","Gwandu","Jega","Kalgo","Koko Besse","Maiyama","Ngaski","Sakaba","Shanga","Suru","Wasagu Danko","Yauri","Zuru"],
   Kogi=["Adavi","Ajaokuta","Ankpa","Bassa","Dekina","Ibaji","Idah","Igalamela Odolu","Ijumu","Kabba Bunu","Kogi","Lokoja","Mopa Muro","Ofu","Ogori Magongo","Okehi","Okene","Olamaboro","Omala","Yagba East","Yagba West"],
   Kwara=["Asa","Baruten","Edu","Ekiti","Ifelodun","Ilorin East","Ilorin South","Ilorin West","Irepodun","Isin","Kaiama","Moro","Offa","Oke Ero","Oyun","Pategi"],
   Lagos=["Agege","Ajeromi-Ifelodun","Alimosho","Amuwo-Odofin","Apapa","Badagry","Epe","Eti Osa","Ibeju-Lekki","Ifako-Ijaiye","Ikeja","Ikorodu","Kosofe","Lagos Island","Lagos Mainland","Mushin","Ojo","Oshodi-Isolo","Shomolu","Surulere"],
   Nasarawa=["Akwanga","Awe","Doma","Karu","Keana","Keffi","Kokona","Lafia","Nasarawa","Nasarawa Egon","Obi","Toto","Wamba"],
   Niger=["Agaie","Agwara","Bida","Borgu","Bosso","Chanchaga","Edati","Gbako","Gurara","Katcha","Kontagora","Lapai","Lavun","Magama","Mariga","Mashegu","Mokwa","Moya","Paikoro","Rafi","Rijau","Shiroro","Suleja","Tafa","Wushishi"],
   Ogun=["Abeokuta North","Abeokuta South","Ado-Odo Ota","Egbado North","Egbado South","Ewekoro","Ifo","Ijebu East","Ijebu North","Ijebu North East","Ijebu Ode","Ikenne","Imeko Afon","Ipokia","Obafemi Owode","Odeda","Odogbolu","Ogun Waterside","Remo North","Shagamu"],
   Ondo=["Akoko North-East","Akoko North-West","Akoko South-West","Akoko South-East","Akure North","Akure South","Ese Odo","Idanre","Ifedore","Ilaje","Ile Oluji-Okeigbo","Irele","Odigbo","Okitipupa","Ondo East","Ondo West","Ose","Owo"],
   Osun=["Atakunmosa East","Atakunmosa West","Aiyedaade","Aiyedire","Boluwaduro","Boripe","Ede North","Ede South","Ife Central","Ife East","Ife North","Ife South","Egbedore","Ejigbo","Ifedayo","Ifelodun","Ila","Ilesa East","Ilesa West","Irepodun","Irewole","Isokan","Iwo","Obokun","Odo Otin","Ola Oluwa","Olorunda","Oriade","Orolu","Osogbo"],
   Oyo=["Afijio","Akinyele","Atiba","Atisbo","Egbeda","Ibadan North","Ibadan North-East","Ibadan North-West","Ibadan South-East","Ibadan South-West","Ibarapa Central","Ibarapa East","Ibarapa North","Ido","Irepo","Iseyin","Itesiwaju","Iwajowa","Kajola","Lagelu","Ogbomosho North","Ogbomosho South","Ogo Oluwa","Olorunsogo","Oluyole","Ona Ara","Orelope","Ori Ire","Oyo","Oyo East","Saki East","Saki West","Surulere"],
   Plateau=["Bokkos","Barkin Ladi","Bassa","Jos East","Jos North","Jos South","Kanam","Kanke","Langtang South","Langtang North","Mangu","Mikang","Pankshin","Qua an Pan","Riyom","Shendam","Wase"],
   Rivers=["Port Harcourt","Obio-Akpor","Okrika","Ogu–Bolo","Eleme","Tai","Gokana","Khana","Oyigbo","Opobo–Nkoro","Andoni","Bonny","Degema","Asari-Toru","Akuku-Toru","Abua–Odual","Ahoada West","Ahoada East","Ogba–Egbema–Ndoni","Emohua","Ikwerre","Etche","Omuma"],
   Sokoto=["Binji","Bodinga","Dange Shuni","Gada","Goronyo","Gudu","Gwadabawa","Illela","Isa","Kebbe","Kware","Rabah","Sabon Birni","Shagari","Silame","Sokoto North","Sokoto South","Tambuwal","Tangaza","Tureta","Wamako","Wurno","Yabo"],
   Taraba=["Ardo Kola","Bali","Donga","Gashaka","Gassol","Ibi","Jalingo","Karim Lamido","Kumi","Lau","Sardauna","Takum","Ussa","Wukari","Yorro","Zing"],
   Yobe=["Bade","Bursari","Damaturu","Fika","Fune","Geidam","Gujba","Gulani","Jakusko","Karasuwa","Machina","Nangere","Nguru","Potiskum","Tarmuwa","Yunusari","Yusufari"],
   Zamfara=["Anka","Bakura","Birnin Magaji Kiyaw","Bukkuyum","Bungudu","Gummi","Gusau","Kaura Namoda","Maradun","Maru","Shinkafi","Talata Mafara","Chafe","Zurmi"]
]
window.onclick = function(e) {
   if (e.target == modal) {
     modal.style.display = "none";
   }
 }
 function printPage() {
   var firstName = document.getElementById('firstName').value
   var middleName = document.getElementById('middletName').value
   var lastName = document.getElementById('lastName').value
   var state = document.getElementById('state').selectedOptions[0].value
   var lga = document.getElementById('lga').selectedOptions[0].value
   var date = document.getElementById('DOB').value
   var POB  = document.getElementById('POB').value
   var sex = document.getElementById('sex').selectedOptions[0].value
   var religion  = document.getElementById('religion').selectedOptions[0].value
   var sectionSlt = document.getElementById('sectionSlt').selectedOptions[0].value
   
   // console.log(firstName)
   // console.log(middleName)
   // console.log(lastName)
   // console.log(state)
   // console.log(lga)
   // console.log(date)
   // console.log(POB)
   // console.log(sex)
   // console.log(religion)
   // console.log(sectionSlt)

  if (firstName === ''|| middleName === ''|| lastName === ''|| state === '' || lga === ''|| date === ''|| POB === ''|| sex === ''|| religion === ''|| sectionSlt === '') {
   alert('Please fill all inputs before submision')
  }
  else{
   printAndPay()
  //  document.location = 'https://paystack.com/pay/e697ys1sf2'
  }
 }
//  function lgaOptions() {
   
//    for (let i = 0; i < 9; i++) {
      
//    }
//  }
function findSelected() {
   document.getElementById('lga').innerText= ''
   stateCity = document.getElementById('state').selectedOptions[0].value
   LGA[(stateCity-1)].map((e)=>{
      var option = document.createElement("option");
      option.value = e;
      option.innerText = e
      document.getElementById('lga').appendChild(option)
  })
      }
var string = `<body>
<nav class="topnav"> 
    <div>
        <span> Location: Ijah Road, Sabon-Wuse, Tafa LGA, Niger State. &nbsp;</span>
        <span> <a href="tel:+2348150753822">+2348150753822</a> &nbsp;</span>

    </div>
    <button> Vacancies</button>
</nav>
<nav class="topnav2" id="navbar">
    <div>
        <div>
            <a href="../../index.html"><img src="../../images/Topmost logo.png" alt="..."></a>
        </div>
        <ul>
            <li> <a href="../aboutUs/about.html">About us</a></li>
            <li> <a href="#">Academics</a></li>
            <li>Admission</li>
            <li><a href="../../pages/contactus/contact.html">Contact us</a></li>
            
        </ul>
    </div>
</nav>
<nav class="topnav2Dis" id="navbar2">
  <div>
      <div>
        <a href="../../index.html"><img src="../../images/Topmost logo.png" alt="..."></a>
      </div>
      <ul>
        <li> <a href="../pages/aboutUs/about.html">About us</a></li>
        <li> <a href="#">Academics</a></li>
        <li>Admission</li> 
        <li><a href="../../pages/contactus/contact.html">Contact us</a></li>
          
      </ul>
  </div>
</nav>
<div id="hBack">
  <h2> Academics</h2>
</div>
<!-- Form -->
<section class="printedForm">
<div id="Heading" class="formInputSects">
  <img src="../../images/something.png" alt="" id="logo">
  <h2 id="formH2">Topmost School form</h2>
  <br>
  <div> Letter of Admission</div>
</div>
</section>
<section class="applyModal" id="modal">
<form id="applicationForm">
  <div id="Heading" class="formInputSects">
    <img src="../../images/something.png" alt="" id="logo">
    <h2 id="formH2">Topmost School form</h2>
  </div>
  <p>Please fill the enrollment form</p>
  <div id="nameCont" class="formInputSects">
    <input type="text" id="firstName" placeholder="Firstname">
    <input type="text" id="middletName" placeholder="Middlename">
    <input type="text" id="lastName" placeholder="Lastname">
  </div>
  <!-- <input type="button" value="submit"> -->
  <div id="stateC" class="formInputSects">
    <div id="schoolSectionContainerFF">
      <div>
        <p>State</p> 
        <select name="state" id="state" onchange="findSelected()">
          <option disabled selected>Select state</option>
          <option value="1">Abia</option>
          <option value="2">Adamawa</option>
          <option value="3">Akwa Ibom</option>
          <option value="4">Anambra</option>
          <option value="5">Bauchi</option>
          <option value="6">Bayelsa</option>
          <option value="7">Benue</option>
          <option value="8">Borno</option>
            <option value="9">Cross River</option>
            <option value="10">Delta</option>
            <option value="11">Ebonyi</option>
            <option value="12">Edo</option>
            <option value="13">Ekiti</option>
            <option value="14">Enugu</option>
            <option value="15">Federal Capital Territory</option>
            <option value="16">Gombe</option>
            <option value="17">Imo</option>
            <option value="18">Jigawa</option>
            <option value="19">Kaduna</option>
            <option value="20">Kano</option>
            <option value="21">Katsina</option>
            <option value="22">Kebbi</option>
            <option value="23">Kogi</option>
            <option value="24">Kwara</option>
            <option value="25">Lagos</option>
            <option value="26">Nasarawa</option>
            <option value="27">Niger</option>
            <option value="28">Ogun</option>
            <option value="29">Ondo</option>
            <option value="30">Osun</option>
            <option value="31">Oyo</option>
            <option value="32">Plateau</option>
            <option value="33">Rivers</option>
            <option value="34">Sokoto</option>
            <option value="35">Taraba</option>
            <option value="36">Yobe</option>
            <option value="37">Zamfara</option>
        </select>
      </div>
      <div>
        <p>LGA</p>
        <select name="LGA" id="lga">
        </select>
      </div>
  </div>
  </div>
  <div id="DOBcont" class="formInputSects">
    <p>Date of birth</p>
    <input type="date" name="DOB" id="DOB" >
  </div>
  <div id="POBc" class="formInputSects">
    <p>Place of birth</p>
    <input type="text" name="" id="POB">
  </div>
  <div id="sexc" class="formInputSects">
    <p>Sex</p> 
    <select name="sex" id="sex">
      <option value="1">Male</option>
      <option value="2">Female</option>
      <option value="3" title="we dont do that here" disabled>Transgender</option>
    </select>
  </div>
  <div id="religionc" class="formInputSects">
    <p>Religion</p>
    <select name="religion" id="religion">
      <option value="1">Christian</option>
      <option value="2">Muslim</option>
      <option value="3" title="we dont do that here" disabled>Pagan</option>
    </select>
  </div>
    <div id=" schoolSectionContainer" class="formInputSects">
      <p>Select class</p>
      <div id="schoolSectionContainerFF">

        <select name="sectionSlt" id="sectionSlt" title="for type of classes" onchange="changeSection()" >
          <option value="1">Nursery</option>
          <option value="2">Primary</option>
          <option value="3">Secondary</option>
          <option value="4" disabled >Bording</option>
        </select>
  
          <span>
            <select required name="classSlt" id="classSlt" class="nurserySlt" title="for classes">
              <option value="Nursery 1" class="nursery">Nursery 1</option>
              <option value="Nursery 2" class="nursery">Nursery 2</option>
              <option value="Nursery 3" class="nursery">Nursery 3</option>
            </select>
            <select name="classSlt" id="classSlt" class="primarySlt" title="for classes">
              <option value=" Primary 1" class="primary">Primary 1</option>
              <option value="Primary 2" class="primary">Primary 2</option>
              <option value="Primary 3" class="primary">Primary 3</option>
              <option value="Primary 4" class="primary">Primary 4</option>
              <option value="Primary 5" class="primary">Primary 5</option>
              <option value="Primary 6" class="primary">Primary 6</option>
            </select>
            <select name="classSlt" id="classSlt" class="secondarySlt" title="for classes">
              <option value="JS 1" class="secondary">Junior secondary 1</option>
              <option value="JS 2" class="secondary">Junior secondary 2</option>
              <option value="JS 3" class="secondary">Junior secondary 3</option>
              <option value="JS 4" class="secondary">Senior secondary 1</option>
              <option value="JS 5" class="secondary">Senior secondary 2</option>
              <option value="JS 6" class="secondary">Senior secondary 3</option>        
            </select>
          </span>
      </div>
    </div>
    <div id="btnCont">
      <button id="submitBtn" type="button" onclick="printPage()">Accept and proceed to payment --></button>
    </div>


</form>
</section>
<!-- Form -->
<section id="academics" >
  <div id="academicsCont">
    <h2>Nursery</h2>
    <div id="nursery" class="container">
      <img src="../../images/Nursery class.jpg" alt="">
      <div class="text">
        However, nursery education from TOPMOST INTERCONTINETIAL ACADEMIC allows children the opportunity to apply what they have learned at home in an applied setting, mixing with other individuals outside of their homes. At an early age, the brain develops much faster, this is as a result of the neuron.
        A lot of parents in Nigeria are not aware of the benefits of nursery education to their children. Some do not even see the need for enrolling their children in topmost Intercontinetial, as they do not consider this level of learning to be important. This shouldn’t be, because nursery education is vital to the growth and development of your child.
        Do your child will to regester for our nursery school section and click the button done below.
        <div id="buttCont">
          <div id="imgConta">
            <img src="../../images/hand.png" alt="" srcset="" id="buttonHand">
          </div>
          <button class="apply">Apply Now!!!</button>
          
        </div>
      </div>
    </div>
    <h2>Primary</h2>
    <div id="primary" class="container">
      <img src="../../images/primary.jpg" alt="">
      <div class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolores, fugiat et natus voluptas eum fuga, aliquid hic consequuntur ab quam odio! Ullam similique vel maxime praesentium hic nihil, reprehenderit impedit recusandae molestias, veniam ratione atque eaque optio maiores magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sint. Voluptatem consectetur incidunt quam voluptate, assumenda, at culpa ad commodi ab odio tempora dignissimos repudiandae excepturi quaerat vero minus impedit recusandae sed eveniet adipisci labore dolorem. Voluptatum perferendis voluptates vero.
        <div id="buttCont">
          <div id="imgConta">
            <img src="../../images/hand.png" alt="" srcset="" id="buttonHand">
          </div>
          <button class="apply">Apply Now!!!</button>
        </div>
      </div>
    </div>
    <h2>Secondary</h2>
    <div id="secondary" class="container">
      <img src="../../images/secondary.jpg" alt="">
      <div class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolores, fugiat et natus voluptas eum fuga, aliquid hic consequuntur ab quam odio! Ullam similique vel maxime praesentium hic nihil, reprehenderit impedit recusandae molestias, veniam ratione atque eaque optio maiores magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sint. Voluptatem consectetur incidunt quam voluptate, assumenda, at culpa ad commodi ab odio tempora dignissimos repudiandae excepturi quaerat vero minus impedit recusandae sed eveniet adipisci labore dolorem. Voluptatum perferendis voluptates vero.
        <div id="buttCont">
          <div id="imgConta">
            <img src="../../images/hand.png" alt="" srcset="" id="buttonHand">
          </div>
          <button class="apply">Apply Now!!!</button>
        </div>
      </div>
    </div>
    <h2>Boarding</h2>
    <div id="secondary" class="container">
      <img src="../../images/secondary.jpg" alt="" title="{input boarding picture}">
      <div class="text">
        TOPMOST INTERCONTINETIAL ACADEMIC provide the conditions for boarders to develop their intellectual talents through well-structured and well-observed prep conditions, with support from Tutors and Houseparents, and in addition to provide an atmosphere conducive to carrying out academic work.
        TOPMOST INTERCONTINETIAL ACADEMIC provide a happy, safe secure environment for our boarders to live in and thrive. Ensure a fun and open environment that promotes friendships that will last a lifetime. To treat and be treated by other boys and staff with respect and dignity. To promote and practice the schools 3 R's through the boarding experienc
        <div id="buttCont">
          <div id="imgConta">
            <img src="../../images/hand.png" alt="" srcset="" id="buttonHand">
          </div>
          <button class="apply">Apply Now!!!</button>
        </div>
      </div>
    </div>
</section>
<footer class="footer">
    <div id="footContact">
      <h1>Contact us</h1>
      <ul>
        <li>
          tel:<a href="tel:+2348150753822">+2348150753822</a> &nbsp;
        </li>
        <li>
          address: Location: Ijah Road, Sabon-Wuse, Tafa LGA, Niger State.
        </li>
        <li>
          email: <a href="mailto:">somethingsomething@gmail.com</a> &nbsp;
        </li>
      </ul>

    </div>
    <div class="footnote">Copyright © 2023 <span><a href="https://izzyself.netlify.app/">Israelade</a></span>  - Topmost Intercontinetial Academy. All Rights Reserved</div>
</footer>
<script src="../../index/index.js"></script>
<script src="./academics.js"></script>
</body>`
// for page direction
function printAndPay() {
  var firstName = document.getElementById('firstName').value;
    var middleName = document.getElementById('middletName').value;
    var lastName = document.getElementById('lastName').value;
    var selectedClassType = document.getElementById('sectionSlt').selectedOptions[0].value;
    var selectedClass = document.getElementsByClassName('classSlt')[(selectedClassType - 1)].selectedOptions[0].value;

    var writeUp = "I, " + firstName + " " + middleName + " " + lastName + ", am seeking to be a student into your school. I wish to be in " + selectedClass + " class.";

    document.getElementById('applicationText').innerText = writeUp;
    document.getElementById('applicationOutput').style.display = 'block';

    window.print();


  var option = document.getElementById('sectionSlt').selectedOptions[0].value
  var sectionslt = document.getElementsByClassName('classSlt')[(option - 1)].selectedOptions[0].value
  var jsOrSs = sectionslt.substring(0,sectionslt.length - 2);

  if (option === '1') {
       document.location = 'https://paystack.com/pay/e697ys1sf2'

  }
  else if(option === '2'){
    document.location = 'https://paystack.com/pay/9iwwpv8mac'
  }
  else if(option === '3' && jsOrSs === 'JS')
  {
    document.location = 'https://paystack.com/pay/isuo14zx2p'

  }
  else{
    document.location = 'https://paystack.com/pay/in3b1djcn-'
  }
  
  document.getElementById('applicationForm').reset();
  document.getElementById('applicationOutput').style.display = 'none';
  //  test.substring(0, test.length - 1);
  //  document.location = 'https://paystack.com/pay/e697ys1sf2
  
}
// new bug: fake lga and class optiosn when returened to the page
// at lease code is working
//Implementations to be done, On clicking a section the academics place the option for the section of school gets picked automatically
//Bad form print out
// 