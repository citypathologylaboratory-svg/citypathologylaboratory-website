<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>City Pathology Laboratory, Halol</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Roboto', Arial, sans-serif; margin:0; background:#f6f8fa; color:#222; }
        header { background:#1565c0; color:#fff; padding:20px 0; }
        .container { width:90%; max-width:1100px; margin:0 auto; }
        nav { display:flex; justify-content:space-between; align-items:center; }
        nav a { color:#fff; text-decoration:none; margin:0 15px; font-weight:500; }
        nav a:hover { text-decoration:underline; }
        h1 { margin-top:0; }
        section { background:#fff; padding:30px; margin:30px 0; border-radius:10px; box-shadow:0 3px 10px rgba(0,0,0,0.06);}
        .features { display:flex; gap:30px; flex-wrap:wrap; }
        .feature-box { background:#e3f2fd; border-radius:8px; padding:20px; flex:1; min-width:220px;}
        .feature-box h3 { margin:0 0 10px; }
        footer { background:#1565c0; color:#fff; text-align:center; padding:16px 0; }
        @media(max-width:700px){
          .features{flex-direction:column;}
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <div>
                  <a href="#">Home</a>
                  <a href="#">Laboratory Investigation</a>
                  <a href="#">Industrial Health Check Up</a>
                  <a href="#">About Us</a>
                  <a href="#">Contact Us</a>
                </div>
            </nav>
        </div>
    </header>

    <div class="container">
        <section>
            <h1>Welcome to City Pathology Laboratory</h1>
            <p>Providing accurate, reliable diagnostic services with cutting-edge technology and expert pathologists.</p>
            <a href="#" style="color:#1565c0;">WhatsApp for Appointments, Bookings, Queries</a>
        </section>

        <section>
            <h2>Industrial Health Check Up</h2>
            <p>Book your Industrial Health Check Up appointment through our automated scheduling system for a convenient and efficient experience.</p>
            <a href="#" style="color:#1565c0;">Book Industrial Health Check Up</a>
        </section>

        <section>
            <h2>Why Choose Us</h2>
            <div class="features">
                <div class="feature-box">
                    <h3>Advanced Technology</h3>
                    <p>State-of-the-art equipment ensures accurate and timely results for all diagnostic tests.</p>
                </div>
                <div class="feature-box">
                    <h3>Expert Pathologists</h3>
                    <p>Highly qualified, experienced pathologists provide precise diagnostics with care and integrity.</p>
                </div>
            </div>
        </section>
    </div>

    <footer>
        <div>Address: Halol, Gujarat | Phone: [Your Number Here]</div>
    </footer>
</body>
</html>
