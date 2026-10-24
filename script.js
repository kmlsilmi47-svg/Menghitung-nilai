
function cekNilai() {
    const hasil = document.getElementById("hasil");
    let input = document.getElementById("Nilai").value;
    let nilai = Number(input);
    let grade;

    if (input === "" || nilai < 0 || nilai > 100) {
        hasil.innerHTML = "Masukkan nilai antara 0 sampai 100!";
        return;
    }

    if (nilai >= 90) {
        grade = "A";
    } else if (nilai >= 80) {
        grade = "B";
    } else if (nilai >= 70) {
        grade = "C";
    } else {
        grade = "D";
    }

    hasil.innerHTML = "Nilai Kamu: " + grade;
}
