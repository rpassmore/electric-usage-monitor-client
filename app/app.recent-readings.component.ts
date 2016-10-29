import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'recent-readings',
    //templateUrl: './BasicExample.component.html'
    template: `
    <table class="table table-bordered table-stripped">
    <thead>
        <tr>
            <th>Name</th>
            <th>Country</th>
            <th>City</th>
            <th>Email Address</th>
        </tr>
    </thead>    
</table>
    `
})
export class RecentReadingsComponent {   
    myRowData = [
        {"name":"Ronald Bowman","country":"China","city":"Lutou","email":"rbowman0@spotify.com"},
        {"name":"Pamela Hill","country":"Russia","city":"Krylovskaya","email":"phill1@symantec.com"},
        {"name":"Robin Andrews","country":"Ukraine","city":"Korop","email":"randrews2@photobucket.com"},
        {"name":"Peter Kim","country":"Mexico","city":"San Jose","email":"pkim3@theatlantic.com"},
        {"name":"Carol Foster","country":"Mexico","city":"El Aguacate","email":"cfoster8@intel.com"},
        {"name":"Jimmy Burke","country":"Indonesia","city":"Banjarsari","email":"jburke9@over-blog.com"},
        {"name":"Jonathan Crawford","country":"Peru","city":"Alca","email":"jcrawforda@deliciousdays.com"},
        {"name":"Donald Montgomery","country":"Poland","city":"Działoszyce","email":"dmontgomeryb@google.com.br"},
        {"name":"Donna Shaw","country":"Japan","city":"Akune","email":"dshawc@chronoengine.com"},
        {"name":"Helen King","country":"United States","city":"Hollywood","email":"hkingd@devhub.com"},
        {"name":"Walter Myers","country":"China","city":"a ndaowa n", "email":"wmyerse@state.tx.us"},
        {"name":" Alice Collins","country":"Papua Nw  Guine a", "city":"Mendi","email":"acollinsf@npr.org"},
        {"name":"Anne Richards","country":"China","city":"Koramlik","email":"arichardsu@vinaora.com"},
        {"name":"Randy Miller","country":"Indonesia","city":"Trenggulunan","email":"rmillerv@oakley.com"},
        {"name":"Phillip Adams","country":"Bahamas","city":"Duncan Town","email":"padamsw@lycos.com"},
        {"name":"Nicholas Allen","country":"Philippines","city":"Bautista","email":"nallenx@aboutads.info"},
        {"name":"Lisa Willis","country":"Thailand","city":"Lat Yao","email":"lwillisy@istockphoto.com"},
        {"name":"Jeffrey Castillo","country":"Indonesia","city":"Karangsari","email":"jcastilloz@washington.edu"},
        {"name":"Michael Carpenter","country":"Colombia","city":"Cali","email":"mcarpenter13@prlog.org"},
        {"name":"Roger Lee","country":"France","city":"Courtaboeuf","email":"rlee14@earthlink.net"},
        {"name":"Steve Wallace","country":"Russia","city":"Novobeysugskaya","email":"swallace15@cisco.com"},
        {"name":"Shirley Patterson","country":"Peru","city":"La Tinguiña","email":"spatterson16@woothemes.com"},
        {"name":"Nancy Ward","country":"Sweden","city":"Båstad","email":"nward17@mapquest.com"}
    ];


    constructor() {
    }
}
