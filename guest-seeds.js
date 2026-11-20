(function () {
    const guestDirectorySeed = {
        "1": { nombre: "Frank and Susana", pases: 2, ninos: 0 },
        "2": { nombre: "Chris and Kaitlyn", pases: 2, ninos: 0 },
        "3": { nombre: "Alex and Maria", pases: 2, ninos: 0 },
        "4": { nombre: "George and Karina", pases: 2, ninos: 0 },
        "5": { nombre: "Simon and Jessy", pases: 2, ninos: 0 },
        "6": { nombre: "Jason and Nicole", pases: 2, ninos: 0 },
        "7": { nombre: "Rosa Rosero", pases: 1, ninos: 0 },
        "8": { nombre: "Tony Lopez", pases: 1, ninos: 0 },
        "9": { nombre: "Jeremy Helsel", pases: 1, ninos: 0 },
        "10": { nombre: "Luis y Lucia Balladares", pases: 2, ninos: 0 },
        "11": { nombre: "Adriana y Sonia", pases: 2, ninos: 0 },
        "12": { nombre: "Javier y Gabby Dominguez", pases: 2, ninos: 0 },
        "13": { nombre: "Xiomara Nunez", pases: 1, ninos: 0 },
        "14": { nombre: "Sonia Rosero", pases: 1, ninos: 0 },
        "15": { nombre: "David Solis", pases: 2, ninos: 0 },
        "16": { nombre: "Manuela", pases: 1, ninos: 0 },
        "17": { nombre: "Andre y Argenis", pases: 2, ninos: 0 },
        "18": { nombre: "Kalliopy Katragis", pases: 1, ninos: 0 },
        "19": { nombre: "Tatiana Carrasco", pases: 1, ninos: 0 },
        "20": { nombre: "Juan y Maria", pases: 2, ninos: 0 },
        "21": { nombre: "Hendry y Paty", pases: 2, ninos: 0 },
        "22": { nombre: "Erin", pases: 1, ninos: 0 },
        "23": { nombre: "Miguel y Sonia", pases: 2, ninos: 0 },
        "24": { nombre: "Liz Manay", pases: 1, ninos: 0 }
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
