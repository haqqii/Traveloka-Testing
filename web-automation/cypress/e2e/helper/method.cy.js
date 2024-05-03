import {
    Locator
} from './locator.cy';

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat

export class Method {

    //memilih lokasi rental
    inputLocation() {
        // cy.wait(2000); 
        cy.get(locator.inputLocation).type('Jakarta', {force: true});
        cy.get(locator.hoverLocation).click();

    }

    // mengisi pick-up date&time (today+2d 09:00) 07 Mei 2024
    fillPickUpDateTime(){
        //select start date
        cy.get(locator.selectPickUpDate).click();
        cy.get(locator.selectStartDate).click();
            
        //select start time
        cy.get(locator.selectFormTime).click();
        cy.get(locator.selectTime).click();
        cy.get(locator.btnDone).click();
    }
        
    // mengisi drop-off date&time (today+5d 11:00) 12 Mei 2024
    fillDropOffDateTime(){
        //select end date
        cy.get(locator.selectDropOffDate).click();
        cy.get(locator.selectFormEndDate).click();

        //select end time
        cy.get(locator.selectEndTime).click();
        cy.get(locator.selectOffTime).click();
        cy.get(locator.btnDone2).click();
    }
    
    // mengeklik button search car
    clickSearchCarButton() {
        cy.get(locator.btnSearchCar).click();
    }

    // memilih mobil
    selectCar(){
        cy.wait(6000);
        cy.get(locator.selectCar).click();
    }

    // memilih provider mobil dan diarahkan ke halaman detail produk mobil
    selectCarProvider(){
        cy.get(locator.selectCarProv).click();
    }

    setupPickupLocation(){
        cy.get(locator.setupPickupLocation).click();
        cy.get(locator.dropdownOffice).click();
        cy.get(locator.office).click();
    }

    dropOffLocation(){
        cy.get(locator.dropOffLocation).click();
        cy.get(locator.otherOffice).click();
        cy.get(locator.popularLocation).click();
        cy.get(locator.addNotes).type('blablabla');
    }

    //Klik Book Now
    btnBookNow(){
        cy.get(locator.btnBookNow).click();
    }

    // melihat detail produk mobil
    clickCarsProductButton() {
        cy.wait(2000); // Tambahkan waktu tunggu sebelum mencoba mengakses elemen
        cy.get(locator.selectCarProduct).click();
    }




    // mengeklik button continue product detail
    clickContinueButtonPD() {
        cy.get(locator.btnContinuePD).click();
    }

    // mengeklik button continue
    clickContinueButton() {
        cy.get(locator.btnContinue).click();
    }

    // mengeklik button Book Now
    clickBookNowButton() {
        cy.get(locator.btnBookNow).click();
    }

    // memilih tab without driver pada urutan pertama
    selectTabWithoutDriver(){
        cy.get(locator.selectTabWithoutDriver).select(0);
    }

    // memilih pick-up location (jakarta)
    selectPickUpLocation(){
        cy.get(locator.selectPickUpLoc).contains("Jakarta");
    }

    // memilih pick-up location di "Rental Office"
    selectPickUpLocationRO(){
        cy.get(locator.selectPickUpLocRent).select(0);
    }

    // memilih drop-off location di "Other Location"
    selectDropOffLocationOL(){
        cy.get(locator.selectDropOffLocOth).select(0);
    }

    // memilih metode payment
    selectPaymentMethod(){
        cy.get(locator.selectPaymentMethod).select(0);
    }

    // mengisi pickup/dropoff notes
    fillNotesPorD(){
        var notes = "blablabla";
        cy.get(locator.inputNotes).type(notes);
        cy.get(locator.inputNotes).should('have.value', notes);
    }

    // mengisi contact detail
    fillContactDetails(){
        var contact = "blablabla";
        cy.get(locator.inputContactDetail).type(contact);
        cy.get(locator.inputContactDetail).should('have.value', contact);
    }

    // mengisi driver details
    fillDriverDetails(){
        var driver = "blablabla";
        cy.get(locator.inputDriverDetail).type(driver);
        cy.get(locator.inputDriverDetail).should('have.value', driver);
    }

    // mengisi special request
    fillSpecialRequest(){
        var req = "blablabla";
        cy.get(locator.inputSpecialReq).type(req);
        cy.get(locator.inputSpecialReq).should('have.value', req);
    }

    // cek semua kebutuhan rental
    validateAllRentalReq(){
        cy.get(locator.req1).should('be.checked');
        cy.get(locator.req2).should('be.checked');
        cy.get(locator.req3).should('be.checked');
        cy.get(locator.req4).should('be.checked');
    }

    // cek sudah terbayar
    validatePaymentSuccess(){
        cy.get(locator.paymentSuccess).should('be.visible');
    }

}