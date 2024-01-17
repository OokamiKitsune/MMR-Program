"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SkillLevel_1 = __importDefault(require("./SkillLevel"));
class MMRSystem {
    constructor() {
        // Players in the system
        this.players = []; // Nothing in the players array yet
        // Matches in the system
        this.matches = []; // Nothing in the matches array yet
    }
    addPlayer(player) {
        // Add player to the system/players array
        this.players.push(player);
    }
    getSkillLevel(player) {
        return player.skillLevel;
    }
    createMatch(player1, player2) {
        const matchId = this.matches.length + 1;
        const match = {
            id: matchId,
            players: [player1, player2],
        };
        this.calculateMMR(player1, player2);
        this.matches.push(match);
        return match;
    }
    // Simulated MMR calculation
    calculateMMR(player1, player2) {
        // Simulated logic to calculate MMR and update player stats
        // For simplicity assume the winner gains MMR and the loser loses MMR?
        const winner = Math.random() > 0.5 ? player1 : player2;
        const loser = winner === player1 ? player2 : player1;
        // Update MMR (simulated)
        winner.skillLevel++;
        loser.skillLevel--;
    }
}
// Example:
// Create an instance of the MMRSystem
const mmrSystem = new MMRSystem();
// Add players to the system
const player1 = { id: 1, name: "Alice", skillLevel: SkillLevel_1.default.Bronze };
const player2 = { id: 2, name: "Bob", skillLevel: SkillLevel_1.default.Gold };
mmrSystem.addPlayer(player1);
mmrSystem.addPlayer(player2);
const rank = mmrSystem.getSkillLevel(player1);
// Create a match
const match = mmrSystem.createMatch(player1, player2);
console.log("Match created:", match);
console.log("Updated player1:", player1);
console.log("Updated player2:", player2);
console.log("Rank:", rank);
