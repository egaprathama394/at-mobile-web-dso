Feature: Verify Page at Footer part 1

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   Scenario: As a guest, I can access Cara Kerja Page through Menu Astra Daihatsu on footer
   When a guest try to access Cara Kerja Page through Menu Astra Daihatsu on footer
   Then a guest can access Cara Kerja Page 

   @Tentang
   Scenario: As a guest, I can access Tentang Astra Daihatsu Page through Menu Astra Daihatsu on footer
   When a guest try to access Tentang Astra Daihatsu Page through Menu Astra Daihatsu on footer
   Then a guest can access Tentang Astra Daihatsu Page 

   Scenario: As a guest, I can access Panduan Pembelian Page through Menu Astra Daihatsu on footer
   When a guest try to access Panduan Pembelian Page through Menu Astra Daihatsu on footer
   Then a guest can access Panduan Pembelian Page 
