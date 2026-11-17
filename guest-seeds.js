(function () {
    const guestDirectorySeed = {
        "1": { nombre: "Invitado Especial", pases: 2, ninos: 0 }
    };

    const guestDirectoriesByEvent = {
        "adriana-carolina-40-2026": guestDirectorySeed
    };

    window.LocalGuestSeeds = {
        ...(window.LocalGuestSeeds || {}),
        ...guestDirectoriesByEvent
    };

    window.getLocalGuestDirectoryForEvent = function (eventId) {
        const safeEventId = String(eventId || "").trim();
        return guestDirectoriesByEvent[safeEventId] || {};
    };
}());
