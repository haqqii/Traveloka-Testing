import {
    Method
} from './method.cy';

const method = new Method();

export class Step {
    // TC-01 - Rent a car
    rentACar() {
        method.inputLocation();
        method.fillPickUpDateTime();
        method.fillDropOffDateTime();
        method.clickSearchCarButton();
        method.selectCar();
        method.selectCarProvider();
        method.setupPickupLocation();
        method.dropOffLocation();
        method.btnBookNow();
        // method.clickCarsProductButton();
        
        
        // method.selectPickUpLocation();
        // method.selectTabWithoutDriver();
        // method.clickContinueButtonPD();
        // method.selectPickUpLocationRO();
        // method.selectDropOffLocationOL();
        // method.fillNotesPorD();
        // method.clickBookNowButton();
        // method.fillContactDetails();
        // method.fillDriverDetails();
        // method.clickContinueButton();
        // method.fillSpecialRequest();
        // method.validateAllRentalReq();
        // method.clickContinueButton();
        // method.selectPaymentMethod();
        // method.validatePaymentSuccess();
    }
}