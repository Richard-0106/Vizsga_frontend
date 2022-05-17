<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content=<?php $token = csrf_token();
                                    echo $token; ?>>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="js/Ajax.js"></script>
    <script src="js/Tesztkerdes.js"></script>
    <script src="js/script.js"></script>   
    <link rel="stylesheet" href="css/stilus.css">                              
    <title>Li Richárd</title>
</head>
<body>
    <main>
    <header>
    <h1>Tesztkérdések</h1>

    </header>
    <article>      
                <select id="teszt-valaszto"></select>
    </article>
    <section>
    <div id="tesztek">
            </div>
    </section>
    </main>
</body>
</html>