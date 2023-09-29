import { Component } from '@angular/core'

@Component({
    selector: "app-status-display",
    templateUrl: "./status-display.component.html",
    styleUrls: ["./status-display.component.css"]
})
export class StatusDisplay {
    statusMessage = "I sell propane and propane accessories";
    poster = "Zelda Mazur";
    numberOfComments = 1;
    numberOfLikes = 0;
    
    accountLocked = true;

    constructor() {
        setTimeout(() => {
            this.accountLocked = false;
        }, 3000);
    }
}