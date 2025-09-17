 let isOn = true;              
    let currentColor = 'red';     

    function colorHandler(color) {
      if (!isOn) return;           
      currentColor = color;
      const bulb = document.getElementById("bulb");
      bulb.style.backgroundColor = color;
    }

    function toggleOnOff() {
      const bulb = document.getElementById("bulb");
      const btn = document.getElementById("toggleBtn");
      if (isOn) {
    
        bulb.style.backgroundColor = 'rgb(86, 84, 84)';
        btn.value = 'TURN ON';
      } else {
        // Turn ON: restore last color
        bulb.style.backgroundColor = currentColor;
        btn.value = 'TURN OFF';
      }
      isOn = !isOn;
    }