const { Builder, By, Key, until } = require('selenium-webdriver');

// Fungsi untuk memainkan permainan
async function playGame() {
    // Tentukan browser yang akan digunakan (contoh: Chrome)
    let driver = await new Builder().forBrowser('chrome').build();
    
    try {
        // Buka website permainan
        await driver.get('https://zzzscore.com/1to50/en/');

        // Tunggu hingga permainan dimulai
        await driver.wait(until.elementLocated(By.xpath("//div[contains(text(), '1')]")), 5000);

        // Loop untuk mencari dan mengklik nomor dari 1 hingga 50
        for (let i = 1; i <= 50; i++) {
            try {
                let numberXpath = `//div[contains(text(), '${i}')]`;
                let numberElement = await driver.findElement(By.xpath(numberXpath));
                await numberElement.click();
            } catch (error) {
                // Hanya tampilkan pesan kesalahan jika nomor tidak ditemukan
                console.error(`Tidak dapat menemukan elemen untuk angka ${i}`);
            }
        }

        console.log('Permainan selesai!');
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    } finally {
        // Tutup browser
        await driver.quit();
    }
}

// Panggil fungsi playGame untuk memulai permainan
playGame();

