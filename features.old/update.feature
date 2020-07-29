Feature: Update My Profile

   Background: Open DSO Home page
   Given a user is at DSO Home page

   Scenario: As a guest, I can Login successfully using email
   When a user try to login using email 'yosuasiagian95@gmail.com' and password 'alice123'
   And user try to access akun saya
   And user try to update nama depan nama belakang and '17-09-1995' in regist page
   And user try to update hp and provinsi 'JAWA TIMUR'
   And user try to update kota 'Pacitan' and alamat
   Then user can see success notification
   