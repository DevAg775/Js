var con = document.querySelector("#container");
var love = document.querySelector("i");

con.addEventListener("dblclick", function(e) {
    // Show the heart
    love.style.opacity = 1;

    // Scale effect (optional)
    love.style.transform = "translate(-50%, -50%) scale(1.5)";

    // After a short delay, hide it again
    setTimeout(function() {
        love.style.opacity = 0;
        love.style.transform = "translate(-50%, -50%) scale(1)";
    }, 800); // 0.8 second delay
});
 