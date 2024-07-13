


const scriptsInEvents = {

	async Gamecode_Event2_Act8(runtime, localVars)
	{
		// Olay: Kullanıcı belirli bir hedefe ulaştığında veya ödül kazandığında verileri güncelleme
		const playerID = "player1"; // Oyuncu ID'si
		const currentGlobalBitcoins = runtime.globalVars.globalBitcoins; // Mevcut GlobalBitcoins değeri
		
		firebase.database().ref('users/' + playerID).update({
		  globalBitcoins: currentGlobalBitcoins + 1000
		});
		
	},

	async Gamecode_Event42_Act8(runtime, localVars)
	{
		var url = 'https://twitter.com/zillion_ton';
		var linkText = "follow X";
		var link = document.createElement('a');
		link.href = url;
		link.target = '_blank';
		link.innerText = linkText;
		link.style.color = 'black';
		link.style.fontSize = '30px';
		link.style.fontWeight = 'bold';
		link.style.textDecoration = 'underline';
		link.style.display = 'block';
		link.style.margin = 'auto';
		link.style.position = 'absolute';
		link.style.top = '50%';
		link.style.left = '50%';
		link.style.transform = 'translate(-50%, -50%)';
		
		var div = document.createElement('div');
		div.style.position = 'fixed';
		div.style.top = '77%';
		div.style.left = '50%';
		div.style.transform = 'translate(-50%, -50%)';
		div.style.border = '1px solid black';
		div.style.borderRadius = '15px';
		div.style.zIndex = '1000';
		div.style.textAlign = 'center';
		
		// Arka plan resmi ekleme
		var img = new Image();
		img.src = 'https://i.imgur.com/OdISf68.png';
		img.onload = function() {
		    div.style.width = img.width + 'px';
		    div.style.height = img.height + 'px';
		    div.style.backgroundImage = 'url(' + img.src + ')';
		    div.style.backgroundSize = 'cover';
		    div.style.backgroundRepeat = 'no-repeat';
		    div.style.padding = '0';
		    div.appendChild(link);
		    document.body.appendChild(div);
		};
		
		// Takip onay butonu oluşturma
		var confirmButton = document.createElement('button');
		confirmButton.innerText = "Takip Ettim";
		confirmButton.style.display = 'none';
		confirmButton.style.position = 'absolute';
		confirmButton.style.top = '70%';
		confirmButton.style.left = '50%';
		confirmButton.style.transform = 'translate(-50%, -50%)';
		confirmButton.style.padding = '10px 20px';
		confirmButton.style.fontSize = '18px';
		confirmButton.style.backgroundColor = '#1DA1F2';
		confirmButton.style.color = 'white';
		confirmButton.style.border = 'none';
		confirmButton.style.borderRadius = '5px';
		confirmButton.style.cursor = 'pointer';
		
		// Onay butonuna tıklama olayı ekleme
		confirmButton.addEventListener('click', function() {
		    // Construct 3'ün AddTwitterBonus fonksiyonunu çağır
		    window.c3_callFunction("AddTwitterBonus");
		    alert('Tebrikler! 10.000 Bitcoin kazandınız.');
		    if (div.parentNode) {
		        div.parentNode.removeChild(div);
		    }
		    document.body.removeChild(confirmButton);
		});
		
		// Twitter linkine tıklama olayı
		link.addEventListener('click', function() {
		    if (div.parentNode) {
		        div.parentNode.removeChild(div);
		    }
		    // Onay butonunu göster
		    document.body.appendChild(confirmButton);
		    confirmButton.style.display = 'block';
		});
		
		div.appendChild(link);
		document.body.appendChild(div);
	},

	async Gamecode_Event48_Act12(runtime, localVars)
	{
		// Kullanıcıya yeni sekme açma bağlantısını göstermek
		var url = 'https://t.me/zillion_ton';
		var linkText = "join Group";
		
		var link = document.createElement('a');
		link.href = url;
		link.target = '_blank';
		link.innerText = linkText;
		link.style.color = 'black';
		link.style.fontSize = '30px'; // Yazı boyutunu büyütme
		link.style.fontWeight = 'bold';
		link.style.textDecoration = 'underline';
		link.style.display = 'block';
		link.style.margin = 'auto';
		link.style.position = 'absolute';
		link.style.top = '50%';
		link.style.left = '50%';
		link.style.transform = 'translate(-50%, -50%)';
		
		var div = document.createElement('div');
		
		div.style.position = 'fixed';
		div.style.top = '79%';
		div.style.left = '50%';
		div.style.transform = 'translate(-50%, -50%)';
		div.style.border = '1px solid black';
		div.style.borderRadius = '15px'; // Kenarları oval yapma
		div.style.zIndex = '1000';
		div.style.textAlign = 'center'; // Metni ortalama
		
		// Arka plan resmi ekleme
		var img = new Image();
		img.src = 'https://i.imgur.com/OdISf68.png'; // Resmin URL'si (örnek olarak placeholder kullanıldı)
		img.onload = function() {
		    div.style.width = img.width + 'px';
		    div.style.height = img.height + 'px';
		    div.style.backgroundImage = 'url(' + img.src + ')';
		    div.style.backgroundSize = 'cover';
		    div.style.backgroundRepeat = 'no-repeat';
		    div.style.padding = '0'; // Padding'i kaldır
		
		    div.appendChild(link);
		    document.body.appendChild(div);
		};
		
		// Geri sayım metni kaldırıldı
		// Pop-up'ı sadece linke tıklanıldığında kapatma
		link.addEventListener('click', function() {
		    if (div.parentNode) {
		        div.parentNode.removeChild(div);
		    }
		});
		
		div.appendChild(link);
		document.body.appendChild(div);
		
	},

	async Gamecode_Event54_Act9(runtime, localVars)
	{
		// Kullanıcıya yeni sekme açma bağlantısını göstermek
		var url = 'https://x.com/zillion_ton/status/1805832340024770707';
		var linkText = "RT Post X";
		
		var link = document.createElement('a');
		link.href = url;
		link.target = '_blank';
		link.innerText = linkText;
		link.style.color = 'black';
		link.style.fontSize = '30px'; // Yazı boyutunu büyütme
		link.style.fontWeight = 'bold';
		link.style.textDecoration = 'underline';
		link.style.display = 'block';
		link.style.margin = 'auto';
		link.style.position = 'absolute';
		link.style.top = '50%';
		link.style.left = '50%';
		link.style.transform = 'translate(-50%, -50%)';
		
		var div = document.createElement('div');
		
		div.style.position = 'fixed';
		div.style.top = '81%';
		div.style.left = '50%';
		div.style.transform = 'translate(-50%, -50%)';
		div.style.border = '1px solid black';
		div.style.borderRadius = '15px'; // Kenarları oval yapma
		div.style.zIndex = '1000';
		div.style.textAlign = 'center'; // Metni ortalama
		
		// Arka plan resmi ekleme
		var img = new Image();
		img.src = 'https://i.imgur.com/OdISf68.png'; // Resmin URL'si (örnek olarak placeholder kullanıldı)
		img.onload = function() {
		    div.style.width = img.width + 'px';
		    div.style.height = img.height + 'px';
		    div.style.backgroundImage = 'url(' + img.src + ')';
		    div.style.backgroundSize = 'cover';
		    div.style.backgroundRepeat = 'no-repeat';
		    div.style.padding = '0'; // Padding'i kaldır
		
		    div.appendChild(link);
		    document.body.appendChild(div);
		};
		
		// Geri sayım metni kaldırıldı
		// Pop-up'ı sadece linke tıklanıldığında kapatma
		link.addEventListener('click', function() {
		    if (div.parentNode) {
		        div.parentNode.removeChild(div);
		    }
		});
		
		div.appendChild(link);
		document.body.appendChild(div);
		
	},

	async Gamecode_Event115_Act1(runtime, localVars)
	{
		// Kullanıcıya yeni sekme açma bağlantısını göstermek
		var url = 'https://twitter.com/zillion_ton';
		var linkText = "go to X";
		
		var link = document.createElement('a');
		link.href = url;
		link.target = '_blank';
		link.innerText = linkText;
		link.style.color = 'black';
		link.style.fontSize = '30px'; // Yazı boyutunu büyütme
		link.style.fontWeight = 'bold';
		link.style.textDecoration = 'underline';
		link.style.display = 'block';
		link.style.margin = 'auto';
		link.style.position = 'absolute';
		link.style.top = '50%';
		link.style.left = '50%';
		link.style.transform = 'translate(-50%, -50%)';
		
		var div = document.createElement('div');
		
		div.style.position = 'fixed';
		div.style.top = '33%';
		div.style.left = '41%';
		div.style.transform = 'translate(-50%, -50%)';
		div.style.border = '1px solid black';
		div.style.borderRadius = '15px'; // Kenarları oval yapma
		div.style.zIndex = '1000';
		div.style.textAlign = 'center'; // Metni ortalama
		
		// Arka plan resmi ekleme
		var img = new Image();
		img.src = 'https://i.imgur.com/OdISf68.png'; // Resmin URL'si (örnek olarak placeholder kullanıldı)
		img.onload = function() {
		    div.style.width = img.width + 'px';
		    div.style.height = img.height + 'px';
		    div.style.backgroundImage = 'url(' + img.src + ')';
		    div.style.backgroundSize = 'cover';
		    div.style.backgroundRepeat = 'no-repeat';
		    div.style.padding = '0'; // Padding'i kaldır
		
		    div.appendChild(link);
		    document.body.appendChild(div);
		};
		
		// Geri sayım metni kaldırıldı
		// Pop-up'ı sadece linke tıklanıldığında kapatma
		link.addEventListener('click', function() {
		    if (div.parentNode) {
		        div.parentNode.removeChild(div);
		    }
		});
		
		setTimeout(function() {
		    document.body.removeChild(div);
		}, 2000);
		
	},

	async Menucode_Event64_Act1(runtime, localVars)
	{
		// Kullanıcıya yeni sekme açma bağlantısını göstermek
		var url = 'https://twitter.com/zillion_ton';
		var linkText = "go to X";
		
		var link = document.createElement('a');
		link.href = url;
		link.target = '_blank';
		link.innerText = linkText;
		link.style.color = 'black';
		link.style.fontSize = '30px'; // Yazı boyutunu büyütme
		link.style.fontWeight = 'bold';
		link.style.textDecoration = 'underline';
		link.style.display = 'block';
		link.style.margin = 'auto';
		link.style.position = 'absolute';
		link.style.top = '50%';
		link.style.left = '50%';
		link.style.transform = 'translate(-50%, -50%)';
		
		var div = document.createElement('div');
		
		div.style.position = 'fixed';
		div.style.top = '15%';
		div.style.left = '56%';
		div.style.transform = 'translate(-50%, -50%)';
		div.style.border = '1px solid black';
		div.style.borderRadius = '15px'; // Kenarları oval yapma
		div.style.zIndex = '1000';
		div.style.textAlign = 'center'; // Metni ortalama
		
		// Arka plan resmi ekleme
		var img = new Image();
		img.src = 'https://i.imgur.com/OdISf68.png'; // Resmin URL'si (örnek olarak placeholder kullanıldı)
		img.onload = function() {
		    div.style.width = img.width + 'px';
		    div.style.height = img.height + 'px';
		    div.style.backgroundImage = 'url(' + img.src + ')';
		    div.style.backgroundSize = 'cover';
		    div.style.backgroundRepeat = 'no-repeat';
		    div.style.padding = '0'; // Padding'i kaldır
		
		    div.appendChild(link);
		    document.body.appendChild(div);
		};
		
		// Geri sayım metni kaldırıldı
		// Pop-up'ı sadece linke tıklanıldığında kapatma
		link.addEventListener('click', function() {
		    if (div.parentNode) {
		        div.parentNode.removeChild(div);
		    }
		});
		
		setTimeout(function() {
		    document.body.removeChild(div);
		}, 2000);
		
	},

	async Menucode_Event65_Act1(runtime, localVars)
	{
		// Kullanıcıya yeni sekme açma bağlantısını göstermek
		var url = 'https://t.me/zillion_ton';
		var linkText = "go Chat";
		
		var link = document.createElement('a');
		link.href = url;
		link.target = '_blank';
		link.innerText = linkText;
		link.style.color = 'black';
		link.style.fontSize = '25px'; // Yazı boyutunu büyütme
		link.style.fontWeight = 'bold';
		link.style.textDecoration = 'underline';
		link.style.display = 'block';
		link.style.margin = 'auto';
		link.style.position = 'absolute';
		link.style.top = '50%';
		link.style.left = '50%';
		link.style.transform = 'translate(-50%, -50%)';
		
		var div = document.createElement('div');
		
		div.style.position = 'fixed';
		div.style.top = '15%';
		div.style.left = '56%';
		div.style.transform = 'translate(-50%, -50%)';
		div.style.border = '1px solid black';
		div.style.borderRadius = '15px'; // Kenarları oval yapma
		div.style.zIndex = '1000';
		div.style.textAlign = 'center'; // Metni ortalama
		
		// Arka plan resmi ekleme
		var img = new Image();
		img.src = 'https://i.imgur.com/OdISf68.png'; // Resmin URL'si (örnek olarak placeholder kullanıldı)
		img.onload = function() {
		    div.style.width = img.width + 'px';
		    div.style.height = img.height + 'px';
		    div.style.backgroundImage = 'url(' + img.src + ')';
		    div.style.backgroundSize = 'cover';
		    div.style.backgroundRepeat = 'no-repeat';
		    div.style.padding = '0'; // Padding'i kaldır
		
		    div.appendChild(link);
		    document.body.appendChild(div);
		};
		
		// Geri sayım metni kaldırıldı
		// Pop-up'ı sadece linke tıklanıldığında kapatma
		link.addEventListener('click', function() {
		    if (div.parentNode) {
		        div.parentNode.removeChild(div);
		    }
		});
		
		setTimeout(function() {
		    document.body.removeChild(div);
		}, 2000);
		
	},

	async Menucode_Event66_Act1(runtime, localVars)
	{
		Firebase.GetValue("users", Firebase.UserID(), "referralCode");
		    Firebase.GetValue("users", Firebase.UserID(), "isNewUser");
	},

	async Gamecompletedcode_Event2_Act4(runtime, localVars)
	{
		console.log("Firebase bağlantısı kurulmaya çalışılıyor");
	},

	async Gamecompletedcode_Event2_Act5(runtime, localVars)
	{
		// Kullanıcı referans kodunu alın
		let userReferralCode = "kullanıcının_telegram_bot_üzerinden_alınan_referans_kodu";
		
		// Firebase Realtime Database referansı
		let database = firebase.database();
		let usersRef = database.ref('users');
		
		// Referans kodunu kullanarak oyuncuyu bul ve ödül ver
		usersRef.orderByChild('referralCode').equalTo(userReferralCode).once('value', function(snapshot) {
		  if (snapshot.exists()) {
		    snapshot.forEach(function(childSnapshot) {
		      let userId = childSnapshot.key;
		      // Ödül verme işlemleri burada yapılır, örneğin GlobalBitcoins vermek:
		      usersRef.child(userId).update({
		        GlobalBitcoins: firebase.database.ServerValue.increment(50000) // Örnek olarak 50.000 GlobalBitcoins veriyoruz
		      });
		      console.log("Oyuncuya ödül verildi!");
		    });
		  } else {
		    console.log("Geçersiz referans kodu veya oyuncu bulunamadı.");
		  }
		});
		
	},

	async Gamecompletedcode_Event4_Act1(runtime, localVars)
	{
		const userData = Firebase.LastReadData;
		let validCode = false;
		let user;
		
		for (let userId in userData) {
		    if (userData[userId].referenceCode === ReferenceCodeInput.Text) {
		        validCode = true;
		        user = userData[userId];
		        break;
		    }
		}
		
		if (validCode && user && !user.rewardClaimed) {
		    giveReward(user);
		} else if (validCode && user && user.rewardClaimed) {
		    ResultText.Text = "Bu kod daha önce kullanılmış.";
		} else {
		    ResultText.Text = "Geçersiz referans kodu.";
		}
		
		console.log("processReferenceCode fonksiyonu çalıştı");
		console.log("Okunan veri:", Firebase.LastReadData);
		
		
	},

	async Gamecompletedcode_Event5_Act1(runtime, localVars)
	{
		function giveReward(user) {
		    Firebase.ReadData("/referralRewards/" + ReferenceCodeInput.Text, "getRewardData");
		    
		    wait(0.5).then(() => {
		        const rewardData = Firebase.LastReadData;
		        
		        Coins += rewardData.coins;
		        
		        Firebase.WriteData("/users/" + user.telegramId + "/rewardClaimed", true);
		        
		        ResultText.Text = "Tebrikler! " + rewardData.coins + "coin kazandınız!";
		    });
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

