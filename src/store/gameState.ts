import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { GameState } from "./constants";

interface GameStateInterface {
  answer: number | null;
  doorsState: boolean[];
  doorsCount: number;
  pickedDoor: number | null;
  prizeDoor: number;
  totalSwitchPlays: number;
  totalStayPlays: number;
  totalSwitchWins: number;
  totalStayWins: number;
  gameState: GameState;
  win: boolean;
}

const initializeState: (previousState?: any) => GameStateInterface = (
  previousState
) => {
  const doorsCount = 3;
  const prizeDoor = Math.floor((Math.random() * doorsCount) % doorsCount);

  return {
    answer: null,
    doorsState: new Array(doorsCount).fill(false),
    doorsCount,
    gameState: GameState.pick,
    pickedDoor: null,
    prizeDoor,
    totalSwitchPlays:
      previousState?.totalSwitchPlays || useStorage("totalSwitchPlays", 0),
    totalStayPlays:
      previousState?.totalStayPlays || useStorage("totalStayPlays", 0),
    totalSwitchWins:
      previousState?.totalSwitchWins || useStorage("totalSwitchWins", 0),
    totalStayWins:
      previousState?.totalStayWins || useStorage("totalStayWins", 0),
    win: false,
  };
};

export const useGameStateStore = defineStore("gameState", {
  state: (): GameStateInterface => initializeState(),
  actions: {
    reset() {
      Object.assign(this, initializeState(this));
    },
    start() {
      initializeState();
    },
    pickDoor(index: number) {
      switch (this.gameState) {
        case GameState.pick: {
          this.gameState = GameState.reveal;
          this.pickedDoor = index;

          this.revealDoor();

          break;
        }
        case GameState.reveal: {
          if (this.doorsState[index]) {
            return;
          }

          this.answer = index;
          this.check();

          break;
        }
        case GameState.gameOver: {
          this.reset();
        }
      }
    },
    revealDoor() {
      const options: number[] = [];

      this.doorsState.forEach((_, cardIndex) => {
        if (cardIndex !== this.prizeDoor && cardIndex !== this.pickedDoor) {
          options.push(cardIndex);
        }
      });

      const revealedDoorIndex =
        options[Math.floor(Math.random() * options.length)];
      this.doorsState[revealedDoorIndex] = true;
    },
    check() {
      const isWining = this.answer === this.prizeDoor;

      if (this.pickedDoor === this.answer) {
        this.totalStayPlays++;

        if (isWining) {
          this.totalStayWins++;
        }
      } else {
        this.totalSwitchPlays++;

        if (isWining) {
          this.totalSwitchWins++;
        }
      }

      this.win = isWining;

      this.gameState = GameState.gameOver;
      this.doorsState = this.doorsState.map(() => true);
    },
  },
  getters: {
    getTotalsPlays(state) {
      return state.totalSwitchPlays + state.totalStayPlays;
    },
  },
});
