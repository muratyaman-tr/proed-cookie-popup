<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Çerez Uyarısı</title>
    <style>
        #cookie-consent {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #f1f1f1;
            padding: 15px;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            z-index: 9999;
            display: none;
        }
        #cookie-consent button {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 8px 15px;
            margin-left: 10px;
            cursor: pointer;
            border-radius: 3px;
        }
        #cookie-consent button:hover {
            background: #45a049;
        }
    </style>
</head>
<body>
    <div id="cookie-consent">
        <p>Bu web sitesi, deneyiminizi geliştirmek için çerezleri kullanır. Devam ederek çerez kullanımını kabul etmiş olursunuz.</p>
        <button id="accept-cookies">Kabul Et</button>
    </div>

    <script>
        // Çerez onayı kontrolü (daha önce kabul edildi mi?)
        if (!localStorage.getItem("cookieConsentAccepted")) {
            document.getElementById("cookie-consent").style.display = "block";
        }

        // Kabul butonuna tıklanınca
        document.getElementById("accept-cookies").addEventListener("click", function() {
            localStorage.setItem("cookieConsentAccepted", "true");
            document.getElementById("cookie-consent").style.display = "none";
        });
    </script>
</body>
</html>
