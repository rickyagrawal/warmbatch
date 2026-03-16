fetch("./release.json", { cache: "no-cache" })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) {
        if (!d) return;
        var el = document.createElement("div");
        el.className = "deploy-badge";
        el.setAttribute("aria-hidden", "true");
        var ts = d.deployed_at ? new Date(d.deployed_at).toLocaleString() : "";
        el.textContent = (d.commit || "").slice(0, 7) + " \u2022 " + ts;
        document.body.appendChild(el);
    })
    .catch(function () {});
