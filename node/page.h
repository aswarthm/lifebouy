const char MAIN_page[] = R"=====(


<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<head>
  <link rel="stylesheet" href="../styles.css">
  <title>LIFE BOUY</title>
</head> 

<form action="/get">
  <div>
    <h1>LIFE BOUY</h1>
  </div>
  <div>
    <div>
      <h2>HELP PRIORITY</h2>
    </div>



    <div>

      <input type="checkbox" id="medical" name="medical">
      <label for="medical"> Medical Emergency</label>
      <br>
      <input type="checkbox" id="food" name="food">
      <label for="food"> Food and Necessity</label>
      <br>
      <input type="checkbox" id="otherReq" name="food">
      <label for="otherReq"> Other Requirements</label>
      <br>
    </div>


  </div>
  <div>
    <h2>More Information</h2>

    <label for="quantity">Number of people with you:</label>
    <input type="number" id="quantity" name="quantity" min="0" max="1000">
    <h4 class="gnrltext"> Do the people include...</h4>

    <input type="checkbox" id="women" name="women">
    <label for="women"> Women</label>
    <br>
    <input type="checkbox" id="children" name="children">
    <label for="children"> Children</label>
    <br>
    <input type="checkbox" id="disabled" name="disabled">
    <label for="disabled"> Disabled</label>
    <br>
    <input type="checkbox" id="injured" name="injured">
    <label for="injured"> Injured</label>
    <br>

  </div>
  <br>
  <div>
    <label for="chall">Any other challenges</label>
    <br>
    <input type="text" id="chall" name="chall">
    <br>
  </div>
  <input type="hidden" id="loc" name="loc" value="0,0">
  <input type="submit" value="Submit">
</form>

<div class="SOS">
  <h4> Stay Calm!! If any undesirable challenges, press the SOS button</h4>
  <a href="">
    <button>Visit Google</button>
  </a>
</div>
</section>
<div id="ok"></div>
</body>

</html>


)=====";