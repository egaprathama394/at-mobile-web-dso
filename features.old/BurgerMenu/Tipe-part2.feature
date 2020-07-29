Feature: Burger menu - Tipe part 2

   Background: Open DSO Home page
   Given a guest is at DSO Home page

   @TipeMPV @QADBD-156
   Scenario: As a guest, I can access Tipe menu MPV through Home page
   Then a guest can see Tipe Menu MPV Content

   @TipeSUV @QADBD-157
   Scenario: As a guest, I can access Tipe menu SUV through Home page
   Then a guest can see Tipe Menu SUV Content

   @TipeKendaraanNiaga @QADBD-159
   Scenario: As a guest, I can access Tipe menu Kendaraan Niaga through Home page
   Then a guest can see Tipe Menu Kendaraan Niaga Content
