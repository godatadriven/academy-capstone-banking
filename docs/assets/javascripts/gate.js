// Lightweight client-side password gate for pre-release deployments of this site.
// NOTE: this is a soft gate, not real access control — the page content ships in the
// built HTML/JS regardless, so this only deters casual access, not a determined viewer.
// For genuine access control, use your hosting provider's auth (e.g. Netlify password
// protection, Cloudflare Access, GitHub Pages behind a private network) instead.
(function () {
  var PASSWORD_HASH = "4cdc9742255fba5a3a366819a67d4379bd837eea540c50a8b8f0b46f9f2f11a0";
  var STORAGE_KEY = "capstone_gate_ok";

  if (sessionStorage.getItem(STORAGE_KEY) === "1") {
    return;
  }

  function sha256Hex(text) {
    var data = new TextEncoder().encode(text);
    return crypto.subtle.digest("SHA-256", data).then(function (buf) {
      return Array.prototype.map
        .call(new Uint8Array(buf), function (b) {
          return b.toString(16).padStart(2, "0");
        })
        .join("");
    });
  }

  function showGate() {
    document.documentElement.classList.add("capstone-gate-locked");

    var overlay = document.createElement("div");
    overlay.id = "capstone-gate-overlay";
    overlay.innerHTML =
      '<div class="capstone-gate-box">' +
      "<h1>Capstone Site</h1>" +
      "<p>This is an internal deployment. Enter the access password to continue.</p>" +
      '<form id="capstone-gate-form" autocomplete="off">' +
      '<input type="password" id="capstone-gate-input" placeholder="Password" autocomplete="off" />' +
      "<button type=\"submit\">Unlock</button>" +
      '<div id="capstone-gate-error" role="alert"></div>' +
      "</form>" +
      "</div>";
    document.body.appendChild(overlay);

    document.getElementById("capstone-gate-form").addEventListener("submit", function (event) {
      event.preventDefault();
      var input = document.getElementById("capstone-gate-input");
      var errorEl = document.getElementById("capstone-gate-error");
      sha256Hex(input.value).then(function (hex) {
        if (hex === PASSWORD_HASH) {
          sessionStorage.setItem(STORAGE_KEY, "1");
          document.documentElement.classList.remove("capstone-gate-locked");
          overlay.remove();
        } else {
          errorEl.textContent = "Incorrect password — try again.";
          input.value = "";
          input.focus();
        }
      });
    });

    document.getElementById("capstone-gate-input").focus();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showGate);
  } else {
    showGate();
  }
})();
