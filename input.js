function tinhtong(){
    let sn1 = document.getElementById("sn1").value
    sn1 = Number(sn1)
    lưt sn2 = document.getElementById("sn2").value
    sn2 = Number(sn2)
    let tong= sn1 + sn2
    document.getElementById("ketqua").innerText=tong
}