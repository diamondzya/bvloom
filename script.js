const garden = document.getElementById("garden");
    const loveNotes = [
      "You're my everything. 💞",
      "I loveee youu soo muchhh!! 🥺🥺🥺",
      "You're all that I want. 😘😘😘",
      "You're my forever. 🌷",
      "You're my sweetest bloom 🌹",
      "Your smile definitely completes my day. 🥰",
      "You make everything beautiful 🌺",
      "Each moment with you, I feel so loved. 💝"
    ];

    function createFlower() {
      const flower = document.createElement("div");
      flower.className = "flower";

      // random position
      const x = Math.random() * (window.innerWidth - 60);
      const y = Math.random() * (window.innerHeight - 160) + 50;

      flower.style.left = x + "px";
      flower.style.top = y + "px";

      // Create petals
      for (let i = 1; i <= 5; i++) {
        const petal = document.createElement("div");
        petal.className = "petal";
        flower.appendChild(petal);
      }

      // Create center
      const center = document.createElement("div");
      center.className = "center";
      flower.appendChild(center);

      // Click to show message
      flower.onclick = () => {
        const msg = document.createElement("div");
        msg.className = "message";
        msg.innerText = loveNotes[Math.floor(Math.random() * loveNotes.length)];
        msg.style.left = x + 30 + "px";
        msg.style.top = y - 10 + "px";
        garden.appendChild(msg);
        setTimeout(() => msg.remove(), 4000);
      };

      garden.appendChild(flower);
    }

    // Create many flowers
    for (let i = 0; i < 15; i++) {
      createFlower();
    }