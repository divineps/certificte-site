// Create the entire page
document.body.style.margin = "0";
document.body.style.fontFamily = "Georgia, serif";
document.body.style.background = "linear-gradient(to bottom right, #004d40, #50c878)";
document.body.style.color = "white";
document.body.style.textAlign = "center";
document.body.style.padding = "40px";

// Input Container
const inputBox = document.createElement("div");
inputBox.style.margin = "auto";
inputBox.style.padding = "20px";
inputBox.style.background = "rgba(255,255,255,0.08)";
inputBox.style.borderRadius = "12px";
inputBox.style.width = "90%";
inputBox.style.maxWidth = "500px";
inputBox.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";

const title = document.createElement("h1");
title.innerText = "Enter Your Name";

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Your Full Name";
input.style.padding = "12px";
input.style.width = "80%";
input.style.marginTop = "10px";
input.style.fontSize = "16px";
input.style.borderRadius = "6px";
input.style.border = "none";

const button = document.createElement("button");
button.innerText = "Generate Certificate";
button.style.marginTop = "15px";
button.style.padding = "12px 20px";
button.style.backgroundColor = "#007f5f";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "6px";
button.style.cursor = "pointer";

inputBox.appendChild(title);
inputBox.appendChild(input);
inputBox.appendChild(button);
document.body.appendChild(inputBox);

// Canvas container
const canvasBox = document.createElement("div");
canvasBox.style.marginTop = "40px";
canvasBox.style.display = "none";
document.body.appendChild(canvasBox);

const canvas = document.createElement("canvas");
canvas.width = 1200;
canvas.height = 850;
canvas.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";
canvas.style.borderRadius = "12px";
canvasBox.appendChild(canvas);

const downloadLink = document.createElement("a");
downloadLink.innerText = "Download Certificate";
downloadLink.style.display = "inline-block";
downloadLink.style.marginTop = "20px";
downloadLink.style.background = "white";
downloadLink.style.color = "#004d40";
downloadLink.style.padding = "10px 20px";
downloadLink.style.textDecoration = "none";
downloadLink.style.borderRadius = "8px";
downloadLink.style.fontWeight = "bold";
downloadLink.download = "Certificate.png";
canvasBox.appendChild(downloadLink);

// Main function
button.onclick = () => {
  const name = input.value.trim();
  if (!name) return alert("Please enter your name.");
  canvasBox.style.display = "block";
  const ctx = canvas.getContext("2d");

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Gradient background
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#004d40");
  gradient.addColorStop(1, "#50c878");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Header
  ctx.font = "50px 'Brush Script MT', cursive";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText("1%... Improvement is key", canvas.width / 2, 100);

  // Emoji
  ctx.font = "40px serif";
  ctx.fillText("🎀", canvas.width / 2 + 280, 100);

  // Title
  ctx.font = "48px Georgia";
  ctx.fillStyle = "#ffd700";
  ctx.fillText("This Is an Award of Diligence to Duty", canvas.width / 2, 200);

  // Sub message
  ctx.font = "28px serif";
  ctx.fillStyle = "white";
  ctx.fillText("This award is presented to", canvas.width / 2, 300);

  // Name
  ctx.font = "40px Georgia";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(name, canvas.width / 2, 360);

// Underline
const textWidth = ctx.measureText(name).width;
ctx.beginPath();
ctx.strokeStyle = "#ffffff";
ctx.lineWidth = 2;
ctx.moveTo((canvas.width - textWidth) / 2, 370); // 370 is just below 360
ctx.lineTo((canvas.width + textWidth) / 2, 370);
ctx.stroke();

  // Follow-up
  ctx.font = "26px serif";
  ctx.fillText(
    "for showing Exceptional diligence in duties by showing up daily.",
    canvas.width / 2,
    410
  );


  // Congratulations
  ctx.font = "36px Verdana";
  ctx.fillStyle = "#ffeb3b";
  ctx.fillText("CONGRATULATIONS 🎉 you’re a legend!", canvas.width / 2, 550);

  
// === Confetti Setup ===
const confettiParticles = [];
const colors = ["#ffd700", "#ffffff", "#50c878", "#00b894", "#a2ff86"];

function createConfettiParticle() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    size: Math.random() * 6 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    speedY: Math.random() * 3 + 2,
    speedX: Math.random() * 2 - 1,
    rotation: Math.random() * 360,
  };
}

// Generate particles
for (let i = 0; i < 150; i++) {
  confettiParticles.push(createConfettiParticle());
}

function drawConfetti() {
  for (let p of confettiParticles) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    ctx.restore();

    // Move particles
    p.y += p.speedY;
    p.x += p.speedX;
    p.rotation += 2;

    // Reset if off screen
    if (p.y > canvas.height) {
      p.y = Math.random() * -canvas.height;
      p.x = Math.random() * canvas.width;
    }
  }
}

// Add animation frame
function animateConfetti() {
  requestAnimationFrame(animateConfetti);

  // Redraw certificate background
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#004d40");
  gradient.addColorStop(1, "#50c878");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawConfetti(); // draw confetti

  // Re-render certificate content
  ctx.font = "50px 'Brush Script MT', cursive";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText("1%... Improvement is key", canvas.width / 2, 100);
  ctx.font = "40px serif";
  ctx.fillText("🎀", canvas.width / 2 + 280, 100);
  ctx.font = "48px Georgia";
  ctx.fillStyle = "#ffd700";
  ctx.fillText("This Is an Award of Deligence to Duty", canvas.width / 2, 200);
  ctx.font = "28px serif";
  ctx.fillStyle = "white";
  ctx.fillText("This award is presented to", canvas.width / 2, 300);
  ctx.font = "40px Georgia";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(name, canvas.width / 2, 360);

  // Underline
  const textWidth = ctx.measureText(name).width;
  ctx.beginPath();
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 2;
  ctx.moveTo((canvas.width - textWidth) / 2, 370);
  ctx.lineTo((canvas.width + textWidth) / 2, 370);
  ctx.stroke();

  ctx.font = "26px serif";
  ctx.fillText(
    "for showing Exceptional diligence in duties by showing up daily.",
    canvas.width / 2,
    410
  );
  ctx.font = "36px Verdana";
  ctx.fillStyle = "#ffeb3b";
  ctx.fillText("CONGRATULATIONS 🎉 you’re a legend!", canvas.width / 2, 550);

  downloadLink.href = canvas.toDataURL();
}
  
  // Download
  downloadLink.href = canvas.toDataURL();
};