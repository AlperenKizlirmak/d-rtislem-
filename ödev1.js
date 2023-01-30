var s1 = ("Birinci sayıyı giriniz:");
var s2 = ("İkinci sayıyı giriniz:");
var islem = ("İşlem Seçiniz Toplama, Çıkarma, Çarpma, Bölme:");

if(islem == "Toplama")
{
console.log(s1 + s2);
}
else if(islem == "Çıkarma")
{
    console.log(s1 - s2);
}
else if(islem == "Çarpma")
{
    console.log(s1 * s2);
}
else if(islem == "Bölme")
{
    console.log(s1 / s2);
}
else{
    islem="İşlemi seçiniz!"
}