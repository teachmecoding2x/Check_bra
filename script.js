document.getElementById("bra-size-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const underbust = parseFloat(document.getElementById("underbust").value);
  const bust = parseFloat(document.getElementById("bust").value);
  const clothingType = document.getElementById("clothing-type").value;
  const fabric = document.getElementById("fabric").value;

  let bandSize = underbust + 4;
  if (bandSize % 2 !== 0) bandSize++; // Round to the nearest even number

  const cupSize = Math.round(bust - bandSize);
  const cupLetters = ["AA", "A", "B", "C", "D", "DD", "E", "F", "G"];
  const cup = cupSize >= 0 && cupSize < cupLetters.length ? cupLetters[cupSize] : "Unknown";

  let clothingRecommendation = "";
  switch (clothingType) {
    case "saree":
      clothingRecommendation = "Opt for padded and supportive bras.";
      break;
    case "crop-top":
      clothingRecommendation = "Seamless or strapless bras work best.";
      break;
    case "corset":
      clothingRecommendation = "Look for firm, structured bras.";
      break;
    case "swimwear":
      clothingRecommendation = "Choose waterproof and halter-style bras.";
      break;
    case "sundress":
      clothingRecommendation = "Stick to light, breathable fabrics.";
      break;
    case "sports-bra":
      clothingRecommendation = "High-support bras are ideal for activities.";
      break;
    default:
      clothingRecommendation = "Standard bras are fine.";
  }

  const resultMessage = `
    Your estimated bra size is: <strong>${bandSize}${cup}</strong>.<br>
    Recommended for your selection (${clothingType} with ${fabric}):<br>
    ${clothingRecommendation}
  `;

  document.getElementById("result").innerHTML = resultMessage;
});
