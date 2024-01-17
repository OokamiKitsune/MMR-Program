import SkillLevel from "./SkillLevel";
// Define still level

interface Player {
  id: number;
  name: string;
  skillLevel: SkillLevel;
}

interface Match {
  id: number;
  players: Player[];
}

class MMRSystem {
  // Players in the system
  private players: Player[] = []; // Nothing in the players array yet

  // Matches in the system
  private matches: Match[] = []; // Nothing in the matches array yet

  addPlayer(player: Player): void {
    // Add player to the system/players array
    this.players.push(player);
  }

  getSkillLevel(player: Player): SkillLevel {
    return player.skillLevel;
  }

  createMatch(player1: Player, player2: Player): Match {
    const matchId = this.matches.length + 1;
    const match: Match = {
      id: matchId,
      players: [player1, player2],
    };
    this.calculateMMR(player1, player2);
    this.matches.push(match);
    return match;
  }
  // Simulated MMR calculation
  private calculateMMR(player1: Player, player2: Player): void {
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
const player1: Player = { id: 1, name: "Alice", skillLevel: SkillLevel.Bronze };
const player2: Player = { id: 2, name: "Bob", skillLevel: SkillLevel.Gold };

mmrSystem.addPlayer(player1);
mmrSystem.addPlayer(player2);
const rank = mmrSystem.getSkillLevel(player1);
// Create a match
const match = mmrSystem.createMatch(player1, player2);

console.log("Match created:", match);
console.log("Updated player1:", player1);
console.log("Updated player2:", player2);
console.log("Rank:", rank);
