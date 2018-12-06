//Perks list updated on Dec 4-2018 from https://fallout.gamepedia.com/Fallout_76_perks
const PERKS = {
    "Strength": [
        {"name": "Concentrated Fire", "ranks": 3,"levelreq":2},
        {"name": "Gladiator", "ranks": 3,"levelreq":2},
        {"name": "Traveling Pharmacy", "ranks": 3,"levelreq":3},
        {"name": "Iron Fist", "ranks": 3,"levelreq":5},
        {"name": "Slugger", "ranks": 3,"levelreq":6},
        {"name": "Pack Rat", "ranks": 3,"levelreq":7},
        {"name": "Shotgunner", "ranks": 3,"levelreq":10},
        {"name": "Basher", "ranks": 2,"levelreq":11},
        {"name": "Sturdy Frame", "ranks": 2,"levelreq":13},
        {"name": "Barbarian", "ranks": 2,"levelreq":14},
        {"name": "Martial Artist", "ranks": 3,"levelreq":16},
        {"name": "Scattershot", "ranks": 3,"levelreq":18},
        {"name": "Expert Gladiator", "ranks": 3,"levelreq":20},
        {"name": "Blocker", "ranks": 3,"levelreq":21},
        {"name": "Bandolier", "ranks": 2,"levelreq":22},
        {"name": "Expert Shotgunner", "ranks": 3,"levelreq":23},
        {"name": "Expert Slugger", "ranks": 3,"levelreq":24},
        {"name": "Strong Back", "ranks": 3,"levelreq":26},
        {"name": "Heavy Gunner", "ranks": 3,"levelreq":30},
        {"name": "Ordnance Express", "ranks": 3,"levelreq":31},
        {"name": "Full Charge", "ranks": 2,"levelreq":33},
        {"name": "Incisor", "ranks": 3,"levelreq":34},
        {"name": "Bear Arms", "ranks": 3,"levelreq":35},
        {"name": "Lock and Load", "ranks": 3,"levelreq":37},
        {"name": "Bullet Shield", "ranks": 3,"levelreq":39},
        {"name": "Expert Heavy Gunner", "ranks": 3,"levelreq":40},
        {"name": "Pain Train", "ranks": 3,"levelreq":41},
        {"name": "Master Gladiator", "ranks": 3,"levelreq":43},
        {"name": "Master Shotgunner", "ranks": 3,"levelreq":45},
        {"name": "Master Slugger", "ranks": 3,"levelreq":48},
        {"name": "Master Heavy Gunner", "ranks": 3,"levelreq":50}
    ],
    "Perception": [
        {"name": "Concentrated Fire", "ranks": 3,"levelreq":2},
        {"name": "Butcher's Bounty", "ranks": 3,"levelreq":3},
        {"name": "Green Thumb", "ranks": 1,"levelreq":4},
        {"name": "Picklock", "ranks": 1,"levelreq":5},
        {"name": "Crack Shot", "ranks": 3,"levelreq":7},
        {"name": "Rifleman", "ranks": 3,"levelreq":8},
        {"name": "Skeet Shooter", "ranks": 3,"levelreq":10},
        {"name": "Pannapictagraphist", "ranks": 1,"levelreq":12},
        {"name": "Exterminator", "ranks": 3,"levelreq":14},
        {"name": "Commando", "ranks": 3,"levelreq":15},
        {"name": "Percepti-Bobble", "ranks": 1,"levelreq":16},
        {"name": "Ground Pounder", "ranks": 3,"levelreq":18},
        {"name": "Expert Lockpick", "ranks": 1,"levelreq":19},
        {"name": "Expert Rifleman", "ranks": 3,"levelreq":20},
        {"name": "Fortune Finder", "ranks": 1,"levelreq":22},
        {"name": "Night Person", "ranks": 3,"levelreq":24},
        {"name": "Expert Commando", "ranks": 3,"levelreq":25},
        {"name": "Awareness", "ranks": 1,"levelreq":27},
        {"name": "Sniper", "ranks": 2,"levelreq":28},
        {"name": "Tank Killer", "ranks": 3,"levelreq":30},
        {"name": "Refractor", "ranks": 4,"levelreq":32},
        {"name": "Glow Sight", "ranks": 3,"levelreq":33},
        {"name": "Grenadier", "ranks": 2,"levelreq":35},
        {"name": "Long Shot", "ranks": 3,"levelreq":37},
        {"name": "Fire in the Hole", "ranks": 3,"levelreq":38},
        {"name": "Master Picklock", "ranks": 1,"levelreq":40},
        {"name": "Master Rifleman", "ranks": 3,"levelreq":42},
        {"name": "Master Commando", "ranks": 3,"levelreq":45},
        {"name": "Night Eyes", "ranks": 1,"levelreq":50},
        {"name": "Penetrator", "ranks": 1,"levelreq":50}
    ],
    "Endurance": [
        {"name": "Lead Belly", "ranks": 3,"levelreq":2},
        {"name": "Dromedary", "ranks": 3,"levelreq":3},
        {"name": "Iron Stomach", "ranks": 3,"levelreq":4},
        {"name": "Slow Metabolizer", "ranks": 3,"levelreq":5},
        {"name": "Thirst Quencher", "ranks": 3,"levelreq":6},
        {"name": "Good Doggy", "ranks": 1,"levelreq":8},
        {"name": "Natural Resistance", "ranks": 3,"levelreq":10},
        {"name": "Hydro Fix", "ranks": 2,"levelreq":11},
        {"name": "Rejuvenated", "ranks": 2,"levelreq":12},
        {"name": "Cola Nut", "ranks": 2,"levelreq":14},
        {"name": "Cannibal", "ranks": 3,"levelreq":15},
        {"name": "Vaccinated", "ranks": 3,"levelreq":16},
        {"name": "Munchy Resistance", "ranks": 2,"levelreq":17},
        {"name": "Homebody", "ranks": 2,"levelreq":19},
        {"name": "Adamantium Skeleton", "ranks": 3,"levelreq":21},
        {"name": "Solar Powered", "ranks": 3,"levelreq":22},
        {"name": "Chem Fiend", "ranks": 3,"levelreq":23},
        {"name": "Aquaboy", "ranks": 1,"levelreq":26},
        {"name": "Fireproof", "ranks": 3,"levelreq":27},
        {"name": "Nocturnal Fortitude", "ranks": 2,"levelreq":29},
        {"name": "Ironclad", "ranks": 5,"levelreq":30},
        {"name": "Revenant", "ranks": 2,"levelreq":32},
        {"name": "Rad Resistant", "ranks": 1,"levelreq":34},
        {"name": "Ghoulish", "ranks": 3,"levelreq":36},
        {"name": "Radicool", "ranks": 1,"levelreq":38},
        {"name": "Professional Drinker", "ranks": 1,"levelreq":39},
        {"name": "All Night Long", "ranks": 3,"levelreq":41},
        {"name": "Chem Resistant", "ranks": 2,"levelreq":43},
        {"name": "Sun Kissed", "ranks": 2,"levelreq":45},
        {"name": "Photosynthetic", "ranks": 2,"levelreq":47},
        {"name": "Lifegiver", "ranks": 3,"levelreq":50}
    ],
    "Charisma": [
        {"name": "Inspirational", "ranks": 3,"levelreq":2},
        {"name": "Happy Camper", "ranks": 1,"levelreq":3},
        {"name": "Lone Wanderer", "ranks": 3,"levelreq":4},
        {"name": "Bodyguards", "ranks": 4,"levelreq":5},
        {"name": "Hard Bargain", "ranks": 3,"levelreq":7},
        {"name": "E.M.T.", "ranks": 3,"levelreq":9},
        {"name": "Bloodsucker", "ranks": 3,"levelreq":11},
        {"name": "Magnetic Personality", "ranks": 2,"levelreq":13},
        {"name": "Field Surgeon", "ranks": 1,"levelreq":15},
        {"name": "Happy-go-Lucky", "ranks": 2,"levelreq":17},
        {"name": "Injector", "ranks": 3,"levelreq":19},
        {"name": "Team Medic", "ranks": 3,"levelreq":20},
        {"name": "Quack Surgeon", "ranks": 1,"levelreq":22},
        {"name": "Party Boy", "ranks": 2,"levelreq":24},
        {"name": "Travel Agent", "ranks": 1,"levelreq":26},
        {"name": "Healing Hands", "ranks": 1,"levelreq":28},
        {"name": "Animal Friend", "ranks": 3,"levelreq":30},
        {"name": "Overly Generous", "ranks": 2,"levelreq":32},
        {"name": "Outlaw", "ranks": 3,"levelreq":32},
        {"name": "Anti-Epidemic", "ranks": 3,"levelreq":34},
        {"name": "Spiritual Healer", "ranks": 3,"levelreq":36},
        {"name": "Squad Maneuvers", "ranks": 2,"levelreq":37},
        {"name": "Philanthropist", "ranks": 3,"levelreq":39},
        {"name": "Suppressor", "ranks": 3,"levelreq":40},
        {"name": "Strange In Numbers", "ranks": 1,"levelreq":42},
        {"name": "Rad Sponge", "ranks": 3,"levelreq":44},
        {"name": "Tenderizer", "ranks": 3,"levelreq":46},
        {"name": "Friendly Fire", "ranks": 3,"levelreq":48},
        {"name": "Wasteland Whisperer", "ranks": 3,"levelreq":50}
    ],
    "Intelligence": [
        {"name": "First Aid", "ranks": 3,"levelreq":2},
        {"name": "Hacker", "ranks": 1,"levelreq":4},
        {"name": "Licensed Plumber", "ranks": 3,"levelreq":5},
        {"name": "Pharmacist", "ranks": 3,"levelreq":6},
        {"name": "Makeshift Warrior", "ranks": 5,"levelreq":9},
        {"name": "Demolition Expert", "ranks": 5,"levelreq":10},
        {"name": "Gunsmith", "ranks": 5,"levelreq":11},
        {"name": "Scrapper", "ranks": 1,"levelreq":13},
        {"name": "Armorer", "ranks": 3,"levelreq":15},
        {"name": "Contractor", "ranks": 2,"levelreq":18},
        {"name": "Science", "ranks": 2,"levelreq":20},
        {"name": "Expert Hacker", "ranks": 1,"levelreq":22},
        {"name": "Fix It Good", "ranks": 3,"levelreq":27},
        {"name": "Batteries Included", "ranks": 3,"levelreq":28},
        {"name": "Wrecking Ball", "ranks": 3,"levelreq":29},
        {"name": "Science Expert", "ranks": 2,"levelreq":31},
        {"name": "Grease Monkey", "ranks": 1,"levelreq":33},
        {"name": "Chemist", "ranks": 1,"levelreq":34},
        {"name": "Stabilized", "ranks": 3,"levelreq":36},
        {"name": "Master Hacker", "ranks": 1,"levelreq":38},
        {"name": "Weapon Artisan", "ranks": 1,"levelreq":40},
        {"name": "Power Smith", "ranks": 3,"levelreq":41},
        {"name": "Science Master", "ranks": 2,"levelreq":43},
        {"name": "Power Patcher", "ranks": 3,"levelreq":44},
        {"name": "Nerd Rage!", "ranks": 3,"levelreq":46},
        {"name": "Robotics Expert", "ranks": 3,"levelreq":48},
        {"name": "Portable Power", "ranks": 3,"levelreq":49},
        {"name": "Power User", "ranks": 3,"levelreq":50}
    ],
    "Agility": [
        {"name": "Action Boy/Girl", "ranks": 3,"levelreq":1},
        {"name": "Born Survivor", "ranks": 3,"levelreq":3},
        {"name": "Gun Runner", "ranks": 2,"levelreq":4},
        {"name": "Moving Target", "ranks": 1,"levelreq":5},
        {"name": "Gunslinger", "ranks": 3,"levelreq":6},
        {"name": "Thru-Hiker", "ranks": 3,"levelreq":7},
        {"name": "Dead Man Sprinting", "ranks": 2,"levelreq":8},
        {"name": "Packin' Light", "ranks": 3,"levelreq":9},
        {"name": "Guerrilla", "ranks": 3,"levelreq":10},
        {"name": "Marathoner", "ranks": 1,"levelreq":13},
        {"name": "Ninja", "ranks": 3,"levelreq":15},
        {"name": "Evasive", "ranks": 3,"levelreq":17},
        {"name": "Modern Renegade", "ranks": 3,"levelreq":18},
        {"name": "Sneak", "ranks": 1,"levelreq":20},
        {"name": "Home Defense", "ranks": 3,"levelreq":22},
        {"name": "Expert Gunslinger", "ranks": 3,"levelreq":24},
        {"name": "Expert Guerrilla", "ranks": 3,"levelreq":25},
        {"name": "Covert Operative", "ranks": 2,"levelreq":27},
        {"name": "Lightfooted", "ranks": 1,"levelreq":29},
        {"name": "Enforcer", "ranks": 3,"levelreq":30},
        {"name": "Goat Legs", "ranks": 2,"levelreq":32},
        {"name": "Ammosmith", "ranks": 2,"levelreq":34},
        {"name": "Escape Artist", "ranks": 1,"levelreq":35},
        {"name": "Mister Sandman", "ranks": 2,"levelreq":37},
        {"name": "White Knight", "ranks": 3,"levelreq":39},
        {"name": "Master Gunslinger", "ranks": 3,"levelreq":41},
        {"name": "Master Guerrilla", "ranks": 3,"levelreq":43},
        {"name": "Dodgy", "ranks": 3,"levelreq":45},
        {"name": "Secret Agent", "ranks": 3,"levelreq":47},
        {"name": "Gun-Fu", "ranks": 3,"levelreq":50}
    ],
    "Luck": [
        {"name": "Pharma Farma", "ranks": 3,"levelreq":2},
        {"name": "Scrounger", "ranks": 3,"levelreq":3},
        {"name": "Serendipity", "ranks": 3,"levelreq":5},
        {"name": "Can Do!", "ranks": 3,"levelreq":7},
        {"name": "Good with Salt", "ranks": 3,"levelreq":9},
        {"name": "Junk Shield", "ranks": 3,"levelreq":10},
        {"name": "Mystery Meat", "ranks": 3,"levelreq":12},
        {"name": "Luck of the Draw", "ranks": 3,"levelreq":14},
        {"name": "Cap Collector", "ranks": 3,"levelreq":16},
        {"name": "Woodchucker", "ranks": 1,"levelreq":17},
        {"name": "Curator", "ranks": 1,"levelreq":19},
        {"name": "Psychopath", "ranks": 3,"levelreq":21},
        {"name": "Dry Nurse", "ranks": 1,"levelreq":23},
        {"name": "Lucky Break", "ranks": 3,"levelreq":24},
        {"name": "Mysterious Stranger", "ranks": 3,"levelreq":26},
        {"name": "Last Laugh", "ranks": 1,"levelreq":27},
        {"name": "Four Leaf Clover", "ranks": 3,"levelreq":29},
        {"name": "Starched Genes", "ranks": 2,"levelreq":30},
        {"name": "One Gun Army", "ranks": 3,"levelreq":31},
        {"name": "Grim Reaper's Sprint", "ranks": 3,"levelreq":33},
        {"name": "Storm Chaser", "ranks": 2,"levelreq":35},
        {"name": "Tormentor", "ranks": 3,"levelreq":37},
        {"name": "Ricochet", "ranks": 3,"levelreq":38},
        {"name": "Quick Hands", "ranks": 3,"levelreq":40},
        {"name": "Bloody Mess", "ranks": 3,"levelreq":42},
        {"name": "Critical Savvy", "ranks": 3,"levelreq":44},
        {"name": "Class Freak", "ranks": 3,"levelreq":46},
        {"name": "Better Criticals", "ranks": 3,"levelreq":47},
        {"name": "Mysterious Savior", "ranks": 3,"levelreq":49},
        {"name": "Super Duper", "ranks": 1,"levelreq":50}
    ]
};

const TOTAL_PERK_CARDS = PERKS.Strength.length +
    PERKS.Perception.length + PERKS.Endurance.length +
    PERKS.Charisma.length + PERKS.Intelligence.length +
    PERKS.Agility.length + PERKS.Luck.length;

let rankedCount = 0;
for (let special in Object.keys(PERKS)) {
    for (let i=0; i++; i<PERKS[special].length) {
        rankedCount += PERKS[special][i].ranks;
    }
}
const TOTAL_REALIZED_CARDS = parseInt(rankedCount);

const SAVED_COOKIE_NAME = "fallout-tool-cookie";

const MODAL_HTML = "<div class=\"modal\">" +
    "  <div class=\"modal-dialog\" role=\"document\">" +
    "    <div class=\"modal-content\">" +
    "      <div class=\"modal-header\">" +
    "        <h5 class=\"modal-title\">Load State</h5>" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">" +
    "          <span aria-hidden=\"true\">&times;</span>" +
    "        </button>" +
    "      </div>" +
    "      <div class=\"modal-body\">" +
    "        <textarea class='form-control' rows=\"9\" placeholder='Paste your save data here' id='loadStateTextarea'></textarea>" +
    "      </div>" +
    "      <div class=\"modal-footer\">" +
    "        <button id='btnModalLoad' type=\"button\" class=\"btn btn-primary\">Load</button>" +
    "        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>" +
    "      </div>" +
    "    </div>" +
    "  </div>" +
    "</div>";

const ALERT_DISPLAY_TIME = 5000; //5 secs