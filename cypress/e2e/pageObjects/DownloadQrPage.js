export class DownloadQr{
    
    elements ={ 
        qrDownloadedDiv : () => cy.get('[class="mw-notification-content"]').contains('QR code downloaded as SVG file')
    }


    qrDownloadedNotification(){
        this.elements.qrDownloadedDiv().should('be.visible')
    }

}


export const DownloadQrCode = new DownloadQr()