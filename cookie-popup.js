// PROED Cookie Popup - ProED Eğitim ve Danışmanlık
(function() {
  // Eğer daha önce onay verilmişse çıkış yap
  if (localStorage.getItem('proedCookieConsent')) {
    return;
  }
  
  // CSS stil ekle
  var style = document.createElement('style');
  style.innerHTML = `
    #proed-cookie-overlay {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      background: rgba(0,0,0,0.5) !important;
      z-index: 2147483647 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      font-family: Arial, sans-serif !important;
    }
    
    #proed-cookie-popup {
      background: white !important;
      padding: 30px !important;
      border-radius: 12px !important;
      max-width: 500px !important;
      width: 90% !important;
      text-align: center !important;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1) !important;
    }
    
    #proed-cookie-popup h3 {
      margin-top: 0 !important;
      color: #333 !important;
      font-size: 20px !important;
    }
    
    #proed-cookie-popup p {
      color: #666 !important;
      line-height: 1.6 !important;
      margin: 15px 0 !important;
    }
    
    .proed-cookie-btn {
      background: #ff6b35 !important;
      color: white !important;
      border: none !important;
      padding: 12px 24px !important;
      border-radius: 6px !important;
      margin: 0 8px !important;
      cursor: pointer !important;
      font-weight: bold !important;
      font-size: 14px !important;
    }
    
    .proed-cookie-btn.reject {
      background: transparent !important;
      color: #ff6b35 !important;
      border: 2px solid #ff6b35 !important;
      padding: 10px 22px !important;
    }
    
    .proed-cookie-btn:hover {
      opacity: 0.9 !important;
    }
    
    .proed-cookie-link {
      color: #999 !important;
      font-size: 14px !important;
      text-decoration: none !important;
      margin-top: 15px !important;
      display: inline-block !important;
    }
  `;
  document.head.appendChild(style);
  
  // Popup HTML oluştur
  var overlay = document.createElement('div');
  overlay.id = 'proed-cookie-overlay';
  overlay.innerHTML = `
    <div id="proed-cookie-popup">
      <h3>🍪 Bu Site Çerezler Kullanır</h3>
      <p>Bu site deneyiminizi iyileştirmek ve hizmetlerimizi geliştirmek için çerezler kullanır. Siteyi kullanmaya devam ederek çerez kullanımımızı kabul etmiş sayılırsınız.</p>
      <div>
        <button class="proed-cookie-btn" onclick="window.proedAcceptCookies()">Kabul Et</button>
        <button class="proed-cookie-btn reject" onclick="window.proedRejectCookies()">Reddet</button>
      </div>
      <a href="/cerez-politikasi" class="proed-cookie-link" target="_blank">Çerez Politikası</a>
    </div>
  `;
  
  // Popup'ı sayfaya ekle
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  
  // Kabul fonksiyonu
  window.proedAcceptCookies = function() {
    localStorage.setItem('proedCookieConsent', 'accepted');
    document.getElementById('proed-cookie-overlay').remove();
    document.body.style.overflow = 'auto';
    
    // Google Analytics etkinleştir (varsa)
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };
  
  // Reddet fonksiyonu
  window.proedRejectCookies = function() {
    localStorage.setItem('proedCookieConsent', 'rejected');
    document.getElementById('proed-cookie-overlay').remove();
    document.body.style.overflow = 'auto';
    
    // Google Analytics devre dışı bırak (varsa)
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };
  
  // Popup dışına tıklama ile kapatma (isteğe bağlı)
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      window.proedAcceptCookies();
    }
  });
  
})();
