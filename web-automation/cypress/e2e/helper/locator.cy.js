export class Locator {

    //#region inputLocator
        inputLocation = '[data-testid="rental-search-form-location-input"]';
        hoverLocation = ':nth-child(1) > [aria-label="Jakarta"] > .r-1777fci > [data-testid="rental-search-form-location-item-label"]';
    //#endregion inputLocator

    //#region fillPickupDateTime
        selectPickUpDate = '[data-testid="rental-search-form-date-input-start"]';
        selectStartDate = ':nth-child(1) > :nth-child(2) > :nth-child(2) > .r-1wh2hl7 > .r-edyy15 > :nth-child(1) > [data-testid="mds-calendar"] > [style="width: 656px;"] > :nth-child(1) > :nth-child(1) > [data-year="2024"] > .r-c0cves > :nth-child(9) > [data-testid="date-cell-7-5-2024"] > :nth-child(1) > .r-18u37iz > .r-1awozwy > .css-901oao';
        
        selectFormTime = '[data-testid="rental-search-form-time-input-start"]'
        selectTime = ':nth-child(1) > .r-1l31rp8 > .r-150rngu > :nth-child(1) > .r-391gc0 > .css-901oao';
        btnDone='.r-y46g1k > .css-18t94o4 > .css-1dbjc4n > .css-901oao';
    //#endregion fillPickupDateTime

    //#region fillDropOffDateTime
        selectDropOffDate = '[data-testid="rental-search-form-date-input-end"]';
        selectFormEndDate = ':nth-child(5) > :nth-child(2) > :nth-child(2) > .r-1wh2hl7 > .r-edyy15 > :nth-child(1) > [data-testid="mds-calendar"] > [style="width: 656px;"] > :nth-child(1) > :nth-child(1) > [data-year="2024"] > .r-c0cves > :nth-child(14) > [data-testid="date-cell-12-5-2024"] > :nth-child(1) > .r-18u37iz > .r-1awozwy > .css-901oao';
        selectEndTime = '[data-testid="rental-search-form-time-input-end"]';
        selectOffTime = ':nth-child(12) > .css-901oao';
        btnDone2 = '.r-y46g1k > .css-18t94o4 > .css-1dbjc4n > .css-901oao';
    //#endregion fillDropOffDateTime

    //#region clickSearchCarButton
        btnSearchCar = '[data-testid="rental-search-form-cta"]';
    //#endregion clickSearchCarButton
    
    //#region selectCar
        selectCar = ':nth-child(4) > .r-14lw9ot > .r-ymttw5 > .r-obd0qt > .r-173mn98 > .css-18t94o4';
    //#endregion selectCar

    //#region selectCarProvider
        selectCarProv = ':nth-child(5) > .r-nsbfu8 > .r-13awgt0.r-17s6mgv > .r-1wzrnnt > .css-18t94o4';
    //#endregion selectCarProvider

    //#region setupPickupLocation
    setupPickupLocation = 'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)';
    dropdownOffice = '.r-mgfd1o';
    office = '.r-14lw9ot.r-1q52ik8 > .r-1wtj0ep > .r-13awgt0';
    //#endregion setupPickupLocation

    //#region dropOffLocation
    dropOffLocation = 'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)';
    otherOffice = '[style="max-height: 98px;"] > .r-391gc0 > .r-184en5c > :nth-child(2) > :nth-child(1) > .r-u4s1nx > .css-11aywtz';
    popularLocation = "div[class='css-1dbjc4n r-14lw9ot r-kdyh1x r-da5iq2'] div[class='css-1dbjc4n'] div[class='css-1dbjc4n'] div[class='css-1dbjc4n'] div[class='css-1dbjc4n'] div[aria-label='Soekarno Hatta International Airport (CGK)']";
    addNotes = '.r-1awozwy > .css-11aywtz';
    //#endregion droOffLocation

    //#region btnBookNow
    btnBookNow = '.r-173mn98 > .css-18t94o4';
    //#endregion btnBookNow



	// input
    inputPickUpDate = ':nth-child(1) > :nth-child(2) > :nth-child(2) > .r-1wh2hl7 > .r-edyy15 > :nth-child(1) > [data-testid="mds-calendar"] > [style="width: 656px;"] > :nth-child(1) > :nth-child(1) > [data-year="2024"] > .r-c0cves > :nth-child(5) > [data-testid="date-cell-3-5-2024"] > :nth-child(1) > .r-18u37iz > .r-1awozwy > .css-901oao';
    inputPickUpTime = '[data-testid="rental-search-form-time-input-start';
    inputDropOffTime = '.input-dropoff-time';
    inputNotes = '.notes';
    inputContactDetail = '.contact-detail';
    inputDriverDetail = '.driver-detail';
    inputDropOffDate = '.input-dropoff-date';
    inputSpecialReq = '.input-special-req';

	// button
    
    btnContinuePD = '.continue-pd';
    btnContinue = '.continue';


	//#region SELECT
        
            
            
        
        
            //start date
            

            //end date
            
            selectEndDate = ':nth-child(5) > :nth-child(2) > :nth-child(2) > .r-1wh2hl7 > .r-edyy15 > :nth-child(1) > [data-testid="mds-calendar"] > [style="width: 656px;"] > :nth-child(1) > :nth-child(1) > [data-year="2024"] > .r-c0cves > :nth-child(8) > [data-testid="date-cell-6-5-2024"] > :nth-child(1) > .r-18u37iz > .r-1awozwy > .css-901oao';

            
        
        selectCarProduct = '.cars-product';
        selectTabWithoutDriver = '.without-driver';

        selectPickUpLocRent = '.pickup-loc-rent';
        selectDropOffLocOth = '.pickup-loc-rent';
        selectPaymentMethod = '.payment-method';

    //#endregion SELECT

	// title
	titleCarsProduct = '.cars-product1';

    // requirement
    req1 = 'req-1';
    req2 = 'req-2';
    req3 = 'req-3';
    req4 = 'req-4';

    // alert
    paymentSuccess = '.payment-success';
    paymentFailed = '.payment-failed';
}